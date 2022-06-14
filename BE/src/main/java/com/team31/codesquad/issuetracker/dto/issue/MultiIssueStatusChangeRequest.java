package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import java.util.List;

public class MultiIssueStatusChangeRequest {

    private List<Long> issueIds;
    private IssueStatus status;

}
