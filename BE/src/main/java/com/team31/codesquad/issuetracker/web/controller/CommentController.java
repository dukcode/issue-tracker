package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.config.mvc.annotation.LoginName;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.comment.CommentUpdateRequest;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/api/v1/issues/{issueId}/comments")
    public ResponseEntity<Long> createComment(@PathVariable Long issueId,
            @Validated @RequestBody CommentCreateRequest request,
            @LoginName String loginName) {
        Long createdCommentId = commentService.createComment(issueId, request, loginName);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCommentId);
    }

    @DeleteMapping("/api/v1/issues/{issueId}/comments/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long issueId,
            @PathVariable Long commentId, @LoginName String loginName) {
        commentService.deleteComment(issueId, commentId, loginName);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/v1/issues/{issueId}/comments/{commentId}")
    public ResponseEntity<Void> updateComment(@PathVariable Long issueId,
            @PathVariable Long commentId, @RequestBody CommentUpdateRequest request,
            @LoginName String loginName) {
        commentService.update(issueId, commentId, request, loginName);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/v1/issues/{issueId}/comments/{commentId}/reactions")
    public ResponseEntity<Void> updateReactions(
            @PathVariable Long issueId, @PathVariable Long commentId,
            @Validated @RequestBody ReactionCreateRequest request,
            @LoginName String loginName) {
        commentService.updateReactions(issueId, commentId, request, loginName);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
