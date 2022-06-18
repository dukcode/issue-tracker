package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;

public interface CommentService {

    Long createComment(Long issueId, CommentCreateRequest request);

    Long createReaction(Long issueId, Long commentId, String loginName,
            ReactionCreateRequest request);

    void deleteReaction(Long reactionId);

}
