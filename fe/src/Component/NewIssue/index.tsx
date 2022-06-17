import NewIssueContent from "./NewIssueContent";
import NewIssueOptions from "./NewIssueOptions";
import { StyledNewIssue, StyledNewIssueHeader, StyledNewIssueMain } from "./NewIssue.styled";

const WRITE_NEW_ISSUE = "WRITE NEW ISSUE";

const NewIssue = () => {
	return (
		<StyledNewIssue>
			<StyledNewIssueHeader>{WRITE_NEW_ISSUE}</StyledNewIssueHeader>
			<StyledNewIssueMain>
				<NewIssueContent />
				<NewIssueOptions />
			</StyledNewIssueMain>
		</StyledNewIssue>
	);
};

export default NewIssue;
