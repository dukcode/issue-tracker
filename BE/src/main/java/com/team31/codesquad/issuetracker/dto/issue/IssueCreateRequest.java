package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueCreateRequest {

    private String title;
    private List<Long> assigneeIds;
    private List<Long> labelIds;
    private Long milestoneId;
    private CommentCreateRequest comment;

}
