package com.team31.codesquad.issuetracker.web.advice;

import com.team31.codesquad.issuetracker.dto.error.ErrorResponse;
import com.team31.codesquad.issuetracker.exception.PermissionDeniedException;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AuthorizationAdvice {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(PermissionDeniedException.class)
    public ErrorResponse handlePermissionDeniedException(
            PermissionDeniedException e) {

        return new ErrorResponse(ErrorCode.AUTHORIZATION,
                List.of(e.getMessage()));
    }

}
