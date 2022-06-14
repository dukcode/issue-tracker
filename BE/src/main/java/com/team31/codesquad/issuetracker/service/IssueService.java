package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import java.util.List;

public interface IssueService {

    OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query);

    void deleteIssue(Long issueId);

    IssueCreateResponse createIssue(IssueCreateRequest request);

    IssueDetailResponse getIssue(Long issueId);
}
