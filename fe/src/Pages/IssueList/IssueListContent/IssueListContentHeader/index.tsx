import icons from "Util/Icons";
import { StyledIssueListContentHeader, StyledIssueOptions } from "./IssueListContentHeader.styled";
import IssueOption from "../IssueOption";
import FilterCategoryList from "../../FilterCategoryList";

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
			<FilterCategoryList />
		</StyledIssueListContentHeader>
	);
};

export default IssueListContentHeader;
