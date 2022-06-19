import { useState } from "react";

import UserImg from "Component/UserImg";
import user from "Img/user.jpeg";
import icons from "Util/Icons";
import {
	StyledNewIssueContentWrapper,
	StyledNewIssueContent,
	StyledNewIssueTitle,
	StyledNewIssueDesc,
} from "./NewIssueContent.styled";

const defaultIssueTitle = "제목";
const defaultIssueDesc = "코멘트를 입력하세요";
const ADD_FILE = "파일 첨부하기";
const { FilePresent } = icons;

const NewIssueContent = () => {
	const [issueTitle] = useState(defaultIssueTitle);
	const [issueDesc] = useState(defaultIssueDesc);

	return (
		<StyledNewIssueContentWrapper>
			<UserImg img={user} size="medium" />
			<StyledNewIssueContent>
				<StyledNewIssueTitle>
					<input value={issueTitle} />
				</StyledNewIssueTitle>
				<StyledNewIssueDesc>
					<textarea value={issueDesc} />
					<div>
						<FilePresent size={16} />
						{ADD_FILE}
					</div>
				</StyledNewIssueDesc>
			</StyledNewIssueContent>
		</StyledNewIssueContentWrapper>
	);
};

export default NewIssueContent;
