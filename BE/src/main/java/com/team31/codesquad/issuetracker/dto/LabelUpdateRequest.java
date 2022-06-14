package com.team31.codesquad.issuetracker.dto;

import com.team31.codesquad.issuetracker.domain.label.TextColor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class LabelUpdateRequest {

    private String name;

    private String description;

    private String labelColor;

    private TextColor textColor;

}
