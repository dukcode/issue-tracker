package com.team31.codesquad.issuetracker.web;

import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import com.team31.codesquad.issuetracker.dto.user.oauth.LoginResponse;
import com.team31.codesquad.issuetracker.service.OAuthService;
import com.team31.codesquad.issuetracker.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    private final OAuthService oAuthService;

    @GetMapping("/api/v1/users")
    public List<UserResponse> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/login/oauth2/code/github")
    public LoginResponse loginByOAuth2(@RequestParam String code) {
        return oAuthService.login(code);
    }

}
