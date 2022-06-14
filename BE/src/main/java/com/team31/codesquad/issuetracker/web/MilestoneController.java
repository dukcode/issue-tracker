package com.team31.codesquad.issuetracker.web;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneCreateRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneUpdateRequest;
import com.team31.codesquad.issuetracker.service.MilestoneService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;

    @GetMapping("/api/v1/milestones")
    public OpenClosedCountResult<List<MilestoneResponse>> getMilestones(
            @RequestParam MilestoneStatus status) {
        return milestoneService.findAll(status);
    }

    @PostMapping("/api/v1/milestones")
    public ResponseEntity<Long> createMilestone(@RequestBody MilestoneCreateRequest request) {
        Long createdMilestoneId = milestoneService.createMilestone(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMilestoneId);
    }

    @DeleteMapping("/api/v1/milestones/{milestoneId}")
    public ResponseEntity<Void> deleteMilestone(@PathVariable Long milestoneId) {
        milestoneService.deleteMilestone(milestoneId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/v1/milestones/{milestoneId}")
    public ResponseEntity<Void> updateMilestone(@PathVariable Long milestoneId,
            @RequestBody MilestoneUpdateRequest milestoneUpdateRequest) {
        milestoneService.updateMilestone(milestoneId, milestoneUpdateRequest);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/api/v1/milestones/{milestoneId}")
    public ResponseEntity<Void> changeStatus(@PathVariable Long milestoneId,
            @RequestBody MilestoneStatusChangeRequest request) {
        milestoneService.changeStatus(milestoneId, request);
        return ResponseEntity.noContent().build();
    }

}
