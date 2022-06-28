import { useParams } from "react-router-dom";
import StyledIssueDetail from "./IssueDetail.styled";
import IssueDetailHeader from "./IssueDetailHeader";

const IssueDetail = () => {
	const params = useParams();
	const issueId = params?.id;

	return (
		<StyledIssueDetail>
			<IssueDetailHeader />
			IssueNumber : {issueId}
		</StyledIssueDetail>
	);
};

export default IssueDetail;
