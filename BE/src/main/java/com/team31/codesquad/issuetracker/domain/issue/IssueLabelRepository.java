package com.team31.codesquad.issuetracker.domain.issue;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueLabelRepository extends JpaRepository<IssueLabel, Long> {

}
