import icons from "Util/Icons";
import useUsers from "Hooks/useUsers";
import useMilestones from "Hooks/useMilestones";
import { useLabels } from "Hooks/useLabels";
import { TOptionButtonWithPopupItem } from "Component/OptionButtonWithPopup";
import { TPopupContentProps } from "Component/Popup";
import { StyledFilterCategory } from "./FilterCategoryList.styled";

type TLabelData = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

type TLabelResponseData = {
	count: number;
	data: TLabelData[];
};

type TMilestoneData = {
	id: number;
	title: string;
};

type TMilestoneResponseData = {
	openCount: number;
	closedCount: number;
	data: TMilestoneData[];
};

type TUsersData = {
	id: number;
	loginName: string;
	name: string;
	profileImage: string;
};

const { KeyboardArrowDown, KeyboardArrowUp } = icons;

const defaultPopupContents: TPopupContentProps[] = [];

const getContentsByLabels = ({ data }: TLabelResponseData): TPopupContentProps[] => {
	const newContents = data.map(({ id, name, labelColor }: TLabelData) => {
		return {
			id,
			name,
			image: labelColor,
			imageType: "color" as "color",
			filterName: "label",
		};
	});
	return newContents;
};

const getContentsByUsers = (data: TUsersData[]): TPopupContentProps[] => {
	const newContents = data.map(({ id, loginName, profileImage }: TUsersData) => {
		return {
			id,
			name: loginName,
			image: profileImage,
			imageType: "image" as "image",
			filterName: "assignee",
		};
	});
	return newContents;
};

const getContentsByMilestone = ({ data }: TMilestoneResponseData): TPopupContentProps[] => {
	const newContents = data.map(({ id, title }: TMilestoneData) => {
		return {
			id,
			name: title,
			filterName: "milestone",
		};
	});

	return newContents;
};

const filterCategoryItems: TOptionButtonWithPopupItem[] = [
	{
		id: 1,
		title: "담당자",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: useUsers,
		getPopupContents: getContentsByUsers,
		icons: {
			UpIcon: KeyboardArrowUp,
			DownIcon: KeyboardArrowDown,
		},
		StyledButton: StyledFilterCategory,
	},
	{
		id: 2,
		title: "레이블",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: useLabels,
		getPopupContents: getContentsByLabels,
		icons: {
			UpIcon: KeyboardArrowUp,
			DownIcon: KeyboardArrowDown,
		},
		StyledButton: StyledFilterCategory,
	},
	{
		id: 3,
		title: "마일스톤",
		isLeft: false,
		popupContents: defaultPopupContents,
		getData: useMilestones,
		getPopupContents: getContentsByMilestone,
		icons: {
			UpIcon: KeyboardArrowUp,
			DownIcon: KeyboardArrowDown,
		},
		StyledButton: StyledFilterCategory,
	},
	{
		id: 4,
		title: "작성자",
		isLeft: false,
		popupContents: defaultPopupContents,
		getData: useUsers,
		getPopupContents: getContentsByUsers,
		icons: {
			UpIcon: KeyboardArrowUp,
			DownIcon: KeyboardArrowDown,
		},
		StyledButton: StyledFilterCategory,
	},
];

export default filterCategoryItems;
