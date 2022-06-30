import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import icons from "Util/Icons";
import Button from "Component/Button";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import { milestoneApi, labelsApi } from "Api";
import { StyledOptionTabs, StyledTabsLabelMilestone, StyledTab } from "./OptionsTabs.styled";

const { BookmarksOutlined, DirectionsOutlined } = icons;
const LABEL = "레이블";
const MILESTONE = "마일스톤";
const ADD_ISSUE = "이슈 작성";
const ADD_LABEL = "추가";

type TOptionTabs = {
	labelFormIsClicked?: boolean;
	setLabelFormIsClicked?: Dispatch<SetStateAction<boolean>>;
};

const defaultOptionTabs = {
	labelFormIsClicked: false,
	setLabelFormIsClicked: undefined,
};

const OptionTabs = ({ labelFormIsClicked, setLabelFormIsClicked }: TOptionTabs) => {
	const location = useLocation();
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
	const isLabels = location.pathname === "/labels";

	const tabs = tabsInfo.map(({ id, Icon, name, count }) => {
		const nextPage = name === LABEL ? "/labels" : "/milestones";
		return (
			<Link to={nextPage}>
				<StyledTab key={id} className={name}>
					<Icon colorset="label" size={20} />
					<div>{name}</div>
					<div>({count})</div>
				</StyledTab>
			</Link>
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

	const handleLabelFormIsClicked = () => {
		if (setLabelFormIsClicked !== undefined) setLabelFormIsClicked(!labelFormIsClicked);
	};

	return (
		<StyledOptionTabs isLabels={isLabels}>
			<StyledTabsLabelMilestone>{tabs}</StyledTabsLabelMilestone>
			{isLabels ? (
				<Button content={ADD_LABEL} icon="AddBox" clickHandler={handleLabelFormIsClicked} />
			) : (
				<Link to="new-issue">
					<Button content={ADD_ISSUE} icon="AddBox" />
				</Link>
			)}
		</StyledOptionTabs>
	);
};

OptionTabs.defaultProps = defaultOptionTabs;

export default OptionTabs;
