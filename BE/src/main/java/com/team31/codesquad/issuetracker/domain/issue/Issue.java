package com.team31.codesquad.issuetracker.domain.issue;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.user.AssignedUser;
import com.team31.codesquad.issuetracker.domain.user.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Issue extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "issue_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private IssueStatus status;

    @Column(length = 500, nullable = false)
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private List<AssignedUser> assignees = new ArrayList<>();

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private List<IssueLabel> issueLabels = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    public static Issue createIssue(String title, User author, List<AssignedUser> assignedUsers,
            List<IssueLabel> issueLabels, Milestone milestone) {
        Issue issue = new Issue();
        issue.status = IssueStatus.OPEN;
        issue.title = title;
        issue.author = author;
        for (AssignedUser assignedUser : assignedUsers) {
            issue.addAssignedUser(assignedUser);
        }
        for (IssueLabel issueLabel : issueLabels) {
            issue.addIssueLabel(issueLabel);
        }
        issue.milestone = milestone;

        return issue;
    }

    private void addIssueLabel(IssueLabel issueLabel) {
        this.issueLabels.add(issueLabel);
        issueLabel.setIssue(this);

    }

    private void addAssignedUser(AssignedUser assignedUser) {
        this.assignees.add(assignedUser);
        assignedUser.setIssue(this);
    }


    public boolean isOpen() {
        return status.equals(IssueStatus.OPEN);
    }

    public void addComment(Comment comment) {
        this.comments.add(comment);
        comment.setIssue(this);
    }
}
