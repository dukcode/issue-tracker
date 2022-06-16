package com.team31.codesquad.issuetracker.web.advice;

public class ErrorCode {

    public static final String AUTHORIZATION = "ERR4001";

    public static final String ARGUMENT_VALIDATION = "ERR5001";
    public static final String ENUM_DOES_NOT_MATCH = "ERR5002";
    public static final String HTTP_MESSAGE_NOT_READABLE = "ERROR5003";

    private ErrorCode() {
    }
}
