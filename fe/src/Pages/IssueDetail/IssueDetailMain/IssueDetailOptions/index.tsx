import OptionButtonWithPopup from "Component/OptionButtonWithPopup";
import issueOptionsItems from "./issueDetailOptionsItems";
import {
	SelectedOptionUsers,
	SelectedOptionLabels,
	SelectedOptionMilestones,
} from "./SelectedOptions";
import { StyledNewIssueOptions, StyledIssueOption } from "./IssueDetailOptions.styled";

const selectedOptionComponents = {
	담당자: SelectedOptionUsers,
	레이블: SelectedOptionLabels,
	마일스톤: SelectedOptionMilestones,
	작성자: SelectedOptionUsers,
};

const NewIssueOptions = () => {
	const issueOptions = issueOptionsItems.map((item) => {
		const { atom, title } = item;
		const SelectedOptionComponent = selectedOptionComponents[title];
		return (
			<StyledIssueOption key={item.id}>
				<OptionButtonWithPopup item={item} />
				{atom && <SelectedOptionComponent atom={atom} />}
			</StyledIssueOption>
		);
	});

	return <StyledNewIssueOptions>{issueOptions}</StyledNewIssueOptions>;
};

export default NewIssueOptions;
