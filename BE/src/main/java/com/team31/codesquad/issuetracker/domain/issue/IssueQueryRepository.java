package com.team31.codesquad.issuetracker.domain.issue;

import static com.querydsl.jpa.JPAExpressions.select;
import static com.team31.codesquad.issuetracker.domain.issue.QIssue.issue;
import static com.team31.codesquad.issuetracker.domain.issue.QIssueLabel.issueLabel;
import static com.team31.codesquad.issuetracker.domain.label.QLabel.label;
import static com.team31.codesquad.issuetracker.domain.milestone.QMilestone.milestone;
import static com.team31.codesquad.issuetracker.domain.user.QAssignedUser.assignedUser;
import static com.team31.codesquad.issuetracker.domain.user.QUser.user;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team31.codesquad.issuetracker.dto.issue.IssueSearchCondition;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
@Repository
public class IssueQueryRepository {

    private final JPAQueryFactory queryFactory;

    public List<Issue> findAllByCondition(IssueSearchCondition condition, Pageable pageable) {
        return queryFactory
                .select(issue)
                .from(issue)
                .leftJoin(issue.author, user).fetchJoin()
                .leftJoin(issue.milestone, milestone).fetchJoin()
                .leftJoin(issue.issueLabels, issueLabel).fetchJoin()
                .leftJoin(issueLabel.label, label).fetchJoin()
                .leftJoin(issue.assignees, assignedUser).fetchJoin()
                .leftJoin(assignedUser.assignee, user).fetchJoin()
                .where(statusEq(condition.getStatus()),
                        authorEq(condition.getAuthorLoginName()),
                        milestoneEq(condition.getMilestoneName()),
                        labelIn(condition.getLabelNames()),
                        assigneeEq(condition.getAssigneeLoginName()))
                .distinct()
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();
    }

    private BooleanExpression milestoneEq(String milestoneName) {
        if (!StringUtils.hasText(milestoneName)) {
            return null;
        }
        return milestone.title.eq(milestoneName);
    }

    public Long countAllByConditionAndStatus(IssueSearchCondition condition,
            IssueStatus status) {
        return queryFactory
                .select(issue.countDistinct())
                .from(issue)
                .leftJoin(issue.author, user)
                .leftJoin(issue.milestone, milestone)
                .leftJoin(issue.issueLabels, issueLabel)
                .leftJoin(issueLabel.label, label)
                .leftJoin(issue.assignees, assignedUser)
                .leftJoin(assignedUser.assignee, user)
                .where(statusEq(status),
                        authorEq(condition.getAuthorLoginName()),
                        labelIn(condition.getLabelNames()),
                        milestoneEq(condition.getMilestoneName()),
                        assigneeEq(condition.getAssigneeLoginName()))
                .fetchOne();
    }

    private BooleanExpression assigneeEq(String assigneeLoginName) {
        if (!StringUtils.hasText(assigneeLoginName)) {
            return null;
        }
        return issue.author.loginName.eq(assigneeLoginName);
    }

    private BooleanExpression labelIn(List<String> labelNames) {
        if (labelNames == null || labelNames.size() == 0) {
            return null;
        }
        return issue.id.in(select(issue.id)
                .from(issue)
                .leftJoin(issue.issueLabels, issueLabel)
                .leftJoin(issueLabel.label, label)
                .where(label.name.in(labelNames))
                .groupBy(issue.id)
                .having(issue.id.count().eq((long) labelNames.size())));

    }

    private BooleanExpression authorEq(String authorLoginName) {
        if (!StringUtils.hasText(authorLoginName)) {
            return null;
        }
        return issue.author.loginName.eq(authorLoginName);
    }

    private BooleanExpression statusEq(IssueStatus status) {
        return issue.status.eq(status);
    }
}
