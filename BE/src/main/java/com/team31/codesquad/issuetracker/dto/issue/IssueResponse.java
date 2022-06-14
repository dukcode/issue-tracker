package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor // Mock API 제공을 위한 생성자 메서드
public class IssueResponse {

    private Long id;
    private IssueStatus status;
    private String title;
    private UserResponse author;
    private List<LabelResponse> labels;
    private MilestoneResponse milestone;

}
