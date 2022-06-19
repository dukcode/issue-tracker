package com.team31.codesquad.issuetracker.domain.label;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabelRepository extends JpaRepository<Label, Long> {

    Optional<Label> findByName(String name);
}
