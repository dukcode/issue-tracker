package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import java.util.List;

public interface MilestoneService {

    OpenClosedCountResult<List<MilestoneResponse>> findAll(
            MilestoneStatus status);
}
