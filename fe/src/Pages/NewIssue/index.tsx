import useUsers from "Hooks/useUsers";
import NewIssueOptions from "Component/IssueOptions";
import IssueHeader from "Component/IssueHeader";
import NewIssueContent from "./NewIssueContent";
import { StyledNewIssue, StyledNewIssueMain } from "./NewIssue.styled";

const NewIssue = () => {
	const usersInfo = useUsers();
	const { data, status, isError } = usersInfo;
	console.log(data, status, isError);

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
