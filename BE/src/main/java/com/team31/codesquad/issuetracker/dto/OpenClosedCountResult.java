package com.team31.codesquad.issuetracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OpenClosedCountResult<T> {

    private Long openCount;
    private Long closedCount;
    private T data;
}
