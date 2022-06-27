package com.team31.codesquad.issuetracker.dto.comment;

import com.team31.codesquad.issuetracker.domain.comment.Reaction;
import com.team31.codesquad.issuetracker.domain.comment.ReactionEmoji;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.Getter;

@Getter
public class ReactionResponse {

    Set<ReactionEmoji> emojis;

    public ReactionResponse(List<Reaction> reactions) {
        this.emojis = reactions.stream()
                .map(Reaction::getEmoji)
                .collect(Collectors.toSet());
    }
}
