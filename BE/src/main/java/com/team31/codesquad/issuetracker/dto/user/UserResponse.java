package com.team31.codesquad.issuetracker.dto.user;

import com.team31.codesquad.issuetracker.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class UserResponse {

    private Long id;

    private String loginName;

    private String name;

    private String email;

    private String profileImage;

    public UserResponse(User user) {
        this.id = user.getId();
        this.loginName = user.getLoginName();
        this.name = user.getName();
        this.email = user.getEmail();
        this.profileImage = user.getProfileImage();
    }
}
