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
import com.team31.codesquad.issuetracker.dto.issue.IssueTitleChangeRequest;
import com.team31.codesquad.issuetracker.dto.issue.MultiIssueStatusChangeRequest;
import com.team31.codesquad.issuetracker.service.IssueService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name = "Issue", description = "Issue 관련 API")
@RequiredArgsConstructor
@RestController
public class IssueController {

    private final IssueService issueService;

    @Tag(name = "Issue")
    @GetMapping("/api/v1/issues")
    @Operation(summary = "Issue 목록 조회",
            description = "q와, page에 따라 필터링 된 Issue를 조회한다.")
    public OpenClosedCountResult<List<IssueResponse>> getIssues(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(name = "q", defaultValue = "is:open") String query) {

        return issueService.findAll(page, query);
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue 삭제",
            description = "Issue를 삭제한다. Issue를 작성한 User만 삭제 권한을 가진다.")
    @DeleteMapping("/api/v1/issues/{issueId}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue 등록",
            description = "Issue를 등록한다.")
    @PostMapping("/api/v1/issues")
    public ResponseEntity<IssueCreateResponse> createIssue(
            @Validated @RequestBody IssueCreateRequest request, @LoginName String loginName) {
        IssueCreateResponse response = issueService.createIssue(request, loginName);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue 상세 조회",
            description = "Issue를 상세 조회한다.")
    @GetMapping("/api/v1/issues/{issueId}")
    public IssueDetailResponse getIssueDetail(@PathVariable Long issueId) {
        return issueService.getIssue(issueId);
    }

    @Tag(name = "Issue")
    @Operation(summary = "단건 Issue status 변경",
            description = "단건 Issue의 status를 변경한다.")
    @PatchMapping("/api/v1/issues/{issueId}/status")
    public ResponseEntity<Void> changeStatus(@PathVariable Long issueId,
            @Validated @RequestBody IssueStatusChangeRequest request,
            @LoginName String loginName) {
        issueService.changeStatus(issueId, request, loginName);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Issue")
    @Operation(summary = "다중 Issue status 변경",
            description = "Issue들의 status들을 일괄 변경한다.")
    @PatchMapping("/api/v1/issues")
    public ResponseEntity<Void> changeIssuesStatus(
            @Validated @RequestBody MultiIssueStatusChangeRequest request,
            @LoginName String loginName) {
        issueService.changIssuesStatus(request, loginName);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue assignees 변경",
            description = "Issue의 담당자들을 일괄 변경한다.")
    @PatchMapping("/api/v1/issues/{issueId}/assignees")
    public ResponseEntity<Void> changeAssignee(@PathVariable Long issueId,
            @Validated @RequestBody IssueAssigneesChangeRequest request) {
        issueService.changeAssignees(issueId, request);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue title 변경",
            description = "Issue의 title을 변경한다.")
    @PatchMapping("/api/v1/issues/{issueId}/title")
    public ResponseEntity<Void> changeTitle(@PathVariable Long issueId,
            @Validated @RequestBody IssueTitleChangeRequest request) {
        issueService.changeTitle(issueId, request);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue milestone 변경",
            description = "Issue의 milestone을 변경한다.")
    @PatchMapping("/api/v1/issues/{issueId}/milestone")
    public ResponseEntity<Void> changeMilestone(@PathVariable Long issueId,
            @Validated @RequestBody IssueMilestoneChangeRequest request) {
        issueService.changeMilestone(issueId, request);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Issue")
    @Operation(summary = "Issue labels 변경",
            description = "Issue의 레이블들을 일괄 변경한다.")
    @PatchMapping("/api/v1/issues/{issueId}/labels")
    public ResponseEntity<Void> changeLabels(@PathVariable Long issueId,
            @Validated @RequestBody IssueLabelsChangeRequest request) {
        issueService.changeLabels(issueId, request);
        return ResponseEntity.noContent().build();
    }

}
