import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useIssuesGet } from "Hooks/useIssues";
import IssueDetailCommentInput from "./IssueDetailCommentInput";
import IssueDetailComment, { TComment } from "./IssueDetailComment";
import { StyledIssueDetailMain, StyledIssueDetailContent } from "./IssueDetailMain.styled";

const defaultComment: TComment[] = [
	{
		author: {
			id: 0,
			loginName: "",
			name: "",
			email: null,
			profileImage: "",
		},
		content: "",
		createData: "",
		id: 0,
		modifiedDate: "",
		reactions: {},
		systemMessage: true,
	},
];

const IssueDetailMain = () => {
	const id = useParams()?.id;
	const [comments, setComments] = useState<TComment[]>(defaultComment);
	const { data, isSuccess } = useIssuesGet({ id });
	const commentsList = comments.map((comment) => (
		<IssueDetailComment key={comment.id} comment={comment} />
	));

	useEffect(() => {
		const {
			comments: { data: newComments },
		} = data;
		setComments(newComments);
	}, [isSuccess]);

	return (
		<StyledIssueDetailMain>
			<StyledIssueDetailContent>
				{commentsList}
				<IssueDetailCommentInput />
			</StyledIssueDetailContent>
			<div>2</div>
		</StyledIssueDetailMain>
	);
};

export default IssueDetailMain;
