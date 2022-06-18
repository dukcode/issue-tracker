package com.team31.codesquad.issuetracker.domain.label;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import com.team31.codesquad.issuetracker.domain.issue.IssueLabel;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
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
public class Label extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "label_id")
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String description;

    @Column(nullable = false)
    private String labelColor;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TextColor textColor;

    @OneToMany(mappedBy = "label", cascade = CascadeType.ALL)
    private List<IssueLabel> issueLabels = new ArrayList<>();

    public Label(String name, String description, String labelColor,
            TextColor textColor) {
        this.name = name;
        this.description = description;
        this.labelColor = labelColor;
        this.textColor = textColor;
    }

    public void update(String name, String description, String labelColor,
            TextColor textColor) {
        this.name = name;
        this.description = description;
        this.labelColor = labelColor;
        this.textColor = textColor;
    }
}
