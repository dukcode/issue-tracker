import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";

import useLabels from "Hooks/useLabels";
import useMilestones from "Hooks/useMilestones";
import icons from "Util/Icons";
import Button from "Component/Button";
import { StyledOptionTabs, StyledTabsLabelMilestone, StyledTab } from "./OptionsTabs.styled";

const { BookmarksOutlined, DirectionsOutlined } = icons;
const LABEL = "레이블";
const MILESTONE = "마일스톤";
const ADD_ISSUE = "이슈 작성";
const ADD_LABEL = "추가";
const ADD_LABEL_CLOSE = "닫기";

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
	const { data: labelsData, isSuccess: isLabelsSuccess } = useLabels({ isCount: true });
	const { data: milestonesData, isSuccess: isMilestonesSuccess } = useMilestones({ isCount: true });
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
				<StyledTab key={id} tabType={name} isLabels={isLabels}>
					<Icon colorset="label" size={20} />
					<div>{name}</div>
					<div>({count})</div>
				</StyledTab>
			</Link>
		);
	});

	const handleAddNewLabelIsClicked = () => {
		if (setAddNewLabelIsClicked !== undefined) setAddNewLabelIsClicked(!addNewLabelIsClicked);
	};

	useEffect(() => {
		if (!isLabelsSuccess || !isMilestonesSuccess) return;
		setLabelCount(labelsData);
		setMilestoneCount(milestonesData);
	}, [isLabelsSuccess, isMilestonesSuccess]);

	return (
		<StyledOptionTabs isLabels={isLabels}>
			<StyledTabsLabelMilestone>{tabs}</StyledTabsLabelMilestone>
			{isLabels ? (
				<Button
					content={labelFormIsClicked ? ADD_LABEL_CLOSE : ADD_LABEL}
					icon={labelFormIsClicked ? "RemoveCircleOutline" : "AddBox"}
					reverse={labelFormIsClicked}
					clickHandler={handleLabelFormIsClicked}
				/>
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
