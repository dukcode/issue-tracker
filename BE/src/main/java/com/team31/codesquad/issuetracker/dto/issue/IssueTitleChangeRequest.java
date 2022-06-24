package com.team31.codesquad.issuetracker.dto.issue;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueTitleChangeRequest {

    @NotBlank
    private String title;

}
