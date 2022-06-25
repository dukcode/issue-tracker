package com.team31.codesquad.issuetracker.dto.reaction;

import com.team31.codesquad.issuetracker.domain.comment.ReactionEmoji;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReactionToggleRequest {

    @NotNull
    private ReactionEmoji emoji;
}
