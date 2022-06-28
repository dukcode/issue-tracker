package com.team31.codesquad.issuetracker.domain.comment;

import com.team31.codesquad.issuetracker.domain.issue.Issue;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByIssue(Issue issue);
}
