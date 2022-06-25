package com.team31.codesquad.issuetracker.domain.label;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LabelRepository extends JpaRepository<Label, Long> {

    boolean existsByName(String labelName);
}
