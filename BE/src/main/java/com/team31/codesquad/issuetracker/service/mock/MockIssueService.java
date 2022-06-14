package com.team31.codesquad.issuetracker.service.mock;


import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import com.team31.codesquad.issuetracker.domain.label.TextColor;
import com.team31.codesquad.issuetracker.domain.milestone.MilestoneStatus;
import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.OpenClosedCountResult;
import com.team31.codesquad.issuetracker.dto.comment.CommentResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueCreateRequest;
import com.team31.codesquad.issuetracker.dto.issue.IssueDetailResponse;
import com.team31.codesquad.issuetracker.dto.issue.IssueResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.milestone.MilestoneResponse;
import com.team31.codesquad.issuetracker.dto.user.UserResponse;
import com.team31.codesquad.issuetracker.service.IssueService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MockIssueService implements IssueService {

    @Override
    public OpenClosedCountResult<List<IssueResponse>> findAll(Integer page, String query) {
        UserResponse user1 = new UserResponse(1L, "데이먼", "damon@gmail.com",
                "https://avatars.githubusercontent.com/u/59705184?s=400&u=ef7351f24549dbd8c07b2a18d797c5f7071a440b&v=4");
        UserResponse user2 = new UserResponse(2L, "JinJeon", "jinjeon@gmail.com",
                "https://avatars.githubusercontent.com/u/59705184?s=400&u=ef7351f24549dbd8c07b2a18d797c5f7071a440b&v=4");
        UserResponse user3 = new UserResponse(3L, "메이브", "serin-kim@gmail.com",
                "https://avatars.githubusercontent.com/u/68533016?v=4");

        LabelResponse label1 = new LabelResponse(1L, "docs", "서비스 관련 문서", "0052CC",
                TextColor.LIGHT);
        LabelResponse label2 = new LabelResponse(2L, "bug", "서비스에서 발생하는 오류", "B60205",
                TextColor.LIGHT);
        LabelResponse label3 = new LabelResponse(3L, "feat", "서비스에 대한 개선 사항 및 추가 사항", "FFFFFF",
                TextColor.DARK);

        MilestoneResponse milestone1 = new MilestoneResponse(1L, "마일스톤 제목1", "마일스톤 설명1",
                LocalDate.of(2022, 7, 1), MilestoneStatus.OPEN);
        MilestoneResponse milestone2 = new MilestoneResponse(2L, "마일스톤 제목2", "마일스톤 설명2",
                LocalDate.of(2022, 7, 1), MilestoneStatus.OPEN);
        MilestoneResponse milestone3 = new MilestoneResponse(3L, "마일스톤 제목3", "마일스톤 설명3",
                LocalDate.of(2022, 7, 1), MilestoneStatus.OPEN);

        IssueResponse issueResponse1 = new IssueResponse(1L, IssueStatus.OPEN, "이슈 제목 1", user1,
                Arrays.asList(label1, label2), milestone1, LocalDateTime.now(),
                LocalDateTime.now());
        IssueResponse issueResponse2 = new IssueResponse(1L, IssueStatus.OPEN, "이슈 제목 2", user2,
                List.of(label3), milestone2, LocalDateTime.now(), LocalDateTime.now());
        IssueResponse issueResponse3 = new IssueResponse(1L, IssueStatus.CLOSED, "이슈 제목 3", user3,
                Arrays.asList(label1, label3), milestone3,
                LocalDateTime.now(), LocalDateTime.now());

        if (query.contains("is:closed")) {
            return new OpenClosedCountResult<>(2, 1, List.of(issueResponse3));
        }

        List<IssueResponse> issueResponses = Arrays.asList(issueResponse1,
                issueResponse2);
        return new OpenClosedCountResult<>(2, 1, issueResponses);
    }

    @Override
    public void deleteIssue(Long issueId) {
        return;
    }

    @Override
    public Long createService(IssueCreateRequest request) {
        return 4L;
    }

    @Override
    public IssueDetailResponse getIssue(Long issueId) {

        UserResponse user1 = new UserResponse(1L, "데이먼", "damon@gmail.com",
                "https://avatars.githubusercontent.com/u/59705184?s=400&u=ef7351f24549dbd8c07b2a18d797c5f7071a440b&v=4");
        UserResponse user2 = new UserResponse(2L, "JinJeon", "jinjeon@gmail.com",
                "https://avatars.githubusercontent.com/u/59705184?s=400&u=ef7351f24549dbd8c07b2a18d797c5f7071a440b&v=4");
        UserResponse user3 = new UserResponse(3L, "메이브", "serin-kim@gmail.com",
                "https://avatars.githubusercontent.com/u/68533016?v=4");

        LabelResponse label1 = new LabelResponse(1L, "docs", "서비스 관련 문서", "0052CC",
                TextColor.LIGHT);
        LabelResponse label2 = new LabelResponse(2L, "bug", "서비스에서 발생하는 오류", "B60205",
                TextColor.LIGHT);

        MilestoneResponse milestone = new MilestoneResponse(1L, "마일스톤 제목1", "마일스톤 설명1",
                LocalDate.of(2022, 7, 1), MilestoneStatus.OPEN);

        CommentResponse comment1 = new CommentResponse(1L, user1, "첫 번째 코멘트");
        CommentResponse comment2 = new CommentResponse(2L, user3, "두 번째 코멘트");
        CommentResponse comment3 = new CommentResponse(3L, user2, "세 번째 코멘트");

        List<CommentResponse> comments = Arrays.asList(comment1, comment2, comment3);

        return new IssueDetailResponse(issueId, IssueStatus.OPEN, "이슈 제목 1", user1,
                Arrays.asList(user2, user3), Arrays.asList(label1, label2),
                milestone, LocalDateTime.now(), LocalDateTime.now(),
                new CountResult<>(comments.size(), comments));
    }
}
