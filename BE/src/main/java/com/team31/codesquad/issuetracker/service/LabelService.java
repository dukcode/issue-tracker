package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.LabelResponse;
import com.team31.codesquad.issuetracker.dto.LabelUpdateRequest;
import java.util.List;

public interface LabelService {

    List<LabelResponse> findAll();

    Long createLabel(LabelCreateRequest request);

    void deleteLabel(Long labelId);

    void update(Long labelId, LabelUpdateRequest request);
}
