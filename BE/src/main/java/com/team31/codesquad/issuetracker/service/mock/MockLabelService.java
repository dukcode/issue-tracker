package com.team31.codesquad.issuetracker.service.mock;

import com.team31.codesquad.issuetracker.domain.label.TextColor;
import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.label.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelUpdateRequest;
import com.team31.codesquad.issuetracker.service.LabelService;
import java.util.Arrays;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class MockLabelService implements LabelService {

    @Override
    public CountResult<List<LabelResponse>> findAll() {
        LabelResponse label1 = new LabelResponse(1L, "docs", "서비스 관련 문서", "0052CC",
                TextColor.LIGHT);
        LabelResponse label2 = new LabelResponse(2L, "bug", "서비스에서 발생하는 오류", "B60205",
                TextColor.LIGHT);
        LabelResponse label3 = new LabelResponse(3L, "feat", "서비스에 대한 개선 사항 및 추가 사항", "FFFFFF",
                TextColor.DARK);

        List<LabelResponse> labelResponses = Arrays.asList(label1, label2, label3);

        return new CountResult<>(labelResponses.size(), labelResponses);
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

    @Override
    public Long getCount() {
        return 11L;
    }
}
