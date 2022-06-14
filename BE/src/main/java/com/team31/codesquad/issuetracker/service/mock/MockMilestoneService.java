package com.team31.codesquad.issuetracker.service.mock;

import static com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus.CLOSED;
import static com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus.OPEN;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneCreateRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneUpdateRequest;
import com.team31.codesquad.issuetracker.service.MilestoneService;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class MockMilestoneService implements MilestoneService {

    @Override
    public OpenClosedCountResult<List<MilestoneResponse>> findAll(
            MilestoneStatus status) {
        MilestoneResponse milestone1 = new MilestoneResponse(1L, "마일스톤 제목1", "마일스톤 설명1",
                LocalDate.of(2022, 7, 1), OPEN);
        MilestoneResponse milestone2 = new MilestoneResponse(2L, "마일스톤 제목2", "마일스톤 설명2",
                LocalDate.of(2022, 7, 1), OPEN);
        MilestoneResponse milestone3 = new MilestoneResponse(3L, "마일스톤 제목3", "마일스톤 설명3",
                LocalDate.of(2022, 7, 1), CLOSED);

        List<MilestoneResponse> milestones = Arrays.asList(milestone1, milestone2, milestone3);

        List<MilestoneResponse> filteredMilestoneResponses = milestones.stream()
                .filter(m -> m.getStatus().equals(status))
                .collect(Collectors.toList());

        if (status.equals(OPEN)) {
            return new OpenClosedCountResult<>(
                    filteredMilestoneResponses.size(),
                    milestones.size() - filteredMilestoneResponses.size(),
                    filteredMilestoneResponses);
        }

        return new OpenClosedCountResult<>(
                milestones.size() - filteredMilestoneResponses.size(),
                filteredMilestoneResponses.size(),
                filteredMilestoneResponses);
    }

    @Override
    public Long createMilestone(MilestoneCreateRequest request) {
        return 4L;
    }

    @Override
    public void deleteMilestone(Long milestoneId) {
        return;
    }

    @Override
    public void updateMilestone(Long milestoneId, MilestoneUpdateRequest milestoneUpdateRequest) {
        return;
    }

    @Override
    public void changeStatus(Long milestoneId, MilestoneStatusChangeRequest request) {
        return;
    }
}
