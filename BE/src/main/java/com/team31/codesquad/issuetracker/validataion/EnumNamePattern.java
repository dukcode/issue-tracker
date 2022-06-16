package com.team31.codesquad.issuetracker.validataion;

import com.team31.codesquad.issuetracker.validataion.validator.EnumNamePatternValidator;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = EnumNamePatternValidator.class)
public @interface EnumNamePattern {

    String regexp();

    String message() default "\"{regexp}\" 형식 이어야 합니다.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
