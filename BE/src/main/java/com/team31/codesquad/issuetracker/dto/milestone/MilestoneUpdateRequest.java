package com.team31.codesquad.issuetracker.dto.milestone;

import java.time.LocalDate;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@NoArgsConstructor
public class MilestoneUpdateRequest {

    private String title;

    private String description;

    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate dueDate;
}
