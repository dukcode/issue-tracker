CREATE TABLE users
(
    user_id       BIGINT       NOT NULL AUTO_INCREMENT,
    login_name    VARCHAR(255) NOT NULL UNIQUE,
    name          VARCHAR(255),
    email         VARCHAR(255),
    profile_image VARCHAR(255),
    create_date   DATETIME,
    modified_date DATETIME,
    PRIMARY KEY (user_id)
);

CREATE TABLE milestone
(
    milestone_id  BIGINT       NOT NULL AUTO_INCREMENT,
    title         VARCHAR(255) NOT NULL UNIQUE,
    status        VARCHAR(255) NOT NULL,
    description   VARCHAR(255),
    due_date      DATE,
    create_date   DATETIME,
    modified_date DATETIME,
    PRIMARY KEY (milestone_id)
);

CREATE TABLE label
(
    label_id      BIGINT       NOT NULL AUTO_INCREMENT,
    name          VARCHAR(255) NOT NULL UNIQUE,
    label_color   VARCHAR(255) NOT NULL,
    text_color    VARCHAR(255) NOT NULL,
    description   VARCHAR(255),
    create_date   DATETIME,
    modified_date DATETIME,
    PRIMARY KEY (label_id)
);

CREATE TABLE issue
(
    issue_id              BIGINT       NOT NULL AUTO_INCREMENT,
    author_id             BIGINT       NOT NULL,
    milestone_id          BIGINT,
    status_change_user_id BIGINT,
    title                 VARCHAR(500) NOT NULL,
    status                VARCHAR(255) NOT NULL,
    create_date           DATETIME,
    modified_date         DATETIME,
    status_changed_at     DATETIME,
    PRIMARY KEY (issue_id),
    FOREIGN KEY (author_id) REFERENCES users (user_id),
    FOREIGN KEY (milestone_id) REFERENCES milestone (milestone_id),
    FOREIGN KEY (status_change_user_id) REFERENCES users (user_id)
);

CREATE TABLE assigned_user
(
    assigned_user_id BIGINT NOT NULL AUTO_INCREMENT,
    assignee_id      BIGINT,
    issue_id         BIGINT,
    create_date      DATETIME,
    modified_date    DATETIME,
    PRIMARY KEY (assigned_user_id),
    FOREIGN KEY (assignee_id) REFERENCES users (user_id),
    FOREIGN KEY (issue_id) REFERENCES issue (issue_id)

);

CREATE TABLE comment
(
    comment_id     BIGINT NOT NULL AUTO_INCREMENT,
    author_id      BIGINT NOT NULL,
    issue_id       BIGINT NOT NULL,
    content        TEXT   NOT NULL,
    create_date    DATETIME,
    modified_date  DATETIME,
    system_message BIT,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (author_id) REFERENCES users (user_id),
    FOREIGN KEY (issue_id) REFERENCES issue (issue_id)
);

CREATE TABLE issue_label
(
    issue_label_id BIGINT NOT NULL AUTO_INCREMENT,
    issue_id       BIGINT,
    label_id       BIGINT,
    create_date    DATETIME,
    modified_date  DATETIME,
    PRIMARY KEY (issue_label_id),
    FOREIGN KEY (issue_id) REFERENCES issue (issue_id),
    FOREIGN KEY (label_id) REFERENCES label (label_id)
);

CREATE TABLE reaction
(
    reaction_id    BIGINT       NOT NULL AUTO_INCREMENT,
    comment_id     BIGINT,
    user_id        BIGINT,
    reaction_emoji VARCHAR(255) NOT NULL,
    create_date    DATETIME,
    modified_date  DATETIME,
    PRIMARY KEY (reaction_id),
    FOREIGN KEY (comment_id) REFERENCES comment (comment_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
