package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneQueryRepository;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneRepository;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCount;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneCreateRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneUpdateRequest;
import com.team31.codesquad.issuetracker.service.MilestoneService;
import java.util.List;
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
    private final MilestoneQueryRepository milestoneQueryRepository;

    @Override
    public OpenClosedCountResult<List<MilestoneResponse>> findAll(MilestoneStatus status) {
        List<MilestoneResponse> milestoneResponses =
                milestoneQueryRepository.findAllByStatusWithFetchIssues(status)
                        .stream()
                        .map(MilestoneResponse::new).collect(Collectors.toList());
        OpenClosedCount openClosedCount = milestoneQueryRepository.countOpenAndClosed();

        return new OpenClosedCountResult<>(openClosedCount.getOpenCount(),
                openClosedCount.getClosedCount(), milestoneResponses);
    }

    @Transactional
    @Override
    public Long createMilestone(MilestoneCreateRequest request) {
        validateDuplicateTitle(request.getTitle());
        Milestone milestone = request.toEntity();
        milestoneRepository.save(milestone);
        return milestone.getId();
    }

    @Transactional
    @Override
    public void deleteMilestone(Long milestoneId) {
        Milestone milestone = findMilestoneById(milestoneId);
        milestoneRepository.delete(milestone);

    }

    @Transactional
    @Override
    public void updateMilestone(Long milestoneId, MilestoneUpdateRequest request) {
        validateDuplicateTitle(request.getTitle());
        Milestone milestone = findMilestoneById(milestoneId);
        milestone.update(request.getTitle(), request.getDescription(), request.getDueDate());
    }

    @Transactional
    @Override
    public void changeStatus(Long milestoneId, MilestoneStatusChangeRequest request) {
        Milestone milestone = findMilestoneById(milestoneId);
        milestone.changeStatus(request.getStatus());
    }

    @Override
    public Long getCount(MilestoneStatus status) {
        return milestoneRepository.countFilteredByStatus(status);
    }

    private Milestone findMilestoneById(Long milestoneId) {
        return milestoneRepository.findById(milestoneId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "해당 마일스톤이 존재하지 않습니다. id = " + milestoneId));
    }

    private void validateDuplicateTitle(String milestoneTitle) {
        if (milestoneRepository.existsByTitle(milestoneTitle)) {
            throw new IllegalArgumentException("중복된 제목의 마일스톤이 존재합니다.");
        }
    }
}
