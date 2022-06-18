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
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.CommentService;
import java.util.List;
import java.util.stream.Collectors;
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

    @Transactional
    @Override
    public void updateReactions(Long issueId, Long commentId,
            ReactionCreateRequest request, String loginName) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 comment 입니다. commentId = " + commentId));

        comment.validateIssue(issueId);

        User user = userRepository.findByLoginName(loginName)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 user 입니다. loginName = " + loginName));

        // TODO: 요청중에 기존 reaction과 중복되는 것 지울 필요 있을까?
        reactionRepository.deleteAllInBatch(comment.getReactions());
        List<Reaction> reactions = request.getEmojis().stream()
                .map(e -> new Reaction(user, comment, e))
                .collect(Collectors.toList());
        reactionRepository.saveAll(reactions);
    }

}
