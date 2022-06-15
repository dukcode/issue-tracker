import NewIssueContent from "./NewIssueContent";
import { StyledNewIssueMain, StyledNewIssueOptions } from "./NewIssue.styled";

const NewIssueOptions = () => {
	return <StyledNewIssueOptions>options</StyledNewIssueOptions>;
};

const NewIssueMain = () => {
	return (
		<StyledNewIssueMain>
			<NewIssueContent />
			<NewIssueOptions />
		</StyledNewIssueMain>
	);
};

export default NewIssueMain;
