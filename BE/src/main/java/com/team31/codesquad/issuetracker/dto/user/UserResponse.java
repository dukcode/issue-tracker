package com.team31.codesquad.issuetracker.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class UserResponse {

    private Long id;

    private String name;

    private String email;

    private String profileImage;
}
