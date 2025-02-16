package com.team31.codesquad.issuetracker.domain.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByLoginName(String loginName);

    Optional<User> findOptionalByLoginName(String loginName);
}
