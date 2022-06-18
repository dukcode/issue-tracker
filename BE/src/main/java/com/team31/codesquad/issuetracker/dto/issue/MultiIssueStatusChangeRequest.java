package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MultiIssueStatusChangeRequest {

    @NotNull
    private List<Long> issueIds;

    @NotNull
    private IssueStatus status;

}
