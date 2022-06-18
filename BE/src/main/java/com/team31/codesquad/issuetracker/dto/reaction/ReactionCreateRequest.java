package com.team31.codesquad.issuetracker.dto.reaction;

import com.team31.codesquad.issuetracker.domain.comment.ReactionEmoji;
import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReactionCreateRequest {

    @NotNull
    private List<ReactionEmoji> emojis;

}
