package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.CommentService;

public class CommentServiceImpl implements CommentService {

    @Override
    public Long createComment(Long issueId, CommentCreateRequest request) {
        return null;
    }


    @Override
    public Long createReaction(Long issueId, Long commentId, String loginName,
            ReactionCreateRequest request) {
        return null;
    }

    @Override
    public void deleteReaction(Long reactionId) {

    }
}
