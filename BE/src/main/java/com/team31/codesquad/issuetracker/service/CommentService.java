package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.comment.CommentUpdateRequest;
import com.team31.codesquad.issuetracker.dto.comment.ReactionResponse;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;

public interface CommentService {

    Long createComment(Long issueId, CommentCreateRequest request, String loginName);


    void update(Long issueId, Long commentId,
            CommentUpdateRequest request,
            String loginName);

    void deleteComment(Long issueId, Long commentId, String loginName);

    void updateReactions(Long commentId,
            ReactionCreateRequest request, String loginName);

    ReactionResponse getLoginUserReactions(Long commentId, String loginName);
}
