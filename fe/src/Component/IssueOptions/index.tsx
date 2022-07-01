import OptionButtonWithPopup, { TOptionButtonWithPopupItem } from "Component/OptionButtonWithPopup";
import {
	SelectedOptionUsers,
	SelectedOptionLabels,
	SelectedOptionMilestones,
} from "./SelectedOptions";
import { StyledNewIssueOptions, StyledIssueOption } from "./IssueOptions.styled";

const selectedOptionComponents = {
	담당자: SelectedOptionUsers,
	레이블: SelectedOptionLabels,
	마일스톤: SelectedOptionMilestones,
	작성자: SelectedOptionUsers,
};

const NewIssueOptions = ({ items }: { items: TOptionButtonWithPopupItem[] }) => {
	const issueOptions = items.map((item) => {
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
