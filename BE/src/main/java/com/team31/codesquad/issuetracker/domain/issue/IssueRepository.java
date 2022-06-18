package com.team31.codesquad.issuetracker.domain.issue;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {

    List<Issue> findAllByStatus(IssueStatus status);

}
