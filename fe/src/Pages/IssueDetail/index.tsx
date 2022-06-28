import { useParams } from "react-router-dom";
import StyledIssueDetail from "./IssueDetail.styled";

const IssueDetail = () => {
	const params = useParams();
	const issueId = params?.id;
	return <StyledIssueDetail>IssueNumber : {issueId}</StyledIssueDetail>;
};

export default IssueDetail;
