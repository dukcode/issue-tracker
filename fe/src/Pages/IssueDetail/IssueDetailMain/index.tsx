import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useIssuesDelete, useIssuesGet } from "Hooks/useIssues";
import NewIssueOptions from "Component/IssueOptions";
import TextButton from "Component/TextButton";
import IssueDetailCommentInput from "./IssueDetailCommentInput";
import IssueDetailComment, { TComment } from "./IssueDetailComment";
import issueDetailOptionsItems from "./issueDetailOptionsItems";
import {
	StyledIssueDetailMain,
	StyledIssueDetailContent,
	IssueDetailOptionsWrapper,
	TextButtonWrapper,
} from "./IssueDetailMain.styled";

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
		createDate: "",
		id: 0,
		modifiedDate: "",
		reactions: {},
		systemMessage: true,
	},
];

const IssueDetailMain = () => {
	const id = useParams()?.id;
	const [comments, setComments] = useState<TComment[]>(defaultComment);
	const navigate = useNavigate();
	const { data, isSuccess, isFetching } = useIssuesGet({ id });
	const { mutate, isSuccess: isDeleteSuccess, isLoading } = useIssuesDelete(id);
	const commentsList = comments.map(
		(comment) => !comment.systemMessage && <IssueDetailComment key={comment.id} comment={comment} />
	);

	const setNewComments = () => {
		const {
			comments: { data: newComments },
		} = data;
		setComments(newComments);
	};

	const handleClickButton = () => {
		mutate();
	};

	useEffect(() => {
		setNewComments();
	}, [isSuccess]);

	useEffect(() => {
		if (isFetching) return;
		setNewComments();
	}, [isFetching]);

	useEffect(() => {
		if (!isDeleteSuccess) return;
		navigate("/");
	}, [isDeleteSuccess]);

	return (
		<StyledIssueDetailMain>
			<StyledIssueDetailContent>
				{commentsList}
				<IssueDetailCommentInput />
			</StyledIssueDetailContent>
			<IssueDetailOptionsWrapper>
				<NewIssueOptions items={issueDetailOptionsItems} />
				<TextButtonWrapper>
					<TextButton
						handleClick={handleClickButton}
						color="red"
						size="linkXSmall"
						icon="DeleteOutline"
						content="이슈 삭제"
						isHover={false}
						disabledOption={isLoading}
					/>
				</TextButtonWrapper>
			</IssueDetailOptionsWrapper>
		</StyledIssueDetailMain>
	);
};

export default IssueDetailMain;
