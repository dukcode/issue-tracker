package com.team31.codesquad.issuetracker.web.validataion.validator;

import com.team31.codesquad.issuetracker.web.validataion.HexColor;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
@RequiredArgsConstructor
public class HexColorValidator implements ConstraintValidator<HexColor, String> {

    private static final String HEX_WEBCOLOR_PATTERN
            = "^#([a-fA-F0-9]{6})$";

    private static final Pattern pattern = Pattern.compile(HEX_WEBCOLOR_PATTERN);

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (!StringUtils.hasText(value)) {
            return false;
        }
        Matcher matcher = pattern.matcher(value);
        return matcher.matches();
    }

}
