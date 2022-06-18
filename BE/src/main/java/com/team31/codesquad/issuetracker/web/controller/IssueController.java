package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.config.mvc.annotation.LoginName;
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
import com.team31.codesquad.issuetracker.service.IssueService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
public class IssueController {

    private final IssueService issueService;

    @GetMapping("/api/v1/issues")
    public OpenClosedCountResult<List<IssueResponse>> getIssues(
            @RequestParam(required = false) Integer page,
            @RequestParam(name = "q", required = false) String query) {

        return issueService.findAll(page, query);
    }

    @DeleteMapping("/api/v1/issues/{issueId}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/api/v1/issues")
    public ResponseEntity<IssueCreateResponse> createIssue(
            @Validated @RequestBody IssueCreateRequest request, @LoginName String loginName) {
        IssueCreateResponse response = issueService.createIssue(request, loginName);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/api/v1/issues/{issueId}")
    public IssueDetailResponse getIssueDetail(@PathVariable Long issueId) {
        return issueService.getIssue(issueId);
    }

    @PatchMapping("/api/v1/issues/{issueId}/status")
    public ResponseEntity<Void> changeStatus(@PathVariable Long issueId,
            @Validated @RequestBody IssueStatusChangeRequest request) {
        issueService.changeStatus(issueId, request);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/api/v1/issues")
    public ResponseEntity<Void> changeIssuesStatus(
            @Validated @RequestBody MultiIssueStatusChangeRequest request) {
        issueService.changIssuesStatus(request);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/api/v1/issues/{issueId}/assignees")
    public ResponseEntity<Void> changeAssignee(@PathVariable Long issueId,
            @Validated @RequestBody IssueAssigneesChangeRequest request) {
        issueService.changeAssignee(issueId, request);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/api/v1/issues/{issueId}/milestone")
    public ResponseEntity<Void> changeMilestone(@PathVariable Long issueId,
            @Validated @RequestBody IssueMilestoneChangeRequest request) {
        issueService.changeMilestone(issueId, request);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/api/v1/issues/{issueId}/labels")
    public ResponseEntity<Void> changeLabels(@PathVariable Long issueId,
            @Validated @RequestBody IssueLabelsChangeRequest request) {
        issueService.changeLabels(issueId, request);
        return ResponseEntity.noContent().build();
    }

}
