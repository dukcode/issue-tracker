package com.team31.codesquad.issuetracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OpenClosedCountResult<T> {

    private Integer openCount;
    private Integer closedCount;
    private T data;
}
