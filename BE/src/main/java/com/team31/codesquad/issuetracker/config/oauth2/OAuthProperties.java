package com.team31.codesquad.issuetracker.config.oauth2;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ToString
@Getter @Setter
@ConfigurationProperties(prefix = "oauth2")
public class OAuthProperties {

    private String clientId;
    private String clientSecret;
    private String redirectUri;
    private String tokenUri;
    private String userInfoUri;

}
