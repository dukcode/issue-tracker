package com.team31.codesquad.issuetracker.service;

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
import java.util.List;

public interface IssueService {

    OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query);

    void deleteIssue(Long issueId);

    IssueCreateResponse createIssue(IssueCreateRequest request);

    IssueDetailResponse getIssue(Long issueId);

    Long createComment(Long issueId, CommentCreateRequest request);

    void changeStatus(Long issueId, IssueStatusChangeRequest request);

    void changIssuesStatus(MultiIssueStatusChangeRequest request);

    void changeAssignee(Long issueId, IssueAssigneesChangeRequest request);

    void changeMilestone(Long issueId, IssueMilestoneChangeRequest request);

    void changeLabels(Long issueId, IssueLabelsChangeRequest request);

    Long createReaction(Long issueId, Long commentId, String loginName,
            ReactionCreateRequest request);

    void deleteReaction(Long reactionId);
}
