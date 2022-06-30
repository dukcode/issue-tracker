import IssueOptions from "Component/IssueOptions";
import NewIssueHeader from "Pages/NewIssue/NewIssueHeader";
import NewIssueContent from "./NewIssueContent";
import NewIssueFooter from "./NewIssueFooter";
import issueOptionsItems from "./newIssueOptionsItems";
import { StyledNewIssue, StyledNewIssueMain } from "./NewIssue.styled";

const NewIssue = () => {
	return (
		<StyledNewIssue>
			<NewIssueHeader />
			<StyledNewIssueMain>
				<NewIssueContent />
				<IssueOptions items={issueOptionsItems} />
			</StyledNewIssueMain>
			<NewIssueFooter />
		</StyledNewIssue>
	);
};

export default NewIssue;
