package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.config.mvc.annotation.LoginName;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/api/v1/issues/{issueId}/comments")
    public ResponseEntity<Long> createComment(@PathVariable Long issueId,
            @Validated @RequestBody CommentCreateRequest request) {
        Long createdCommentId = commentService.createComment(issueId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCommentId);
    }

    @PostMapping("/api/v1/issues/{issueId}/comments/{commentId}/reactions")
    public ResponseEntity<Long> createReaction(
            @PathVariable Long issueId, @PathVariable Long commentId,
            @LoginName String loginName, @RequestBody ReactionCreateRequest request) {
        Long createdReactionId = commentService.createReaction(issueId, commentId, loginName,
                request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdReactionId);
    }

    @DeleteMapping("/api/v1/issues/comments/reactions/{reactionId}")
    public ResponseEntity<Void> deleteReaction(@PathVariable Long reactionId) {
        commentService.deleteReaction(reactionId);
        return ResponseEntity.noContent().build();
    }
}
