import Button from "Component/Button";
import { StyledIssueDetailHeaderTitle, StyledTitleButtons } from "./IssueDetailHeaderTitle.styled";

const IssueDetailHeaderTitle = () => {
	return (
		<StyledIssueDetailHeaderTitle>
			<div>IssueDetailHeaderTitle</div>
			<StyledTitleButtons>
				<Button icon="DriveFileRenameOutline" content="제목 편집" reverse={true} />
				<Button icon="Inventory" content="이슈 닫기" reverse={true} />
			</StyledTitleButtons>
		</StyledIssueDetailHeaderTitle>
	);
};

export default IssueDetailHeaderTitle;
