import { useIssuesGet } from "Hooks/useIssues";
import { useParams } from "react-router-dom";

import Button from "Component/Button";
import {
	StyledIssueDetailHeaderTitle,
	StyledTitleButtons,
	StyledIssueDetailHeaderName,
} from "./IssueDetailHeaderTitle.styled";

const IssueDetailHeaderTitle = () => {
	const id = useParams()?.id;
	const { data } = useIssuesGet(id);
	const title = data?.title;

	return (
		<StyledIssueDetailHeaderTitle>
			<StyledIssueDetailHeaderName>
				<div>{title}</div>
				<div>#{id}</div>
			</StyledIssueDetailHeaderName>
			<StyledTitleButtons>
				<Button icon="DriveFileRenameOutline" content="제목 편집" reverse={true} />
				<Button icon="Inventory" content="이슈 닫기" reverse={true} />
			</StyledTitleButtons>
		</StyledIssueDetailHeaderTitle>
	);
};

export default IssueDetailHeaderTitle;
