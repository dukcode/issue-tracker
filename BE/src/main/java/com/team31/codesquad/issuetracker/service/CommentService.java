package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.comment.CommentUpdateRequest;
import com.team31.codesquad.issuetracker.dto.comment.ReactionResponse;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionToggleRequest;

public interface CommentService {

    Long createComment(Long issueId, CommentCreateRequest request, User loginUser);


    void update(Long issueId, Long commentId,
            CommentUpdateRequest request,
            User loginUser);

    void deleteComment(Long issueId, Long commentId, User loginUser);

    void toggleReaction(Long commentId,
            ReactionToggleRequest request, User loginUser);

    ReactionResponse getLoginUserReactions(Long commentId, User loginUser);
}
