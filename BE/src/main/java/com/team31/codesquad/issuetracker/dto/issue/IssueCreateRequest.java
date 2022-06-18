package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import java.util.List;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueCreateRequest {

    @NotBlank
    private String title;

    private List<Long> assigneeIds;

    private List<Long> labelIds;

    private Long milestoneId;

    @NotNull
    private CommentCreateRequest commentCreateRequest;

}
