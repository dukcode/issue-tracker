import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icons from "Util/Icons";
import Button from "Component/Button";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import { milestoneApi, labelsApi } from "Api";
import { StyledOptionTabs, StyledTabsLabelMilestone } from "./OptionsTabs.styled";

const { BookmarksOutlined, DirectionsOutlined } = icons;
const LABEL = "레이블";
const MILESTONE = "마일스톤";
const ADD_ISSUE = "이슈 작성";

const OptionTabs = () => {
	const { accessToken } = useCookieUserInfo();
	const [labelCount, setLabelCount] = useState(0);
	const [milestoneCount, setMilestoneCount] = useState(0);
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

	const tabs = tabsInfo.map(({ id, Icon, name, count }) => {
		return (
			<div key={id}>
				<Icon colorset="label" size={20} />
				<div>{name}</div>
				<div>({count})</div>
			</div>
		);
	});

	const getLabelMilestoneCount = async () => {
		const milestoneResponse = await milestoneApi.getMilestone(accessToken, true);
		const labelResponse = await labelsApi.getLabels(accessToken, true);

		const { data: milestoneData } = milestoneResponse;
		const { data: labelData } = labelResponse;

		setMilestoneCount(milestoneData);
		setLabelCount(labelData);
	};

	useEffect(() => {
		getLabelMilestoneCount();
	}, []);

	return (
		<StyledOptionTabs>
			<StyledTabsLabelMilestone>{tabs}</StyledTabsLabelMilestone>
			<Link to="new-issue">
				<Button content={ADD_ISSUE} icon="AddBox" />
			</Link>
		</StyledOptionTabs>
	);
};

export default OptionTabs;
