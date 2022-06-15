package com.team31.codesquad.issuetracker.dto.user.oauth;

import com.team31.codesquad.issuetracker.domain.user.User;
import java.util.Map;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class UserProfile {

    private String loginName;
    private String name;
    private String email;
    private String profileImage;

    public UserProfile(Map<String, Object> userInfo) {
        this.loginName = (String) userInfo.get("login");
        this.name = (String) userInfo.get("name");
        this.email = (String) userInfo.get("email");
        this.profileImage = (String) userInfo.get("avatar_url");
    }

    public User toEntity() {
        return User.builder()
                .loginName(loginName)
                .name(name)
                .email(email)
                .profileImage(profileImage)
                .build();
    }
}
