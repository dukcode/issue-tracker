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
            String loginName) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));

        User author = userRepository.findByLoginName(loginName);
        Comment comment = new Comment(issue, author, request.getContent());
        commentRepository.save(comment);
        return comment.getId();
    }

    @Transactional
    @Override
    public void deleteComment(Long issueId, Long commentId, String loginName) {
        Comment comment = findCommentWithExistValidation(commentId);
        comment.validateIssue(issueId);
        comment.validateAuthor(loginName);
        commentRepository.deleteById(commentId);
    }

    @Transactional
    @Override
    public void update(Long issueId, Long commentId,
            CommentUpdateRequest request, String loginName) {
        Comment comment = findCommentWithExistValidation(commentId);

        comment.validateIssue(issueId);
        comment.validateAuthor(loginName);
        comment.update(request.getContent());
    }

    @Transactional
    @Override
    public void toggleReaction(Long commentId, ReactionToggleRequest request, String loginName) {
        Comment comment = findCommentWithExistValidation(commentId);
        User user = userRepository.findByLoginName(loginName);

        Optional<Reaction> reaction = reactionRepository.findByUserAndCommentAndEmoji(
                user, comment, request.getEmoji());

        if (reaction.isPresent()) {
            reactionRepository.delete(reaction.get());
            return;
        }
        reactionRepository.save(new Reaction(user, comment, request.getEmoji()));
    }

    @Override
    public ReactionResponse getLoginUserReactions(Long commentId, String loginName) {
        Comment comment = findCommentWithExistValidation(commentId);
        User user = userRepository.findByLoginName(loginName);

        List<Reaction> reactions = reactionRepository.findAllByUserAndComment(user,
                comment);

        return new ReactionResponse(reactions);
    }

    private Comment findCommentWithExistValidation(Long commentId) {
        return commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 comment 입니다. commentId = " + commentId));
    }
}
