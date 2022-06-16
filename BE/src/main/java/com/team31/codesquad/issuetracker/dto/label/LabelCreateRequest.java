package com.team31.codesquad.issuetracker.dto.label;

import com.team31.codesquad.issuetracker.domain.label.Label;
import com.team31.codesquad.issuetracker.domain.label.TextColor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LabelCreateRequest {

    private String name;

    private String description;

    private String labelColor;

    private TextColor textColor;

    public Label toEntity() {
        return new Label(name, description, labelColor, textColor);
    }
}
