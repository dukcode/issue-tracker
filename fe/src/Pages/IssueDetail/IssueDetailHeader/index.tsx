import StyledIssueDetailHeader from "./IssueDetailHeader.styled";
import IssueDetailHeaderTitle from "./IssueDetailHeaderTitle";
import IssueDetailHeaderInfo from "./IssueDetailHeaderInfo";

const IssueDetailHeader = () => {
	return (
		<StyledIssueDetailHeader>
			<IssueDetailHeaderTitle />
			<IssueDetailHeaderInfo />
		</StyledIssueDetailHeader>
	);
};

export default IssueDetailHeader;
