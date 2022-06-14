package com.team31.codesquad.issuetracker.dto.label;

import com.team31.codesquad.issuetracker.domain.label.Label;
import com.team31.codesquad.issuetracker.domain.label.TextColor;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class LabelResponse {

    private Long id;
    private String name;
    private String description;
    private String labelColor;
    private TextColor textColor;

    public LabelResponse(Label entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.labelColor = entity.getLabelColor();
        this.textColor = entity.getTextColor();
    }

}
