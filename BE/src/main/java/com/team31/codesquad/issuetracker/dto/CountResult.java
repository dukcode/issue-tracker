package com.team31.codesquad.issuetracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CountResult<T> {

    private int count;
    private T data;

}
