package com.team31.codesquad.issuetracker.service;

import com.team31.codesquad.issuetracker.config.oauth2.OAuthProperties;
import com.team31.codesquad.issuetracker.domain.user.User;
import com.team31.codesquad.issuetracker.domain.user.UserRepository;
import com.team31.codesquad.issuetracker.dto.user.oauth.LoginResponse;
import com.team31.codesquad.issuetracker.dto.user.oauth.OAuthTokenResponse;
import com.team31.codesquad.issuetracker.dto.user.oauth.UserProfile;
import com.team31.codesquad.issuetracker.exception.PermissionDeniedException;
import com.team31.codesquad.issuetracker.util.JwtUtil;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

@Slf4j
@RequiredArgsConstructor
@EnableConfigurationProperties(OAuthProperties.class)
@Transactional(readOnly = true)
@Service
public class OAuthService {

    private final OAuthProperties oAuthProperties;
    private final JwtUtil jwtUtil;

    private final UserRepository userRepository;

    @Transactional
    public LoginResponse login(String code) {
        OAuthTokenResponse oAuthTokenResponse = getToken(code);

        if (oAuthTokenResponse.isNull()) {
            throw new PermissionDeniedException("유효하지 않은 Authorization code입니다.");
        }

        Map<String, Object> userInfo = getUserInfo(oAuthTokenResponse);

        UserProfile userProfile = new UserProfile(userInfo);
        User user = saveOrUpdate(userProfile);

        String accessToken = jwtUtil.createAccessToken(user.getLoginName());

        // TODO: refreshToken 발급

        return new LoginResponse(user, "Bearer", accessToken);
    }

    private User saveOrUpdate(UserProfile userProfile) {
        User user = userRepository.findOptionalByLoginName(userProfile.getLoginName())
                .map(entity -> entity.update(
                        userProfile.getName(), userProfile.getEmail(),
                        userProfile.getProfileImage()))
                .orElseGet(userProfile::toEntity);

        return userRepository.save(user);
    }

    private OAuthTokenResponse getToken(String code) {
        return WebClient.create()
                .post()
                .uri(oAuthProperties.getTokenUri())
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .accept(MediaType.APPLICATION_JSON)
                .acceptCharset(StandardCharsets.UTF_8)
                .body(BodyInserters.fromFormData("code", code)
                        .with("client_id", oAuthProperties.getClientId())
                        .with("client_secret", oAuthProperties.getClientSecret())
                        .with("code", code)
                        .with("redirect_uri", oAuthProperties.getRedirectUri()))
                .retrieve()
                .bodyToMono(OAuthTokenResponse.class)
                .block();
    }

    private Map<String, Object> getUserInfo(OAuthTokenResponse token) {
        return WebClient.create()
                .get()
                .uri(oAuthProperties.getUserInfoUri())
                .headers(header -> header.setBearerAuth(token.getAccessToken()))
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<Map<String, Object>>() {
                })
                .block();
    }
}
