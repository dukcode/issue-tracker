package com.team31.codesquad.issuetracker.domain.comment;

import com.team31.codesquad.issuetracker.domain.user.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReactionRepository extends JpaRepository<Reaction, Long> {

    List<Reaction> findAllByUserAndComment(User user, Comment comment);

    Optional<Reaction> findByUserAndCommentAndEmoji(User user, Comment comment,
            ReactionEmoji emoji);
}
