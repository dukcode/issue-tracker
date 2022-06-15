package com.team31.codesquad.issuetracker.dto.reaction;

import com.team31.codesquad.issuetracker.domain.comment.ReactionEmoji;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReactionCreateRequest {

    private ReactionEmoji emoji;

}
