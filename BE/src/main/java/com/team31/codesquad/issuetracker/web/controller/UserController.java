package com.team31.codesquad.issuetracker.web.controller;

import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import com.team31.codesquad.issuetracker.dto.user.oauth.LoginResponse;
import com.team31.codesquad.issuetracker.service.OAuthService;
import com.team31.codesquad.issuetracker.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@Tag(name = "User", description = "User 관련 API")
@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    private final OAuthService oAuthService;

    @Tag(name = "User")
    @Operation(summary = "User 목록 조회",
            description = "User 목록을 조회한다.")
    @GetMapping("/api/v1/users")
    public List<UserResponse> getUsers() {
        return userService.getUsers();
    }

    @ApiIgnore
    @GetMapping("/api/v1/users/login/oauth2/redirect")
    public LoginResponse loginByOAuth2(@RequestParam String code) {
        return oAuthService.login(code);
    }

}
