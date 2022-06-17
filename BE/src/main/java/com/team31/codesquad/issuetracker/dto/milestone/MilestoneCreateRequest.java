package com.team31.codesquad.issuetracker.dto.milestone;

import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import java.time.LocalDate;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Getter
@NoArgsConstructor
public class MilestoneCreateRequest {

    @NotBlank(message = "마일스톤 제목은 필수 값입니다.")
    private String title;

    private String description;

    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate dueDate;

    public Milestone toEntity() {
        return new Milestone(title, description, dueDate, MilestoneStatus.OPEN);
    }
}
