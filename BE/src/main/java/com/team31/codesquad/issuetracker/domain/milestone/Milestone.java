package com.team31.codesquad.issuetracker.domain.milestone;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Milestone extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "milestone_id")
    private Long id;

    private String title;

    private String description;

    private LocalDate dueDate;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private MilestoneStatus status;

    public Milestone(String title, String description, LocalDate dueDate,
            MilestoneStatus status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

    // mock service 제공을 위한 임시 메서드
    public void setId(Long id) {
        this.id = id;
    }
}
