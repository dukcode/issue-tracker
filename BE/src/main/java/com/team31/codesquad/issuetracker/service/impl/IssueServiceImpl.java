package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.comment.CommentRepository;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabelRepository;
import com.team31.codesquad.issuetracker.domain.issue.IssueRepository;
import com.team31.codesquad.issuetracker.domain.label.LabelRepository;
import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneRepository;
import com.team31.codesquad.issuetracker.domain.user.AssignedUser;
import com.team31.codesquad.issuetracker.domain.user.AssignedUserRepository;
import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.domain.user.UserRepository;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueAssigneesChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueLabelsChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueMilestoneChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.MultiIssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.reaction.ReactionCreateRequest;
import com.team31.codesquad.issuetracker.service.IssueService;
import java.util.ArrayList;
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
public class IssueServiceImpl implements IssueService {

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final CommentRepository commentRepository;
    private final AssignedUserRepository assignedUserRepository;
    private final IssueLabelRepository issueLabelRepository;

    @Override
    public OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query) {
        return null;
    }

    @Transactional
    @Override
    public void deleteIssue(Long issueId) {
        issueRepository.deleteById(issueId);
    }

    @Transactional
    @Override
    public IssueCreateResponse createIssue(IssueCreateRequest request, String loginName) {
        User author = getAuthor(loginName);
        List<AssignedUser> assignedUsers = createAssignedUsers(request.getAssigneeIds());
        List<IssueLabel> issueLabels = createIssueLabels(request.getLabelIds());
        Milestone milestone = getMilestone(request.getMilestoneId());

        Issue issue = Issue.createIssue(request.getTitle(), author,
                assignedUsers, issueLabels, milestone);
        issueRepository.save(issue);
        Comment comment = new Comment(issue, author,
                request.getCommentCreateRequest().getContent());
        commentRepository.save(comment);

        issue.addComment(comment);

        return new IssueCreateResponse(issue.getId(), comment.getId());
    }

    private User getAuthor(String loginName) {
        return userRepository.findByLoginName(loginName)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 user 입니다. loginName = " + loginName));
    }

    private Milestone getMilestone(Long milestoneId) {
        if (milestoneId == null) {
            return null;
        }
        return milestoneRepository.findById(milestoneId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 milestone 입니다. id = " + milestoneId));
    }

    private List<IssueLabel> createIssueLabels(List<Long> labelIds) {
        if (labelIds == null || labelIds.size() == 0) {
            return new ArrayList<>();
        }

        List<IssueLabel> issueLabels = labelIds.stream()
                .map(id -> labelRepository.findById(id)
                        .orElseThrow(() -> new IllegalArgumentException(
                                "존재하지 않는 label 입니다. id = " + id)))
                .map(IssueLabel::new)
                .collect(Collectors.toList());

        issueLabelRepository.saveAll(issueLabels);
        return issueLabels;
    }

    private List<AssignedUser> createAssignedUsers(List<Long> assigneeIds) {
        if (assigneeIds == null || assigneeIds.size() == 0) {
            return new ArrayList<>();
        }

        List<AssignedUser> assignedUsers = assigneeIds.stream()
                .map(id -> userRepository.findById(id)
                        .orElseThrow(
                                () -> new IllegalArgumentException("존재하지 않는 user 입니다. id = " + id)))
                .map(AssignedUser::new)
                .collect(Collectors.toList());

        assignedUserRepository.saveAll(assignedUsers);
        return assignedUsers;
    }

    @Override
    public IssueDetailResponse getIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        return new IssueDetailResponse(issue);
    }

    @Override
    public Long createComment(Long issueId, CommentCreateRequest request) {
        return null;
    }

    @Transactional
    @Override
    public void changeStatus(Long issueId, IssueStatusChangeRequest request) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        issue.changStatus(request.getStatus());
    }

    @Transactional
    @Override
    public void changIssuesStatus(MultiIssueStatusChangeRequest request) {
        request.getIssueIds().stream()
                .map(
                        id -> issueRepository.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException(
                                        "존재하지 않는 issue 입니다. issueId = " + id))
                )
                .forEach(i -> i.changStatus(request.getStatus()));
    }

    @Transactional
    @Override
    public void changeAssignee(Long issueId, IssueAssigneesChangeRequest request) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        assignedUserRepository.deleteAll(issue.getAssignees());

        List<AssignedUser> assignedUsers = createAssignedUsers(request.getAssigneeIds());
        issue.updateAssignedUsers(assignedUsers);
    }

    @Transactional
    @Override
    public void changeMilestone(Long issueId, IssueMilestoneChangeRequest request) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        Milestone milestone = getMilestone(request.getMilestoneId());

        issue.updateMilestone(milestone);
    }

    @Override
    public void changeLabels(Long issueId, IssueLabelsChangeRequest request) {

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
