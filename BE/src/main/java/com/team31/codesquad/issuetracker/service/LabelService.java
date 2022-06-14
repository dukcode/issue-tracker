package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.LabelResponse;
import java.util.List;

public interface LabelService {

    List<LabelResponse> findAll();

}
