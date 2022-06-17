package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import java.util.List;

public interface UserService {

    List<UserResponse> getUsers();

}
