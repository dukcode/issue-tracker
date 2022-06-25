package com.team31.codesquad.issuetracker.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;

@Getter
public class OpenClosedCount {

    private Long openCount;
    private Long closedCount;

    @QueryProjection
    public OpenClosedCount(Long openCount, Long closedCount) {
        this.openCount = openCount;
        this.closedCount = closedCount;
    }
}
