package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import com.team31.codesquad.issuetracker.domain.user.AssignedUser;
import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.comment.CommentResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class IssueDetailResponse {

    private Long id;
    private IssueStatus status;
    private String title;
    private UserResponse author;
    private List<UserResponse> assignees;
    private List<LabelResponse> labels;
    private MilestoneResponse milestone;
    private LocalDateTime createDate;
    private LocalDateTime modifiedDate;
    private CountResult<List<CommentResponse>> comments;

    public IssueDetailResponse(Issue issue) {
        this.id = issue.getId();
        this.status = issue.getStatus();
        this.title = issue.getTitle();
        this.author = new UserResponse(issue.getAuthor());
        this.assignees = issue.getAssignees().stream()
                .map(AssignedUser::getAssignee)
                .map(UserResponse::new)
                .collect(Collectors.toList());
        this.labels = issue.getIssueLabels().stream()
                .map(IssueLabel::getLabel)
                .map(LabelResponse::new)
                .collect(Collectors.toList());
        Optional.ofNullable(issue.getMilestone())
                .ifPresent(m -> this.milestone = new MilestoneResponse(m));
        this.createDate = issue.getCreateDate();
        this.modifiedDate = issue.getModifiedDate();

        List<CommentResponse> commentResponses = issue.getComments().stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());
        this.comments = new CountResult<>(commentResponses.size(), commentResponses);
    }
}
