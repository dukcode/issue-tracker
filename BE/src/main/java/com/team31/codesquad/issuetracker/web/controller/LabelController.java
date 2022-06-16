package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.label.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelUpdateRequest;
import com.team31.codesquad.issuetracker.service.LabelService;
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

@RequiredArgsConstructor
@RestController
public class LabelController {

    private final LabelService labelService;

    @GetMapping("/api/v1/labels")
    public CountResult<List<LabelResponse>> getLabels() {
        return labelService.findAll();
    }

    @PostMapping("/api/v1/labels")
    public ResponseEntity<Long> createLabel(@Validated @RequestBody LabelCreateRequest request) {
        Long createdLabelId = labelService.createLabel(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdLabelId);
    }

    @DeleteMapping("/api/v1/labels/{labelId}")
    public ResponseEntity<Void> deleteLabel(@PathVariable Long labelId) {
        labelService.deleteLabel(labelId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/v1/labels/{labelId}")
    public ResponseEntity<Void> updateLabel(@PathVariable Long labelId,
            @RequestBody LabelUpdateRequest request) {
        labelService.update(labelId, request);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/api/v1/labels/count")
    public Long getCount() {
        return labelService.getCount();
    }

}
