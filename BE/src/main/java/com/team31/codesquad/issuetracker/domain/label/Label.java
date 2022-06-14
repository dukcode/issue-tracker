package com.team31.codesquad.issuetracker.domain.label;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

    private String name;

    private String description;

    private String labelColor;

    @Enumerated(EnumType.STRING)
    private TextColor textColor;

    public Label(String name, String description, String labelColor,
            TextColor textColor) {
        this.name = name;
        this.description = description;
        this.labelColor = labelColor;
        this.textColor = textColor;
    }

    // mock service 제공을 위한 임시 메서드
    public void setId(Long id) {
        this.id = id;
    }
}
