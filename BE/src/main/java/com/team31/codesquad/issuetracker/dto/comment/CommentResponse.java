package com.team31.codesquad.issuetracker.dto.comment;

import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.comment.Reaction;
import com.team31.codesquad.issuetracker.domain.comment.ReactionEmoji;
import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class CommentResponse {

    private Long id;
    private boolean systemMessage;
    private UserResponse author;
    private String content;
    private Map<ReactionEmoji, Long> reactions;

    public CommentResponse(Comment comment) {
        this.id = comment.getId();
        this.systemMessage = comment.getSystemMessage();
        this.author = new UserResponse(comment.getAuthor());
        this.content = comment.getContent();
        this.reactions = comment.getReactions().stream()
                .map(Reaction::getReactionEmoji)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }
}
