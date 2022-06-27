package com.team31.codesquad.issuetracker.domain.milestone;

import static com.team31.codesquad.issuetracker.domain.issue.QIssue.issue;
import static com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus.CLOSED;
import static com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus.OPEN;
import static com.team31.codesquad.issuetracker.domain.milestone.QMilestone.milestone;

import com.querydsl.core.group.GroupBy;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team31.codesquad.issuetracker.dto.OpenClosedCount;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class MilestoneQueryRepository {

    private final JPAQueryFactory queryFactory;

    public OpenClosedCount countOpenAndClosed() {
        Map<MilestoneStatus, Long> result = queryFactory
                .from(milestone)
                .groupBy(milestone.status)
                .transform(GroupBy.groupBy(milestone.status).as(milestone.countDistinct()));

        return new OpenClosedCount(Optional.ofNullable(result.get(OPEN)).orElse(0L),
                Optional.ofNullable(result.get(CLOSED)).orElse(0L));
    }

    public List<Milestone> findAllByStatusWithFetchIssues(MilestoneStatus status) {
        return queryFactory
                .select(milestone)
                .from(milestone)
                .leftJoin(milestone.issues, issue).fetchJoin()
                .where(milestone.status.eq(status))
                .distinct()
                .fetch();
    }
}
