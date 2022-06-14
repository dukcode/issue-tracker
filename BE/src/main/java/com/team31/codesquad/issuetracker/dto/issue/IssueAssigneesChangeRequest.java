package com.team31.codesquad.issuetracker.dto.issue;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueAssigneesChangeRequest {

    private List<Long> assigneeIds;

}
