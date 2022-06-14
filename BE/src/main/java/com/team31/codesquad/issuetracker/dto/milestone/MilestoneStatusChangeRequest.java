package com.team31.codesquad.issuetracker.dto.milestone;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MilestoneStatusChangeRequest {

    private MilestoneStatus status;

}
