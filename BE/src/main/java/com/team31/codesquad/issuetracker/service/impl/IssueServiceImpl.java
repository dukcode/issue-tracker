package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.comment.CommentRepository;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabelRepository;
import com.team31.codesquad.issuetracker.domain.issue.IssueQueryRepository;
import com.team31.codesquad.issuetracker.domain.issue.IssueRepository;
import com.team31.codesquad.issuetracker.domain.label.LabelRepository;
import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneRepository;
import com.team31.codesquad.issuetracker.domain.user.AssignedUser;
import com.team31.codesquad.issuetracker.domain.user.AssignedUserRepository;
import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.domain.user.UserRepository;
import com.team31.codesquad.issuetracker.dto.OpenClosedCount;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.issue.IssueAssigneesChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueLabelsChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueMilestoneChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueSearchCondition;
import com.team31.codesquad.issuetracker.dto.issue.IssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueTitleChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.MultiIssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.service.IssueService;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Primary
@Service
public class IssueServiceImpl implements IssueService {

    public static final int PAGE_SIZE = 25;

    private final IssueRepository issueRepository;
    private final IssueQueryRepository issueQueryRepository;
    private final UserRepository userRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final CommentRepository commentRepository;
    private final AssignedUserRepository assignedUserRepository;
    private final IssueLabelRepository issueLabelRepository;

    @Override
    public OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query) {

        IssueSearchCondition condition = IssueSearchCondition.create(query);
        Pageable pageable = PageRequest.of(page, PAGE_SIZE);

        List<IssueResponse> issueResponses =
                issueQueryRepository.findAllByCondition(condition, pageable)
                        .stream()
                        .map(IssueResponse::new).collect(Collectors.toList());

        OpenClosedCount openClosedCount = issueQueryRepository.countAllByCondition(condition);

        return new OpenClosedCountResult<>(openClosedCount.getOpenCount(),
                openClosedCount.getClosedCount(), issueResponses);
    }

    @Transactional
    @Override
    public void deleteIssue(Long issueId) {
        issueRepository.deleteById(issueId);
    }

    @Transactional
    @Override
    public IssueCreateResponse createIssue(IssueCreateRequest request, User loginUser) {
        Milestone milestone = getMilestone(request.getMilestoneId());
        Comment comment = new Comment(loginUser, request.getCommentCreateRequest().getContent());
        List<AssignedUser> assignedUsers = createAssignedUsers(request.getAssigneeIds());
        List<IssueLabel> issueLabels = createIssueLabels(request.getLabelIds());

        Issue issue = Issue.createIssue(request.getTitle(), loginUser,
                assignedUsers, issueLabels, milestone, comment);
        issueRepository.save(issue);

        return new IssueCreateResponse(issue.getId(), comment.getId());
    }

    @Override
    public IssueDetailResponse getIssue(Long issueId) {
        Issue issue = findIssueWithExistValidation(issueId);
        return new IssueDetailResponse(issue);
    }

    @Transactional
    @Override
    public void changeStatus(Long issueId, IssueStatusChangeRequest request,
            User statusChangeUser) {
        Issue issue = findIssueWithExistValidation(issueId);
        issue.changStatus(request.getStatus(), statusChangeUser);
    }

    @Transactional
    @Override
    public void changeTitle(Long issueId, IssueTitleChangeRequest request) {
        Issue issue = findIssueWithExistValidation(issueId);
        issue.changeTitle(request.getTitle());
    }

    @Transactional
    @Override
    public void changIssuesStatus(MultiIssueStatusChangeRequest request, User statusChangeUser) {
        issueRepository.findAllById(request.getIssueIds())
                .forEach(i -> i.changStatus(request.getStatus(), statusChangeUser));
    }

    @Transactional
    @Override
    public void changeAssignees(Long issueId, IssueAssigneesChangeRequest request) {
        Issue issue = findIssueWithExistValidation(issueId);
        assignedUserRepository.deleteAll(issue.getAssignees());

        List<AssignedUser> assignedUsers = createAssignedUsers(request.getAssigneeIds());
        issue.updateAssignedUsers(assignedUsers);
    }

    @Transactional
    @Override
    public void changeMilestone(Long issueId, IssueMilestoneChangeRequest request) {
        Issue issue = findIssueWithExistValidation(issueId);
        Milestone milestone = getMilestone(request.getMilestoneId());

        issue.updateMilestone(milestone);
    }

    private Issue findIssueWithExistValidation(Long issueId) {
        return issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
    }

    @Transactional
    @Override
    public void changeLabels(Long issueId, IssueLabelsChangeRequest request) {
        Issue issue = findIssueWithExistValidation(issueId);
        issueLabelRepository.deleteAll(issue.getIssueLabels());

        List<IssueLabel> issueLabels = createIssueLabels(request.getLabelIds());
        issue.updateIssueLabels(issueLabels);
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

        List<IssueLabel> issueLabels = labelRepository.findAllById(labelIds).stream()
                .map(IssueLabel::new)
                .collect(Collectors.toList());

        return issueLabels;
    }

    private List<AssignedUser> createAssignedUsers(List<Long> assigneeIds) {
        if (assigneeIds == null || assigneeIds.size() == 0) {
            return new ArrayList<>();
        }

        List<AssignedUser> assignedUsers = userRepository.findAllById(assigneeIds).stream()
                .map(AssignedUser::new)
                .collect(Collectors.toList());

        return assignedUsers;
    }

}
