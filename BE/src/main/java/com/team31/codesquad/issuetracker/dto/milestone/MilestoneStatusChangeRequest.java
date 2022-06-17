package com.team31.codesquad.issuetracker.dto.milestone;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MilestoneStatusChangeRequest {

    @NotNull(message = "변경 상태 값은 null이 아니어야 합니다.")
    private MilestoneStatus status;

}
