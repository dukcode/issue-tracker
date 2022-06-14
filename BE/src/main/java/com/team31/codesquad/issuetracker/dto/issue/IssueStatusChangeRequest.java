package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class IssueStatusChangeRequest {

    private IssueStatus status;

}
