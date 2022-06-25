package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.config.mvc.annotation.LoginName;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.comment.CommentUpdateRequest;
import com.team31.codesquad.issuetracker.dto.comment.ReactionResponse;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Comment", description = "Comment 관련 API")
@Tag(name = "Reaction", description = "Reaction 관련 API")
@RequiredArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;

    @Tag(name = "Comment")
    @Operation(summary = "Comment 등록",
            description = "해당 Issue에 Comment를 등록한다.")
    @PostMapping("/api/v1/issues/{issueId}/comments")
    public ResponseEntity<Long> createComment(@PathVariable Long issueId,
            @Validated @RequestBody CommentCreateRequest request,
            @LoginName String loginName) {
        Long createdCommentId = commentService.createComment(issueId, request, loginName);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCommentId);
    }

    @Tag(name = "Comment")
    @Operation(summary = "Comment 삭제",
            description = "해당 Issue에 남긴 Comment의 내용을 삭제한다. Comment를 작성한 User만 삭제 권한을 가진다.")
    @DeleteMapping("/api/v1/issues/{issueId}/comments/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long issueId,
            @PathVariable Long commentId, @LoginName String loginName) {
        commentService.deleteComment(issueId, commentId, loginName);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Comment")
    @Operation(summary = "Comment 수정",
            description = "해당 Issue에 남긴 Comment의 내용을 수정한다. Comment를 작성한 User만 수정 권한을 가진다.")
    @PutMapping("/api/v1/issues/{issueId}/comments/{commentId}")
    public ResponseEntity<Void> updateComment(@PathVariable Long issueId,
            @PathVariable Long commentId, @RequestBody CommentUpdateRequest request,
            @LoginName String loginName) {
        commentService.update(issueId, commentId, request, loginName);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Reaction")
    @Operation(summary = "Reaction 등록",
            description = "Emoji 목록을 받아 Comment에 Reaction을 등록한다.")
    @PutMapping("/api/v1/comments/{commentId}/reactions")
    public ResponseEntity<Void> updateReactions(
            @PathVariable Long commentId,
            @Validated @RequestBody ReactionCreateRequest request,
            @LoginName String loginName) {
        commentService.updateReactions(commentId, request, loginName);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @Tag(name = "Reaction")
    @Operation(summary = "Reaction 목록 조회",
            description = "로그인된 User가 해당 Comment에 남긴 Reaction 목록을 받아온다.")
    @GetMapping("/api/v1/comments/{commentId}/reactions")
    public ReactionResponse getLoginUserReactions(
            @PathVariable Long commentId, @LoginName String loginName) {
        return commentService.getLoginUserReactions(commentId, loginName);
    }
}
