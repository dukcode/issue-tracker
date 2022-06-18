package com.team31.codesquad.issuetracker.dto.issue;

import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueAssigneesChangeRequest {

    @NotNull
    private List<Long> assigneeIds;

}
