package com.team31.codesquad.issuetracker.service.mock;

import com.team31.codesquad.issuetracker.domain.label.Label;
import com.team31.codesquad.issuetracker.domain.label.TextColor;
import com.team31.codesquad.issuetracker.dto.label.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelUpdateRequest;
import com.team31.codesquad.issuetracker.service.LabelService;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MockLabelService implements LabelService {

    @Override
    public List<LabelResponse> findAll() {
        Label label1 = new Label("docs", "서비스 관련 문서", "0052CC", TextColor.LIGHT);
        label1.setId(1L);
        Label label2 = new Label("bug", "서비스에서 발생하는 오류", "B60205", TextColor.LIGHT);
        label2.setId(2L);
        Label label3 = new Label("feat", "서비스에 대한 개선 사항 및 추가 사항", "FFFFFF", TextColor.DARK);
        label3.setId(3L);

        List<Label> labels = Arrays.asList(label1, label2, label3);

        return labels.stream()
                .map(LabelResponse::new)
                .collect(Collectors.toList());
    }

    @Override
    public Long createLabel(LabelCreateRequest request) {
        return 4L;
    }

    @Override
    public void deleteLabel(Long labelId) {
        return;
    }

    @Override
    public void update(Long labelId, LabelUpdateRequest request) {
        return;
    }
}
