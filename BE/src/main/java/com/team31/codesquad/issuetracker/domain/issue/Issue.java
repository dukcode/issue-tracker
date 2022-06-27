package com.team31.codesquad.issuetracker.domain.issue;

import com.team31.codesquad.issuetracker.domain.BaseTimeEntity;
import com.team31.codesquad.issuetracker.domain.comment.Comment;
import com.team31.codesquad.issuetracker.domain.milestone.Milestone;
import com.team31.codesquad.issuetracker.domain.user.AssignedUser;
import com.team31.codesquad.issuetracker.domain.user.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
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
import javax.persistence.OneToOne;
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
    private Set<AssignedUser> assignees = new HashSet<>();

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private Set<IssueLabel> issueLabels = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    private LocalDateTime statusChangedAt;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "status_change_user_id")
    private User statusChangeUser;

    public static Issue createIssue(String title, User author, Milestone milestone,
            Comment comment) {
        Issue issue = new Issue();
        issue.status = IssueStatus.OPEN;
        issue.title = title;
        issue.author = author;
        issue.milestone = milestone;
        issue.statusChangedAt = LocalDateTime.now();
        issue.statusChangeUser = author;
        issue.addComment(comment);

        return issue;
    }

    private void addIssueLabel(IssueLabel issueLabel) {
        this.issueLabels.add(issueLabel);
        issueLabel.setIssue(this);

    }

    public void updateAssignedUsers(List<AssignedUser> assignedUsers) {
        this.assignees = new HashSet<>();
        for (AssignedUser assignedUser : assignedUsers) {
            addAssignedUser(assignedUser);
        }
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

    public void deleteMilestone() {
        this.milestone = null;
    }

    public void changStatus(IssueStatus status, User statusChangeUser) {
        if (this.status.equals(status)) {
            return;
        }
        this.status = status;
        this.statusChangeUser = statusChangeUser;
        this.statusChangedAt = LocalDateTime.now();
        Comment comment = Comment.createStatusChangeComment(status, statusChangeUser);
        addComment(comment);
    }

    public void updateMilestone(Milestone milestone) {
        if (milestone == null) {
            deleteMilestone();
            return;
        }

        this.milestone = milestone;
    }

    public void updateIssueLabels(List<IssueLabel> issueLabels) {
        this.issueLabels = new HashSet<>();
        for (IssueLabel issueLabel : issueLabels) {
            addIssueLabel(issueLabel);
        }
    }

    public void changeTitle(String title) {
        this.title = title;
    }
}
