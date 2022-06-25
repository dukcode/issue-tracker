package com.team31.codesquad.issuetracker.domain.comment;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import com.team31.codesquad.issuetracker.domain.issue.Issue;
import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import com.team31.codesquad.issuetracker.domain.user.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Comment extends BaseTimeEntity {

    public static final String ISSUE_OPEN_MESSAGE = "이슈가 열렸습니다.";
    public static final String ISSUE_CLOSED_MESSAGE = "이슈가 닫혔습니다.";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id", nullable = false)
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @OneToMany(mappedBy = "comment", cascade = CascadeType.ALL)
    private List<Reaction> reactions = new ArrayList<>();

    private Boolean systemMessage;


    public Comment(Issue issue, User author, String content) {
        this.issue = issue;
        this.author = author;
        this.content = content;
        this.systemMessage = false;
    }

    public Comment(User author, String content) {
        this.author = author;
        this.content = content;
        this.systemMessage = false;
    }

    public static Comment createStatusChangeComment(Issue issue,
            IssueStatus status, User statusChangeUser) {
        Comment comment = new Comment();
        comment.issue = issue;
        comment.author = statusChangeUser;
        comment.content =
                status.equals(IssueStatus.OPEN) ? ISSUE_OPEN_MESSAGE : ISSUE_CLOSED_MESSAGE;
        comment.systemMessage = true;

        return comment;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }

    public void validateIssue(Long issueId) {
        if (!issueId.equals(getIssue().getId())) {
            throw new IllegalArgumentException("해당 이슈의 코멘트가 아닙니다.");
        }
    }

    public void validateAuthor(String loginName) {
        if (!loginName.equals(getAuthor().getLoginName())) {
            throw new IllegalArgumentException("작성자만 접근이 가능합니다.");
        }
    }

    public void update(String content) {
        this.content = content;
    }
}
