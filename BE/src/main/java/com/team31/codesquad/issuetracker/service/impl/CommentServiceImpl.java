package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.comment.CommentRepository;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueRepository;
import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.domain.user.UserRepository;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.comment.CommentUpdateRequest;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Primary
@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public Long createComment(Long issueId, CommentCreateRequest request,
            String loginName) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));

        User author = userRepository.findByLoginName(loginName)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 user 입니다. loginName = " + loginName));
        Comment comment = new Comment(issue, author, request.getContent());
        commentRepository.save(comment);
        return comment.getId();
    }

    @Transactional
    @Override
    public void deleteComment(Long issueId, Long commentId, String loginName) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 comment 입니다. commentId = " + commentId));
        comment.validateIssue(issueId);
        comment.validateAuthor(loginName);
        commentRepository.deleteById(commentId);
    }

    @Transactional
    @Override
    public void update(Long issueId, Long commentId,
            CommentUpdateRequest request, String loginName) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 comment 입니다. commentId = " + commentId));

        comment.validateIssue(issueId);
        comment.validateAuthor(loginName);
        comment.update(request.getContent());
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
