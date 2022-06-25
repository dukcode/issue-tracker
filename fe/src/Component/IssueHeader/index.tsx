import StyledIssueHeader from "./IssueHeader.styled";

const WRITE_NEW_ISSUE = "WRITE NEW ISSUE";

const IssueHeader = () => {
	const headerContent = WRITE_NEW_ISSUE;
	return <StyledIssueHeader>{headerContent}</StyledIssueHeader>;
};

export default IssueHeader;
