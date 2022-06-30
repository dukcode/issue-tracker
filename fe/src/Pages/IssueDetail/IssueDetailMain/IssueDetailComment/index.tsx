import Markdown from "marked-react";
import UserImg from "Component/UserImg";
import {
	StyledIssueDetailCommentWrapper,
	StyledIssueDetailComment,
	StyledIssueDetailCommentTitle,
	StyledIssueDetailCommentDesc,
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
	createData: string;
	id: number;
	modifiedDate: string;
	reactions: TReactions;
	systemMessage: boolean;
};

const IssueDetailComment = ({
	comment: {
		content,
		author: { loginName, profileImage },
	},
}: {
	comment: TComment;
}) => {
	const markedContent = <Markdown>{content}</Markdown>;

	return (
		<StyledIssueDetailCommentWrapper>
			<UserImg img={profileImage} size="medium" />
			<StyledIssueDetailComment>
				<StyledIssueDetailCommentTitle>{loginName}</StyledIssueDetailCommentTitle>
				<StyledIssueDetailCommentDesc>{markedContent}</StyledIssueDetailCommentDesc>
			</StyledIssueDetailComment>
		</StyledIssueDetailCommentWrapper>
	);
};

export default IssueDetailComment;
export type { TComment };
