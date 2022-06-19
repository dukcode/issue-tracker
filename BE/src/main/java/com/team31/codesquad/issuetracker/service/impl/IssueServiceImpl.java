package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.comment.CommentRepository;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabelRepository;
import com.team31.codesquad.issuetracker.domain.issue.IssueRepository;
import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import com.team31.codesquad.issuetracker.domain.label.LabelRepository;
import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneRepository;
import com.team31.codesquad.issuetracker.domain.user.AssignedUser;
import com.team31.codesquad.issuetracker.domain.user.AssignedUserRepository;
import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.domain.user.UserRepository;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.issue.IssueAssigneesChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueLabelsChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueMilestoneChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueTitleChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.MultiIssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.service.IssueService;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Primary
@Service
public class IssueServiceImpl implements IssueService {

    public static final int DEFAULT_PAGE = 1;
    public static final String DEFAULT_QUERY = "is:open";

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final CommentRepository commentRepository;
    private final AssignedUserRepository assignedUserRepository;
    private final IssueLabelRepository issueLabelRepository;

    @Override
    public OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query) {
        setDefaultValue(page, query);

        // TODO: 페이징 및 검색 조건 쿼리 구현

        // 임시 로직
        IssueStatus status = IssueStatus.OPEN;
        if (query.strip().equals("is:closed")) {
            status = IssueStatus.CLOSED;
        }
        long countAll = issueRepository.count();
        List<IssueResponse> issueResponses = issueRepository.findAllByStatus(status).stream()
                .map(IssueResponse::new)
                .collect(Collectors.toList());

        if (status.equals(IssueStatus.OPEN)) {
            return new OpenClosedCountResult<>((long) issueResponses.size(),
                    countAll - issueResponses.size()
                    , issueResponses);
        }

        return new OpenClosedCountResult<>(
                countAll - issueResponses.size(),
                (long) issueResponses.size()
                , issueResponses);
    }

    private void setDefaultValue(Integer page, String query) {
        if (page == null) {
            page = DEFAULT_PAGE;
        }

        if (!StringUtils.hasText(query)) {
            query = DEFAULT_QUERY;
        }
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

    @Override
    public IssueDetailResponse getIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        return new IssueDetailResponse(issue);
    }

    @Transactional
    @Override
    public void changeStatus(Long issueId, IssueStatusChangeRequest request, String loginName) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        User statusChangeUser = getAuthor(loginName);
        issue.changStatus(request.getStatus(), statusChangeUser);
    }

    @Transactional
    @Override
    public void changeTitle(Long issueId, IssueTitleChangeRequest request) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        issue.changeTitle(request.getTitle());
    }

    @Transactional
    @Override
    public void changIssuesStatus(MultiIssueStatusChangeRequest request, String loginName) {
        User statusChangeUser = getAuthor(loginName);
        request.getIssueIds().stream()
                .map(
                        id -> issueRepository.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException(
                                        "존재하지 않는 issue 입니다. issueId = " + id))
                )
                .forEach(i -> i.changStatus(request.getStatus(), statusChangeUser));
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

    @Transactional
    @Override
    public void changeLabels(Long issueId, IssueLabelsChangeRequest request) {
        Issue issue = issueRepository.findById(issueId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "존재하지 않는 issue 입니다. issueId = " + issueId));
        issueLabelRepository.deleteAll(issue.getIssueLabels());

        List<IssueLabel> issueLabels = createIssueLabels(request.getLabelIds());
        issue.updateIssueLabels(issueLabels);
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

}
