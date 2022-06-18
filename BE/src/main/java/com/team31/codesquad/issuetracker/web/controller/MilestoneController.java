package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneCreateRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneStatusChangeRequest;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneUpdateRequest;
import com.team31.codesquad.issuetracker.service.MilestoneService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Milestone", description = "Milestone 관련 API")
@RequiredArgsConstructor
@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;

    @Tag(name = "Milestone")
    @Operation(summary = "Milestone 목록 조회",
            description = "조건에 따른 Milestone의 목록을 조회한다.")
    @GetMapping("/api/v1/milestones")
    public OpenClosedCountResult<List<MilestoneResponse>> getMilestones(
            @RequestParam MilestoneStatus status) {
        return milestoneService.findAll(status);
    }

    @Tag(name = "Milestone")
    @Operation(summary = "Milestone 등록",
            description = "Milestone을 등록한다.")
    @PostMapping("/api/v1/milestones")
    public ResponseEntity<Long> createMilestone(
            @Validated @RequestBody MilestoneCreateRequest request) {
        Long createdMilestoneId = milestoneService.createMilestone(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMilestoneId);
    }

    @Tag(name = "Milestone")
    @Operation(summary = "Milestone 삭제",
            description = "Milestone을 삭제한다.")
    @DeleteMapping("/api/v1/milestones/{milestoneId}")
    public ResponseEntity<Void> deleteMilestone(@PathVariable Long milestoneId) {
        milestoneService.deleteMilestone(milestoneId);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Milestone")
    @Operation(summary = "Milestone 수정",
            description = "Milestone을 수정한다.")
    @PutMapping("/api/v1/milestones/{milestoneId}")
    public ResponseEntity<Void> updateMilestone(@PathVariable Long milestoneId,
            @Validated @RequestBody MilestoneUpdateRequest milestoneUpdateRequest) {
        milestoneService.updateMilestone(milestoneId, milestoneUpdateRequest);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Milestone")
    @Operation(summary = "Milestone 상태 변경",
            description = "Milestone의 상태를 OPEN 또는 CLOSED로 변경한다.")
    @PatchMapping("/api/v1/milestones/{milestoneId}")
    public ResponseEntity<Void> changeStatus(@PathVariable Long milestoneId,
            @Validated @RequestBody MilestoneStatusChangeRequest request) {
        milestoneService.changeStatus(milestoneId, request);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Milestone")
    @Operation(summary = "Milestone 갯수 조회",
            description = "조건에 따른 Milestone 갯수를 조회한다.")
    @GetMapping("/api/v1/milestones/count")
    public Long getCount(@RequestParam MilestoneStatus status) {
        return milestoneService.getCount(status);
    }
}
