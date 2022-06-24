package com.team31.codesquad.issuetracker.service.mock;

import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import com.team31.codesquad.issuetracker.service.UserService;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MockUserService implements UserService {

    public List<UserResponse> getUsers() {

        UserResponse user1 = new UserResponse(1L, "asd", "데이먼", "damon@gmail.com",
                "https://avatars.githubusercontent.com/u/59705184?s=400&u=ef7351f24549dbd8c07b2a18d797c5f7071a440b&v=4");
        UserResponse user2 = new UserResponse(2L, "123", "JinJeon", "jinjeon@gmail.com",
                "https://avatars.githubusercontent.com/u/59705184?s=400&u=ef7351f24549dbd8c07b2a18d797c5f7071a440b&v=4");
        UserResponse user3 = new UserResponse(3L, "qwe", "메이브", "serin-kim@gmail.com",
                "https://avatars.githubusercontent.com/u/68533016?v=4");

        return Arrays.asList(user1, user2, user3);
    }
}
