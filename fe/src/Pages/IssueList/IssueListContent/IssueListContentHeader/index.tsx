import { Dispatch, SetStateAction } from "react";
import icons from "Util/Icons";
import { Checkbox } from "@mui/material";
import {
	StyledIssueListContentHeader,
	StyledIssueOptions,
	StyledCheckedIssuesCountInfo,
} from "./IssueListContentHeader.styled";
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
	checkedIssues: Set<unknown>;
};

const IssueListContentHeader = ({
	counts,
	allChecked,
	setAllChecked,
	checkedIssues,
}: TIssueListContentHeader) => {
	const checkedIssuesCount = checkedIssues.size;

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

	const checkedIssuesCountInfo = (
		<StyledCheckedIssuesCountInfo>{checkedIssuesCount}개 이슈 선택</StyledCheckedIssuesCountInfo>
	);

	const handleMultipleCheckbox = () => {
		setAllChecked(!allChecked);
	};

	const isChecked = !!checkedIssuesCount;

	return (
		<StyledIssueListContentHeader>
			<StyledIssueOptions>
				<Checkbox
					size="small"
					color="default"
					onChange={handleMultipleCheckbox}
					checked={allChecked}
				/>
				{isChecked ? checkedIssuesCountInfo : IssueOptions}
			</StyledIssueOptions>
			<FilterCategoryList />
		</StyledIssueListContentHeader>
	);
};

export default IssueListContentHeader;
