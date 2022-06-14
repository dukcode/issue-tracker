package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.label.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelUpdateRequest;
import java.util.List;

public interface LabelService {

    List<LabelResponse> findAll();

    Long createLabel(LabelCreateRequest request);

    void deleteLabel(Long labelId);

    void update(Long labelId, LabelUpdateRequest request);
}
