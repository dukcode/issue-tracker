package com.team31.codesquad.issuetracker.web.advice;

public class ErrorCode {

    public static final String AUTHORIZATION = "ERR4001";

    public static final String ARGUMENT_VALIDATION = "ERR5001";

    public static final String ENUM_DOES_NOT_MATCH = "ERR6002";
    public static final String HTTP_MESSAGE_NOT_READABLE = "ERROR6003";

    public static final String ILLEGAL_ARGUMENT = "ERROR7001";

    private ErrorCode() {
    }
}
