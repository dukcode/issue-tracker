// import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Checkbox } from "@mui/material";

import atoms from "Atoms";
import icons, { TResultIcon } from "Util/Icons";
import {
	StyledIssueListContentHeader,
	StyledIssueOptions,
	StyledCheckedIssuesCountInfo,
} from "./IssueListContentHeader.styled";
import IssueOption from "../IssueOption";
import FilterCategoryList from "./FilterCategoryList";
import IssueStateEditor from "./IssueStateEditor";

type TIssueOptionsData = {
	id: number;
	Icon: TResultIcon;
	isOpened: boolean;
	name: string;
	option: "open" | "closed";
};

const { ErrorOutline, Inventory } = icons;
const issueOptionsData: TIssueOptionsData[] = [
	{ id: 1, Icon: ErrorOutline, isOpened: true, name: "열린 이슈", option: "open" },
	{ id: 2, Icon: Inventory, isOpened: false, name: "닫힌 이슈", option: "closed" },
];

const IssueListContentHeader = () => {
	const [isCheckedAll, setIsCheckedAll] = useRecoilState(atoms.issueList.isCheckedAll);
	const [checkedIssues] = useRecoilState(atoms.issueList.checkedIssues);
	const listCount = useRecoilValue(atoms.issueList.listCount);
	const checkedIssuesCount = checkedIssues.size;
	const isChecked = !!checkedIssuesCount;

	const IssueOptions = issueOptionsData.map(({ id, Icon, isOpened, name, option }) => {
		return <IssueOption key={id} isOpened={isOpened} Icon={Icon} name={name} option={option} />;
	});

	const checkedIssuesCountInfo = (
		<StyledCheckedIssuesCountInfo>{checkedIssuesCount}개 이슈 선택</StyledCheckedIssuesCountInfo>
	);

	const handleMultipleCheckbox = () => {
		setIsCheckedAll(!isCheckedAll);
	};

	return (
		<StyledIssueListContentHeader>
			<StyledIssueOptions>
				<Checkbox
					size="small"
					color="default"
					onChange={handleMultipleCheckbox}
					indeterminate={listCount !== checkedIssuesCount && !!checkedIssuesCount}
					checked={isCheckedAll}
				/>
				{isChecked ? checkedIssuesCountInfo : IssueOptions}
			</StyledIssueOptions>
			{isChecked ? <IssueStateEditor /> : <FilterCategoryList />}
		</StyledIssueListContentHeader>
	);
};

export default IssueListContentHeader;
