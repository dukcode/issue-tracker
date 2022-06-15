import NewIssueMain from "./NewIssueMain";
import { StyledNewIssue, StyledNewIssueHeader } from "./NewIssue.styled";

const WRITE_NEW_ISSUE = "WRITE NEW ISSUE";

const NewIssue = () => {
	return (
		<StyledNewIssue>
			<StyledNewIssueHeader>{WRITE_NEW_ISSUE}</StyledNewIssueHeader>
			<NewIssueMain />
		</StyledNewIssue>
	);
};

export default NewIssue;
