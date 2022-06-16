package com.team31.codesquad.issuetracker.dto.label;

import com.team31.codesquad.issuetracker.domain.label.Label;
import com.team31.codesquad.issuetracker.domain.label.TextColor;
import com.team31.codesquad.issuetracker.web.validataion.HexColor;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LabelCreateRequest {

    @NotBlank(message = "Label 이름은 필수 값입니다.")
    private String name;

    private String description;

    @HexColor
    private String labelColor;

    @NotNull(message = "Label textColor 값은 필수 값입니다.")
    private TextColor textColor;

    public Label toEntity() {
        return new Label(name, description, labelColor, textColor);
    }
}
