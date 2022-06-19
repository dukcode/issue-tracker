package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneRepository;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneCreateRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneUpdateRequest;
import com.team31.codesquad.issuetracker.service.MilestoneService;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Primary
@Service
public class MilestoneServiceImpl implements MilestoneService {

    private final MilestoneRepository milestoneRepository;

    @Override
    public OpenClosedCountResult<List<MilestoneResponse>> findAll(MilestoneStatus status) {
        List<MilestoneResponse> milestoneResponses = milestoneRepository.findAll().stream()
                .map(MilestoneResponse::new).collect(Collectors.toList());
        List<MilestoneResponse> filteredMilestoneResponses = milestoneResponses.stream()
                .filter(m -> m.getStatus().equals(status))
                .collect(Collectors.toList());

        if (status.equals(MilestoneStatus.OPEN)) {
            return new OpenClosedCountResult<>(
                    (long) filteredMilestoneResponses.size(),
                    (long) milestoneResponses.size() - filteredMilestoneResponses.size(),
                    filteredMilestoneResponses);
        }

        return new OpenClosedCountResult<>(
                (long) milestoneResponses.size() - filteredMilestoneResponses.size(),
                (long) filteredMilestoneResponses.size(),
                filteredMilestoneResponses);
    }

    @Transactional
    @Override
    public Long createMilestone(MilestoneCreateRequest request) {
        if (milestoneRepository.findByTitle(request.getTitle()).isPresent()) {
            throw new IllegalArgumentException("중복된 이름의 마일스톤이 존재합니다.");
        }
        Milestone milestone = request.toEntity();
        milestoneRepository.save(milestone);
        return milestone.getId();
    }

    @Transactional
    @Override
    public void deleteMilestone(Long milestoneId) {
        milestoneRepository.deleteById(milestoneId);
    }

    @Transactional
    @Override
    public void updateMilestone(Long milestoneId, MilestoneUpdateRequest request) {
        milestoneRepository.findByTitle(request.getTitle()).ifPresent(
                findLabel -> {
                    if (!Objects.equals(findLabel.getId(), milestoneId)) {
                        throw new IllegalArgumentException("중복된 이름의 레이블이 존재합니다.");
                    }
                });

        Milestone milestone = milestoneRepository.findById(milestoneId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "해당 마일스톤이 존재하지 않습니다. id = " + milestoneId));

        milestone.update(request.getTitle(), request.getDescription(), request.getDueDate());
    }

    @Transactional
    @Override
    public void changeStatus(Long milestoneId, MilestoneStatusChangeRequest request) {
        Milestone milestone = milestoneRepository.findById(milestoneId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "해당 레이블이 존재하지 않습니다. id = " + milestoneId));

        milestone.changeStatus(request.getStatus());
    }

    @Override
    public Long getCount(MilestoneStatus status) {
        return milestoneRepository.countFilteredByStatus(status);
    }
}
