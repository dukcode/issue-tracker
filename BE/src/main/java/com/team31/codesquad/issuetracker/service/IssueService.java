package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.issue.IssueAssigneesChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueLabelsChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueMilestoneChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.MultiIssueStatusChangeRequest;
import java.util.List;

public interface IssueService {

    OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query);

    void deleteIssue(Long issueId);

    IssueCreateResponse createIssue(IssueCreateRequest request, String loginName);

    IssueDetailResponse getIssue(Long issueId);

    void changeStatus(Long issueId, IssueStatusChangeRequest request);

    void changIssuesStatus(MultiIssueStatusChangeRequest request);

    void changeAssignee(Long issueId, IssueAssigneesChangeRequest request);

    void changeMilestone(Long issueId, IssueMilestoneChangeRequest request);

    void changeLabels(Long issueId, IssueLabelsChangeRequest request);

}
