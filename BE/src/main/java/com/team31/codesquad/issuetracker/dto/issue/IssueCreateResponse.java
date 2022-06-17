package com.team31.codesquad.issuetracker.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class IssueCreateResponse {

    private Long issueId;
    private Long commentId;

}
