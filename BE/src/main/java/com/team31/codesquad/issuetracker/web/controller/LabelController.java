package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.label.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelUpdateRequest;
import com.team31.codesquad.issuetracker.service.LabelService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Label", description = "Label 관련 API")
@RequiredArgsConstructor
@RestController
public class LabelController {

    private final LabelService labelService;

    @Tag(name = "Label")
    @Operation(summary = "Label 목록 조회",
            description = "Label의 목록을 조회한다.")
    @GetMapping("/api/v1/labels")
    public CountResult<List<LabelResponse>> getLabels() {
        return labelService.findAll();
    }

    @Tag(name = "Label")
    @Operation(summary = "Label 등록",
            description = "Label을 등록한다.")
    @PostMapping("/api/v1/labels")
    public ResponseEntity<Long> createLabel(@Validated @RequestBody LabelCreateRequest request) {
        Long createdLabelId = labelService.createLabel(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdLabelId);
    }

    @Tag(name = "Label")
    @Operation(summary = "Label 삭제",
            description = "Label을 삭제한다.")
    @DeleteMapping("/api/v1/labels/{labelId}")
    public ResponseEntity<Void> deleteLabel(@PathVariable Long labelId) {
        labelService.deleteLabel(labelId);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Label")
    @Operation(summary = "Label 수정",
            description = "Label을 수정한다.")
    @PutMapping("/api/v1/labels/{labelId}")
    public ResponseEntity<Void> updateLabel(
            @PathVariable Long labelId,
            @Validated @RequestBody LabelUpdateRequest request) {
        labelService.update(labelId, request);
        return ResponseEntity.noContent().build();
    }

    @Tag(name = "Label")
    @Operation(summary = "Label 갯수 조회",
            description = "Label의 전체 갯수를 조회한다.")
    @GetMapping("/api/v1/labels/count")
    public Long getCount() {
        return labelService.getCount();
    }

}
