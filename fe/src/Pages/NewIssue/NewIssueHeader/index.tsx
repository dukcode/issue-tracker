import StyledNewIssueHeader from "./NewIssueHeader.styled";

const WRITE_NEW_ISSUE = "WRITE NEW ISSUE";

const NewIssueHeader = () => {
	const headerContent = WRITE_NEW_ISSUE;
	return <StyledNewIssueHeader>{headerContent}</StyledNewIssueHeader>;
};

export default NewIssueHeader;
