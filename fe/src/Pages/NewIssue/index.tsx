import NewIssueOptions from "Component/IssueOptions";
import IssueHeader from "Component/IssueHeader";
import NewIssueContent from "./NewIssueContent";
import { StyledNewIssue, StyledNewIssueMain } from "./NewIssue.styled";

const NewIssue = () => {
	return (
		<StyledNewIssue>
			<IssueHeader />
			<StyledNewIssueMain>
				<NewIssueContent />
				<NewIssueOptions />
			</StyledNewIssueMain>
		</StyledNewIssue>
	);
};

export default NewIssue;
