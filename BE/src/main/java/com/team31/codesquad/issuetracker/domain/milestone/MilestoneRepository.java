package com.team31.codesquad.issuetracker.domain.milestone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

    boolean existsByTitle(String title);

    @Query("SELECT COUNT(m) FROM Milestone m WHERE m.status=:status")
    long countFilteredByStatus(@Param("status") MilestoneStatus status);
}
