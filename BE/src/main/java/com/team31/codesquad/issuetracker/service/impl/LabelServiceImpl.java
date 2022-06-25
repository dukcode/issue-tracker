package com.team31.codesquad.issuetracker.service.impl;

import com.team31.codesquad.issuetracker.domain.label.Label;
import com.team31.codesquad.issuetracker.domain.label.LabelRepository;
import com.team31.codesquad.issuetracker.dto.CountResult;
import com.team31.codesquad.issuetracker.dto.label.LabelCreateRequest;
import com.team31.codesquad.issuetracker.dto.label.LabelResponse;
import com.team31.codesquad.issuetracker.dto.label.LabelUpdateRequest;
import com.team31.codesquad.issuetracker.service.LabelService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Primary
@Service
public class LabelServiceImpl implements LabelService {

    private final LabelRepository labelRepository;

    @Override
    public CountResult<List<LabelResponse>> findAll() {
        List<LabelResponse> labelResponses = labelRepository.findAll().stream()
                .map(LabelResponse::new)
                .collect(Collectors.toList());

        return new CountResult<>(labelResponses.size(), labelResponses);
    }

    @Transactional
    @Override
    public Long createLabel(LabelCreateRequest request) {
        validateDuplicateName(request.getName());

        Label label = request.toEntity();
        labelRepository.save(label);
        return label.getId();
    }

    @Transactional
    @Override
    public void deleteLabel(Long labelId) {
        labelRepository.deleteById(labelId);
    }

    @Transactional
    @Override
    public void update(Long labelId, LabelUpdateRequest request) {
        validateDuplicateName(request.getName());

        Label label = labelRepository.findById(labelId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "해당 레이블이 존재하지 않습니다. id = " + labelId));

        label.update(request.getName(), request.getDescription(),
                request.getLabelColor(), request.getTextColor());
    }

    @Override
    public Long getCount() {
        return labelRepository.count();
    }

    private void validateDuplicateName(String labelName) {
        if (labelRepository.existsByName(labelName)) {
            throw new IllegalArgumentException("중복된 이름의 레이블이 존재합니다.");
        }
    }
}
