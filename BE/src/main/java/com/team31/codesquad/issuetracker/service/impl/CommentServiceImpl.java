package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.comment.CommentRepository;
import com.team31.codesquad.issuetracker.domain.comment.Reaction;
import com.team31.codesquad.issuetracker.domain.comment.ReactionRepository;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueRepository;
import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.domain.user.UserRepository;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.comment.CommentUpdateRequest;
import com.team31.codesquad.issuetracker.dto.comment.ReactionResponse;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionToggleRequest;
import com.team31.codesquad.issuetracker.service.CommentService;
import java.util.List;
import java.util.Optional;
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
    private final ReactionRepository reactionRepository;

    @Transactional
    @Override
    public Long createComment(Long issueId, CommentCreateRequest request,
            User loginUser) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));

        Comment comment = new Comment(issue, loginUser, request.getContent());
        commentRepository.save(comment);
        return comment.getId();
    }

    @Transactional
    @Override
    public void deleteComment(Long issueId, Long commentId, User loginUser) {
        Comment comment = findCommentWithExistValidation(commentId);
        comment.validateIssue(issueId);
        comment.validateAuthor(loginUser);
        commentRepository.deleteById(commentId);
    }

    @Transactional
    @Override
    public void update(Long issueId, Long commentId,
            CommentUpdateRequest request, User loginUser) {
        Comment comment = findCommentWithExistValidation(commentId);

        comment.validateIssue(issueId);
        comment.validateAuthor(loginUser);
        comment.update(request.getContent());
    }

    @Transactional
    @Override
    public void toggleReaction(Long commentId, ReactionToggleRequest request, User loginUser) {
        Comment comment = findCommentWithExistValidation(commentId);

        Optional<Reaction> reaction = reactionRepository.findByUserAndCommentAndEmoji(
                loginUser, comment, request.getEmoji());

        if (reaction.isPresent()) {
            reactionRepository.delete(reaction.get());
            return;
        }
        reactionRepository.save(new Reaction(loginUser, comment, request.getEmoji()));
    }

    @Override
    public ReactionResponse getLoginUserReactions(Long commentId, User loginUser) {
        Comment comment = findCommentWithExistValidation(commentId);

        List<Reaction> reactions = reactionRepository.findAllByUserAndComment(loginUser,
                comment);

        return new ReactionResponse(reactions);
    }

    private Comment findCommentWithExistValidation(Long commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 comment 입니다. commentId = " + commentId));
    }
}
