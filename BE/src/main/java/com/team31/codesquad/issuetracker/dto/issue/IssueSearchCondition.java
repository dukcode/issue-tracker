package com.team31.codesquad.issuetracker.dto.issue;

import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class IssueSearchCondition {

    private final static Pattern statusPattern = Pattern.compile("((?<=is:)\\w+)");
    private final static Pattern milestonePattern = Pattern.compile("((?<=milestone:\").+(?=\"))");
    private final static Pattern authorPattern = Pattern.compile("((?<=author:)\\w+)");
    private final static Pattern assigneePattern = Pattern.compile("((?<=assignee:)\\w+)");
    private final static Pattern labelPattern = Pattern.compile("((?<=label:)\\w+)");

    private IssueStatus status;
    private String milestoneName;
    private String authorLoginName;
    private List<String> labelNames;
    private String assigneeLoginName;

    private IssueSearchCondition() {
    }

    public static IssueSearchCondition create(String q) {
        IssueSearchCondition condition = new IssueSearchCondition();
        condition.status = getMatchIssueStatus(q, statusPattern);

        condition.milestoneName = getMatchString(q, milestonePattern);
        condition.authorLoginName = getMatchString(q, authorPattern);
        condition.assigneeLoginName = getMatchString(q, assigneePattern);
        condition.labelNames = getMatchStrings(q, labelPattern);

        return condition;
    }

    private static IssueStatus getMatchIssueStatus(String q, Pattern pattern) {
        Matcher match = pattern.matcher(q);
        IssueStatus status = IssueStatus.OPEN;
        while (match.find()) {
            try {
                status = IssueStatus.valueOf(match.group().toUpperCase());
            } catch (IllegalArgumentException ignored) {
            }
        }
        return status;
    }

    private static String getMatchString(String q, Pattern pattern) {
        Matcher match = pattern.matcher(q);
        String matchString = null;
        while (match.find()) {
            matchString = match.group();
        }
        return matchString;
    }

    private static List<String> getMatchStrings(String q, Pattern pattern) {
        Matcher match = pattern.matcher(q);
        List<String> matchStrings = new ArrayList<>();
        while (match.find()) {
            matchStrings.add(match.group());
        }
        return matchStrings;
    }
}
