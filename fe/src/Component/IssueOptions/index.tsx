import { labelsApi, usersApi, milestoneApi } from "Api";
import OptionButtonWithPopup, { TOptionButtonWithPopupItem } from "Component/OptionButtonWithPopup";
import { TPopupContentProps } from "Component/Popup";
import icons from "Util/Icons";
import { StyledNewIssueOptions, StyledIssueOption } from "./IssueOptions.styled";

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

const { IndeterminateCheckBox, AddBox } = icons;
const defaultPopupContents: TPopupContentProps[] = [];

const getContentsByLabels = ({ data }: TLabelResponseData): TPopupContentProps[] => {
	const newContents = data.map(({ id, name, labelColor }: TLabelData) => {
		return {
			id,
			name,
			image: labelColor,
			imageType: "color" as "color",
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
		};
	});
	return newContents;
};

const getContentsByMilestone = ({ data }: TMilestoneResponseData): TPopupContentProps[] => {
	const newContents = data.map(({ id, title }: TMilestoneData) => {
		return {
			id,
			name: title,
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
		getData: usersApi.getUsers,
		getPopupContents: getContentsByUsers,
		icons: {
			UpIcon: AddBox,
			DownIcon: IndeterminateCheckBox,
		},
		StyledButton: StyledIssueOption,
	},
	{
		id: 2,
		title: "레이블",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: labelsApi.getLabels,
		getPopupContents: getContentsByLabels,
		icons: {
			UpIcon: AddBox,
			DownIcon: IndeterminateCheckBox,
		},
		StyledButton: StyledIssueOption,
	},
	{
		id: 3,
		title: "마일스톤",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: milestoneApi.getMilestone,
		getPopupContents: getContentsByMilestone,
		icons: {
			UpIcon: AddBox,
			DownIcon: IndeterminateCheckBox,
		},
		StyledButton: StyledIssueOption,
	},
];

const NewIssueOptions = () => {
	const issueOptions = filterCategoryItems.map((item) => {
		return <OptionButtonWithPopup item={item} />;
	});

	return <StyledNewIssueOptions>{issueOptions}</StyledNewIssueOptions>;
};

export default NewIssueOptions;
