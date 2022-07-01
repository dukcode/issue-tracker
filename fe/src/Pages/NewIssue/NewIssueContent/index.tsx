import React, { useState } from "react";
import { useRecoilState } from "recoil";

import atoms from "Atoms";
import UserImg from "Component/UserImg";
import CommentBox from "Component/CommentBox";
import {
	StyledNewIssueContentWrapper,
	StyledNewIssueContent,
	StyledNewIssueTitle,
} from "./NewIssueContent.styled";

const defaultIssueTitle = "제목";
const ADD_FILE = "파일 첨부하기";

const NewIssueContent = () => {
	const [newIssueTitle, setNewIssueTitle] = useRecoilState(atoms.newIssue.title);
	const [newIssueDesc, setNewIssueDesc] = useRecoilState(atoms.newIssue.desc);
	const [fileName, setFileName] = useState(ADD_FILE);

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setNewIssueTitle(value);
	};

	const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.target;
		setNewIssueDesc(value);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		if (files) {
			const { name } = files[0];
			setFileName(name);
		}
	};

	return (
		<StyledNewIssueContentWrapper>
			<UserImg size="medium" />
			<StyledNewIssueContent>
				<StyledNewIssueTitle>
					<input
						value={newIssueTitle}
						onChange={handleTitleChange}
						placeholder={defaultIssueTitle}
					/>
				</StyledNewIssueTitle>
				<CommentBox
					value={newIssueDesc}
					handleChangeValue={handleDescChange}
					handleChangeFile={handleFileChange}
					fileName={fileName}
				/>
			</StyledNewIssueContent>
		</StyledNewIssueContentWrapper>
	);
};

export default NewIssueContent;
