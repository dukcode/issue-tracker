package com.team31.codesquad.issuetracker.domain.label;

import static com.team31.codesquad.issuetracker.domain.issue.QIssueLabel.issueLabel;
import static com.team31.codesquad.issuetracker.domain.label.QLabel.label;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class IssueLabelQueryRepository {

    private final JPAQueryFactory queryFactory;


    public List<IssueLabel> findIssueLabelWithLabelByIssue(Issue issue) {
        return queryFactory
                .select(issueLabel)
                .from(issueLabel)
                .leftJoin(issueLabel.label, label).fetchJoin()
                .where(issueLabel.issue.eq(issue))
                .fetch();
    }
}
