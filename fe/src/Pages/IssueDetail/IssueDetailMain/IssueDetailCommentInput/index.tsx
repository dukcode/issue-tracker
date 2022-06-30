import React, { useState } from "react";

import CommentBox from "Component/CommentBox";
import UserImg from "Component/UserImg";
import StyledIssueDetailCommentInput from "./IssueDetailCommentInput.styled";

const ADD_FILE = "파일 첨부하기";

const IssueDetailComment = () => {
	const [comment, setComment] = useState("");
	const [fileName, setFileName] = useState(ADD_FILE);

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
	return (
		<StyledIssueDetailCommentInput>
			<UserImg size="medium" />
			<CommentBox
				value={comment}
				handleChangeValue={handleCommentChange}
				handleChangeFile={handleFileChange}
				fileName={fileName}
			/>
		</StyledIssueDetailCommentInput>
	);
};

export default IssueDetailComment;
