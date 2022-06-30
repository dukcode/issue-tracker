import Markdown from "marked-react";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import moment from "moment";
import "moment/locale/ko";

import TextButton from "Component/TextButton";
import icons from "Util/Icons";
import UserImg from "Component/UserImg";
import {
	StyledIssueDetailCommentWrapper,
	StyledIssueDetailComment,
	StyledIssueDetailTop,
	StyledIssueDetailCommentTitle,
	StyledIssueDetailCommentDesc,
	StyledEditedTime,
	StyledWriterOption,
	StyledWriter,
} from "./IssueDetailComment.styled";

type TReactions = {
	[key in string]: number;
};

type TComment = {
	author: {
		id: number;
		loginName: string;
		name: string;
		email: string | null;
		profileImage: string;
	};
	content: string;
	createDate: string;
	id: number;
	modifiedDate: string;
	reactions: TReactions;
	systemMessage: boolean;
};

const WRITER = "작성자";
const EDIT = "편집";
const { SentimentSatisfiedAlt } = icons;

const IssueDetailComment = ({
	comment: {
		content,
		author: { loginName, profileImage },
		createDate,
	},
}: {
	comment: TComment;
}) => {
	const markedContent = <Markdown>{content}</Markdown>;
	const { profileImage: loginImage } = useCookieUserInfo();
	// const isSameUser = profileImage === loginImage; // 로그인 유저와 작성 유저 일치 여부 수정 필요
	const isSameUser = profileImage !== loginImage; // 배포 시 삭제
	const editedTime = moment(createDate).fromNow();

	return (
		<StyledIssueDetailCommentWrapper>
			<UserImg img={profileImage} size="medium" />
			<StyledIssueDetailComment>
				<StyledIssueDetailTop>
					<StyledIssueDetailCommentTitle>
						{loginName}
						<StyledEditedTime>{editedTime}</StyledEditedTime>
					</StyledIssueDetailCommentTitle>
					<StyledWriterOption isSameUser={isSameUser}>
						<StyledWriter>{WRITER}</StyledWriter>
						<TextButton icon="Edit" color="titleActive" size="textXSmall" content={EDIT} />
						<SentimentSatisfiedAlt colorset="label" size={18} />
					</StyledWriterOption>
				</StyledIssueDetailTop>
				<StyledIssueDetailCommentDesc>{markedContent}</StyledIssueDetailCommentDesc>
			</StyledIssueDetailComment>
		</StyledIssueDetailCommentWrapper>
	);
};

export default IssueDetailComment;
export type { TComment };
