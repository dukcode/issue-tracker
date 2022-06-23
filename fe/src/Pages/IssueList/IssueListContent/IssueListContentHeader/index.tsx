import { Dispatch, SetStateAction } from "react";
import icons from "Util/Icons";
import { Checkbox } from "@mui/material";
import { StyledIssueListContentHeader, StyledIssueOptions } from "./IssueListContentHeader.styled";
import IssueOption from "../IssueOption";
import FilterCategoryList from "./FilterCategoryList";

const { ErrorOutline, Inventory } = icons;
const issueOptionsData = [
	{ id: 1, Icon: ErrorOutline, isOpened: true, name: "열린 이슈", option: "open" },
	{ id: 2, Icon: Inventory, isOpened: false, name: "닫힌 이슈", option: "closed" },
];

type TIssueListContentHeader = {
	counts: { openCount: number; closedCount: number };
	allChecked: boolean;
	setAllChecked: Dispatch<SetStateAction<boolean>>;
};

const IssueListContentHeader = ({ counts, allChecked, setAllChecked }: TIssueListContentHeader) => {
	const IssueOptions = issueOptionsData.map(({ id, Icon, isOpened, name, option }) => {
		return (
			<IssueOption
				key={id}
				isOpened={isOpened}
				Icon={Icon}
				counts={counts}
				name={name}
				option={option}
			/>
		);
	});

	const handleMultipleCheckbox = () => {
		setAllChecked(!allChecked);
	};

	return (
		<StyledIssueListContentHeader>
			<StyledIssueOptions>
				<Checkbox
					size="small"
					color="default"
					onChange={handleMultipleCheckbox}
					checked={allChecked}
				/>
				{IssueOptions}
			</StyledIssueOptions>
			<FilterCategoryList />
		</StyledIssueListContentHeader>
	);
};

export default IssueListContentHeader;
