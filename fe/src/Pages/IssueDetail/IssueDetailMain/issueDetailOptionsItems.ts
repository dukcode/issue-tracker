import styled, { css } from "styled-components";

import atoms from "Atoms";
import useLabelsGet from "Hooks/useLabels";
import useMilestones from "Hooks/useMilestones";
import useUsers from "Hooks/useUsers";
import { TOptionButtonWithPopupItem } from "Component/OptionButtonWithPopup";
import { TPopupContentProps } from "Component/Popup";
import icons from "Util/Icons";

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
	countOpen: number;
	countClosed: number;
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

const StyledIssueOptionButton = styled.button`
	${({ theme: { colors, fonts } }) => css`
		${fonts.linkSmall};
		color: ${colors.label};
		cursor: pointer;
		display: flex;
		width: 100%;
		height: 50px;

		align-items: center;
		justify-content: space-between;
	`}
`;

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
	const newContents = data.map(({ id, title, countOpen, countClosed }: TMilestoneData) => {
		return {
			id,
			name: title,
			option: { countOpen, countClosed },
		};
	});

	return newContents;
};

const issueDetailOptionsItems: TOptionButtonWithPopupItem[] = [
	{
		id: 1,
		title: "담당자",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: useUsers,
		getPopupContents: getContentsByUsers,
		icons: {
			UpIcon: AddBox,
			DownIcon: IndeterminateCheckBox,
		},
		StyledButton: StyledIssueOptionButton,
		atom: atoms.issueDetail.users,
	},
	{
		id: 2,
		title: "레이블",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: useLabelsGet,
		getPopupContents: getContentsByLabels,
		icons: {
			UpIcon: AddBox,
			DownIcon: IndeterminateCheckBox,
		},
		StyledButton: StyledIssueOptionButton,
		atom: atoms.issueDetail.labels,
	},
	{
		id: 3,
		title: "마일스톤",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: useMilestones,
		getPopupContents: getContentsByMilestone,
		icons: {
			UpIcon: AddBox,
			DownIcon: IndeterminateCheckBox,
		},
		StyledButton: StyledIssueOptionButton,
		atom: atoms.issueDetail.milestones,
	},
];

export default issueDetailOptionsItems;
