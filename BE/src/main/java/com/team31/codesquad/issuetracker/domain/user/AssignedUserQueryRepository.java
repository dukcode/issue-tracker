package com.team31.codesquad.issuetracker.domain.user;

import static com.team31.codesquad.issuetracker.domain.user.QAssignedUser.assignedUser;
import static com.team31.codesquad.issuetracker.domain.user.QUser.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class AssignedUserQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<AssignedUser> findAssignedUsersWithUsersByIssue(Issue issue) {
        return queryFactory
                .select(assignedUser)
                .from(assignedUser)
                .leftJoin(assignedUser.assignee, user).fetchJoin()
                .where(assignedUser.issue.eq(issue))
                .fetch();
    }
}
