import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useIssuesCommentPost } from "Hooks/useIssues";
import Button from "Component/Button";
import CommentBox from "Component/CommentBox";
import UserImg from "Component/UserImg";
import {
	StyledIssueDetailCommentInput,
	IssueDetailCommentInputWrapper,
	ButtonWrapper,
} from "./IssueDetailCommentInput.styled";

const ADD_FILE = "파일 첨부하기";
const WRITE_COMMENT = "코멘트 작성";

const IssueDetailComment = () => {
	const param = useParams()?.id;
	const [comment, setComment] = useState("");
	const [fileName, setFileName] = useState(ADD_FILE);
	const { mutate, isLoading } = useIssuesCommentPost({ id: param });

	const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.target;
		setComment(value);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		if (files) {
			const { name } = files[0];
			setFileName(name);
		}
	};

	const handleButtonClick = () => {
		mutate({ content: comment });
		setComment("");
	};

	return (
		<IssueDetailCommentInputWrapper>
			<StyledIssueDetailCommentInput>
				<UserImg size="medium" />
				<CommentBox
					value={comment}
					handleChangeValue={handleCommentChange}
					handleChangeFile={handleFileChange}
					fileName={fileName}
				/>
			</StyledIssueDetailCommentInput>
			<ButtonWrapper>
				<Button
					content={WRITE_COMMENT}
					icon="AddBox"
					size="small"
					disableOption={!comment.length || isLoading}
					clickHandler={handleButtonClick}
				/>
			</ButtonWrapper>
		</IssueDetailCommentInputWrapper>
	);
};

export default IssueDetailComment;
