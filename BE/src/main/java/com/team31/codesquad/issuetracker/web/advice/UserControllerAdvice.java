package com.team31.codesquad.issuetracker.web.advice;

import com.team31.codesquad.issuetracker.exception.PermissionDeniedException;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserControllerAdvice {

    @ExceptionHandler
    public ErrorResponse handlePermissionDeniedException(PermissionDeniedException e) {
        return new ErrorResponse(e.getMessage());
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    static class ErrorResponse {

        private String message;
    }
}
