package com.team31.codesquad.issuetracker.dto.issue;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
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
public class IssueResponse {

    private Long id;

    private IssueStatus status;

    private String title;

    private UserResponse author;

    private List<LabelResponse> labels;

    private MilestoneResponse milestone;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime modifiedDate;

    public IssueResponse(Issue issue) {
        this.id = issue.getId();
        this.status = issue.getStatus();
        this.title = issue.getTitle();
        this.author = new UserResponse(issue.getAuthor());
        this.labels = issue.getIssueLabels().stream()
                .map(IssueLabel::getLabel)
                .map(LabelResponse::new)
                .collect(Collectors.toList());
        Optional.ofNullable(issue.getMilestone())
                .ifPresent(m -> this.milestone = new MilestoneResponse(m));
        this.createDate = issue.getCreateDate();
        this.modifiedDate = issue.getModifiedDate();
    }
}
