package com.team31.codesquad.issuetracker.dto.user.oauth;

import com.team31.codesquad.issuetracker.domain.user.User;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class LoginResponse {

    private Long id;
    private String name;
    private String email;
    private String profileImage;
    private String tokenType;
    private String accessToken;

    public LoginResponse(User user, String tokenType, String accessToken) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.profileImage = user.getProfileImage();
        this.tokenType = tokenType;
        this.accessToken = accessToken;
    }
}
