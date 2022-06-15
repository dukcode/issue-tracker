import NewIssueContent from "./NewIssueContent";
import NewIssueOptions from "./NewIssueOptions";
import { StyledNewIssueMain } from "./NewIssue.styled";

const NewIssueMain = () => {
	return (
		<StyledNewIssueMain>
			<NewIssueContent />
			<NewIssueOptions />
		</StyledNewIssueMain>
	);
};

export default NewIssueMain;
