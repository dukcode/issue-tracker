package com.team31.codesquad.issuetracker.dto.comment;

import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class CommentResponse {

    private Long id;
    private UserResponse author;
    private String content;

}
