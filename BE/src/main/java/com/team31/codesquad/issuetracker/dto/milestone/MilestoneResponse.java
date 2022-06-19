package com.team31.codesquad.issuetracker.dto.milestone;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class MilestoneResponse {

    private Long id;

    private String title;

    private String description;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate dueDate;

    private MilestoneStatus status;

    private Long countOpen;

    private Long countClosed;

    public MilestoneResponse(Milestone entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.description = entity.getDescription();
        this.dueDate = entity.getDueDate();
        this.status = entity.getStatus();
        this.countOpen = entity.getIssues().stream().filter(Issue::isOpen).count();
        this.countClosed = entity.getIssues().size() - countOpen;
    }

}
