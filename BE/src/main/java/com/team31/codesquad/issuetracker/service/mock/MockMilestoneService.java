package com.team31.codesquad.issuetracker.service.mock;

import static com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus.CLOSED;
import static com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus.OPEN;

import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
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
        Milestone milestone1 = new Milestone("마일스톤 제목1", "마일스톤 설명1",
                LocalDate.of(2022, 7, 1), OPEN);
        Milestone milestone2 = new Milestone("마일스톤 제목2", "마일스톤 설명2",
                LocalDate.of(2022, 7, 1), OPEN);
        Milestone milestone3 = new Milestone("마일스톤 제목3", "마일스톤 설명3",
                LocalDate.of(2022, 7, 1), CLOSED);

        List<Milestone> milestones = Arrays.asList(milestone1, milestone2, milestone3);

        List<MilestoneResponse> filteredMilestoneResponses = milestones.stream()
                .filter(m -> m.getStatus().equals(status))
                .map(MilestoneResponse::new)
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
}
