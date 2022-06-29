import { useParams } from "react-router-dom";
import LoadingAnimation from "Component/Loading";
import { useIssuesGet } from "Hooks/useIssues";
import StyledIssueDetail from "./IssueDetail.styled";
import IssueDetailHeader from "./IssueDetailHeader";
import IssueDetailMain from "./IssueDetailMain";

const IssueDetail = () => {
	const id = useParams()?.id;
	const { isLoading } = useIssuesGet(id);

	return (
		<StyledIssueDetail>
			{isLoading ? (
				<LoadingAnimation size={130} color="label" border={20} />
			) : (
				<>
					<IssueDetailHeader />
					<IssueDetailMain />
				</>
			)}
		</StyledIssueDetail>
	);
};

export default IssueDetail;
