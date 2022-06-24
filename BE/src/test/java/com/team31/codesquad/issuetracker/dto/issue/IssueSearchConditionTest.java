package com.team31.codesquad.issuetracker.dto.issue;

import static org.assertj.core.api.Assertions.assertThat;

import com.team31.codesquad.issuetracker.domain.issue.IssueStatus;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class IssueSearchConditionTest {

    @Test
    @DisplayName("검색 조건 스트링을 파싱한다.")
    void conditionCreateTest() {
        IssueSearchCondition condition = IssueSearchCondition.create(
                "is:open milestone:\"마일스톤 제목 1\" author:asdf123 label:FE label:feat assignee:dukcode1");
        assertThat(condition.getStatus()).isEqualTo(IssueStatus.OPEN);
        assertThat(condition.getMilestoneName()).isEqualTo("마일스톤 제목 1");
        assertThat(condition.getAuthorLoginName()).isEqualTo("asdf123");
        assertThat(condition.getAssigneeLoginName()).isEqualTo("dukcode1");
        assertThat(condition.getLabelNames()).containsExactly("FE", "feat");
    }

    @Test
    @DisplayName("검색 조건 스트링에 status가 IssueStatus 값이 아니면 무시한다.")
    void statucConditionTest1() {
        IssueSearchCondition condition = IssueSearchCondition.create(
                "is:openl milestone:\"마일스톤 제목 1\" author:asdf123 label:FE label:feat assignee:dukcode1");
        assertThat(condition.getStatus()).isNull();
        assertThat(condition.getMilestoneName()).isEqualTo("마일스톤 제목 1");
        assertThat(condition.getAuthorLoginName()).isEqualTo("asdf123");
        assertThat(condition.getAssigneeLoginName()).isEqualTo("dukcode1");
        assertThat(condition.getLabelNames()).containsExactly("FE", "feat");
    }

    @Test
    @DisplayName("검색 조건 스트링에 status가 IssueStatus 값이 아니면 가능한 마지막 값으로 적용한다.")
    void statusConditionTest2() {
        IssueSearchCondition condition = IssueSearchCondition.create(
                "is:openl is:open is:closed is:asdf milestone:\"마일스톤 제목 1\" author:asdf123 label:FE label:feat assignee:dukcode1");
        assertThat(condition.getStatus()).isEqualTo(IssueStatus.CLOSED);
        assertThat(condition.getMilestoneName()).isEqualTo("마일스톤 제목 1");
        assertThat(condition.getAuthorLoginName()).isEqualTo("asdf123");
        assertThat(condition.getAssigneeLoginName()).isEqualTo("dukcode1");
        assertThat(condition.getLabelNames()).containsExactly("FE", "feat");
    }
}
