package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneCreateRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneUpdateRequest;
import java.util.List;

public interface MilestoneService {

    OpenClosedCountResult<List<MilestoneResponse>> findAll(
            MilestoneStatus status);

    Long createMilestone(MilestoneCreateRequest request);

    void deleteMilestone(Long milestoneId);

    void updateMilestone(Long milestoneId, MilestoneUpdateRequest milestoneUpdateRequest);

    void changeStatus(Long milestoneId, MilestoneStatusChangeRequest request);
}
