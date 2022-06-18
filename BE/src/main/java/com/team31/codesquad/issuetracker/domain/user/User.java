package com.team31.codesquad.issuetracker.domain.user;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "users")
@Entity
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(unique = true, nullable = false)
    private String loginName;

    private String name;

    private String email;

    private String profileImage;

    @Builder
    public User(String loginName, String name, String email, String profileImage) {
        this.loginName = loginName;
        this.name = name;
        this.email = email;
        this.profileImage = profileImage;
    }

    public User update(String name, String email, String profileImage) {
        this.name = name;
        this.email = email;
        this.profileImage = profileImage;
        return this;
    }
}
