package com.team31.codesquad.issuetracker.web;

import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.comment.CommentCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.service.IssueService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
    public OpenClosedCountResult<List<IssueResponse>> getIssues(@RequestParam Integer page,
            @RequestParam(name = "q") String query) {

        return issueService.findAll(page, query);
    }

    @DeleteMapping("/api/v1/issues/{issueId}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/api/v1/issues")
    public ResponseEntity<IssueCreateResponse> createIssue(
            @RequestBody IssueCreateRequest request) {
        IssueCreateResponse response = issueService.createIssue(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/api/v1/issues/{issueId}")
    public IssueDetailResponse getIssueDetail(@PathVariable Long issueId) {
        return issueService.getIssue(issueId);
    }

    @PostMapping("/api/v1/issues/{issueId}/comments")
    public ResponseEntity<Long> createComment(@PathVariable Long issueId,
            @RequestBody CommentCreateRequest request) {
        Long createdCommentId = issueService.createComment(issueId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCommentId);
    }

}
