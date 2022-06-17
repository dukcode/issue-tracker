package com.team31.codesquad.issuetracker.web.advice;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.team31.codesquad.issuetracker.dto.error.ErrorResponse;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class DefaultExceptionHandlerAdvice {

    private static final Pattern WORD_IN_SQUARED_BRACKET = Pattern.compile("\\[(.*?)\\]");

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ErrorResponse handleJsonErrors(HttpMessageNotReadableException exception) {
        if (exception.getCause() != null
                && exception.getCause() instanceof InvalidFormatException) {

            String message = exception.getCause().getMessage();
            System.out.println("message = " + message);
            Matcher match = WORD_IN_SQUARED_BRACKET.matcher(message);

            if (message.contains("not one of the values accepted for Enum class") && match.find()) {
                return new ErrorResponse(ErrorCode.ENUM_DOES_NOT_MATCH,
                        List.of("다음 값 중에 입력해야 합니다. " + match.group()));
            }
        }

        return new ErrorResponse(ErrorCode.HTTP_MESSAGE_NOT_READABLE,
                List.of("잘못된 형식의 요청입니다."));
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ErrorResponse handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {

        return new ErrorResponse(ErrorCode.ARGUMENT_VALIDATION,
                e.getBindingResult().getAllErrors().stream()
                        .map(DefaultMessageSourceResolvable::getDefaultMessage)
                        .collect(Collectors.toList()));
    }

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

        log.error("error", e);
        return new ErrorResponse("NONE", List.of(e.getMessage()));
    }
}
