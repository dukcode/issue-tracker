import NewIssueOptions from "Component/IssueOptions";
import NewIssueHeader from "Pages/NewIssue/NewIssueHeader";
import NewIssueContent from "./NewIssueContent";
import NewIssueFooter from "./NewIssueFooter";
import { StyledNewIssue, StyledNewIssueMain } from "./NewIssue.styled";

const NewIssue = () => {
	return (
		<StyledNewIssue>
			<NewIssueHeader />
			<StyledNewIssueMain>
				<NewIssueContent />
				<NewIssueOptions />
			</StyledNewIssueMain>
			<NewIssueFooter />
		</StyledNewIssue>
	);
};

export default NewIssue;
