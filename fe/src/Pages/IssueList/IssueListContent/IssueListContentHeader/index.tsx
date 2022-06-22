import icons from "Util/Icons";
import { StyledIssueListContentHeader, StyledIssueOptions } from "./IssueListContentHeader.styled";
import IssueOption from "../IssueOption";
import FilterCategoryList, { listItem } from "../../FilterCategoryList";

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자" },
	{ id: 2, category: "레이블" },
	{ id: 3, category: "마일스톤" },
	{ id: 4, category: "작성자" },
];

const { ErrorOutline, Inventory } = icons;
const issueOptionsData = [
	{ id: 1, Icon: ErrorOutline, isOpened: true, name: "열린 이슈", option: "open" },
	{ id: 2, Icon: Inventory, isOpened: false, name: "닫힌 이슈", option: "closed" },
];

type TIssueListContentHeader = {
	counts: { openCount: number; closedCount: number };
};

const IssueListContentHeader = ({ counts }: TIssueListContentHeader) => {
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

	return (
		<StyledIssueListContentHeader>
			<StyledIssueOptions>{IssueOptions}</StyledIssueOptions>
			<FilterCategoryList listItems={filterCategoryItems} />
		</StyledIssueListContentHeader>
	);
};

export default IssueListContentHeader;
