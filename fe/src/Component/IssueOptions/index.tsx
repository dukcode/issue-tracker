import OptionButtonWithPopup from "Component/OptionButtonWithPopup";
import issueOptionsItems from "./issueOptionsItems";
import { StyledNewIssueOptions } from "./IssueOptions.styled";

const NewIssueOptions = () => {
	const issueOptions = issueOptionsItems.map((item) => {
		return <OptionButtonWithPopup item={item} />;
	});

	return <StyledNewIssueOptions>{issueOptions}</StyledNewIssueOptions>;
};

export default NewIssueOptions;
