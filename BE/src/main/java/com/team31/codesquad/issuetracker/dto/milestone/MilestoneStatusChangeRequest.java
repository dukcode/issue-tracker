package com.team31.codesquad.issuetracker.dto.milestone;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class MilestoneStatusChangeRequest {

    private MilestoneStatus status;

}
