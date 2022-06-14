package com.team31.codesquad.issuetracker.web;

import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.service.IssueService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
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

}
