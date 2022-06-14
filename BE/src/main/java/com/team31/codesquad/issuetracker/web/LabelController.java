package com.team31.codesquad.issuetracker.web;

import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.LabelResponse;
import com.team31.codesquad.issuetracker.service.LabelService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class LabelController {

    private final LabelService labelService;

    @GetMapping("/api/v1/labels")
    public CountResult<List<LabelResponse>> getLabels() {
        List<LabelResponse> labelResponses = labelService.findAll();
        return new CountResult<>(labelResponses.size(), labelResponses);
    }

}
