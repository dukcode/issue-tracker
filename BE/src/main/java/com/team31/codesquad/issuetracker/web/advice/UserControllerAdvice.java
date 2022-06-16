package com.team31.codesquad.issuetracker.web.advice;

import com.team31.codesquad.issuetracker.exception.PermissionDeniedException;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserControllerAdvice {


    @ExceptionHandler(PermissionDeniedException.class)
    public ResponseEntity<ErrorResponse> handlePermissionDeniedException(
            PermissionDeniedException e) {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCode.AUTHORIZATION,
                List.of(e.getMessage()));

        return ResponseEntity.badRequest().body(errorResponse);
    }

}
