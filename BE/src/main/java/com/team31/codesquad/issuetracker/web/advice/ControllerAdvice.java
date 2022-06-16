package com.team31.codesquad.issuetracker.web.advice;

import com.team31.codesquad.issuetracker.dto.error.ErrorResponse;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public ErrorResponse handleIllegalArgumentException(
            IllegalArgumentException e) {

        return new ErrorResponse(ErrorCode.ILLEGAL_ARGUMENT, List.of(e.getMessage()));
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler
    public ErrorResponse handleException(
            Exception e) {

        return new ErrorResponse("NONE", List.of(e.getMessage()));
    }
}
