import icons from "Util/Icons";
import { StyledOptionTabs, StyledTabsLabelMilestone, StyledAddIssue } from "./OptionsTabs.styled";

const { BookmarksOutlined, DirectionsOutlined, AddBox } = icons;
const LABEL = "레이블";
const MILESTONE = "마일스톤";
const ADD_ISSUE = "이슈 작성";
const labelCount = 2;
const milestoneCount = 3;
const tabsInfo = [
	{
		id: 1,
		Icon: BookmarksOutlined,
		name: LABEL,
		count: labelCount,
	},
	{
		id: 2,
		Icon: DirectionsOutlined,
		name: MILESTONE,
		count: milestoneCount,
	},
];

const OptionTabs = () => {
	const tabs = tabsInfo.map(({ id, Icon, name, count }) => {
		return (
			<div key={id}>
				<Icon colorset="label" size={20} />
				<div>{name}</div>
				<div>({count})</div>
			</div>
		);
	});

	return (
		<StyledOptionTabs>
			<StyledTabsLabelMilestone>{tabs}</StyledTabsLabelMilestone>
			<StyledAddIssue>
				<AddBox colorset="offWhite" size={20} />
				{ADD_ISSUE}
			</StyledAddIssue>
		</StyledOptionTabs>
	);
};

export default OptionTabs;
