import { Link } from "react-router-dom";

import icons from "Util/Icons";
import Button from "Component/Button";
import { StyledOptionTabs, StyledTabsLabelMilestone } from "./OptionsTabs.styled";

const { BookmarksOutlined, DirectionsOutlined } = icons;
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
			<Link to="new-issue">
				<Button content={ADD_ISSUE} />
			</Link>
		</StyledOptionTabs>
	);
};

export default OptionTabs;
