package com.team31.codesquad.issuetracker.web.interceptor;

import com.team31.codesquad.issuetracker.exception.PermissionDeniedException;
import com.team31.codesquad.issuetracker.util.JwtUtil;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
public class JwtInterceptor implements HandlerInterceptor {

    private final JwtUtil jwtUtil;

    @Override public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
            Object handler) throws Exception {
        String header = request.getHeader("Authorization");
        if (!StringUtils.hasText(header)) {
            throw new PermissionDeniedException("토큰이 존재하지 않습니다.");
        }
        String token = header.substring(7);
        if (!jwtUtil.validateToken(token)) {
            throw new PermissionDeniedException("유효하지 않은 토큰입니다.");
        }

        return true;
    }
}
