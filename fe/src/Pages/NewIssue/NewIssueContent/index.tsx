import React, { useState } from "react";

import UserImg from "Component/UserImg";
import user from "Img/user.jpeg";
import icons from "Util/Icons";
import {
	StyledNewIssueContentWrapper,
	StyledNewIssueContent,
	StyledNewIssueTitle,
	StyledNewIssueDesc,
	StyledUploadImg,
} from "./NewIssueContent.styled";

const defaultIssueTitle = "제목";
const defaultIssueDesc = "코멘트를 입력하세요";
const ADD_FILE = "파일 첨부하기";
const { FilePresent } = icons;

const NewIssueContent = () => {
	const [issueTitle, setIssueTitle] = useState("");
	const [issueDesc, setIssueDesc] = useState("");
	const [fileName, setFileName] = useState(ADD_FILE);

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setIssueTitle(value);
	};

	const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.target;
		setIssueDesc(value);
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
			<UserImg img={user} size="medium" />
			<StyledNewIssueContent>
				<StyledNewIssueTitle>
					<input value={issueTitle} onChange={handleTitleChange} placeholder={defaultIssueTitle} />
				</StyledNewIssueTitle>
				<StyledNewIssueDesc>
					<textarea value={issueDesc} onChange={handleDescChange} placeholder={defaultIssueDesc} />
					<input type="file" id="upload_img" onChange={handleFileChange} />
					<StyledUploadImg htmlFor="upload_img">
						<FilePresent colorset="label" size={16} />
						{fileName}
					</StyledUploadImg>
				</StyledNewIssueDesc>
			</StyledNewIssueContent>
		</StyledNewIssueContentWrapper>
	);
};

export default NewIssueContent;
