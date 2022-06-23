import { AxiosResponse } from "axios";

import { labelsApi, usersApi, milestoneApi } from "Api";
import { TPopupContentProps } from "Component/Popup";
import StyledFilterCategory from "./FilterCategory.styled";
import FilterCategory from "./FilterCategory";

type TFilterCategoryItem = {
	id: number;
	title: string;
	isLeft: boolean;
	popupContents: TPopupContentProps[];
	getData: (token: string) => Promise<
		| AxiosResponse<any, any>
		| {
				data: Error;
				status: null;
		  }
	>;
	getPopupContents: (data: any) => TPopupContentProps[];
};

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

const filterCategoryItems: TFilterCategoryItem[] = [
	{
		id: 1,
		title: "담당자",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: usersApi.getUsers,
		getPopupContents: getContentsByUsers,
	},
	{
		id: 2,
		title: "레이블",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: labelsApi.getLabels,
		getPopupContents: getContentsByLabels,
	},
	{
		id: 3,
		title: "마일스톤",
		isLeft: false,
		popupContents: defaultPopupContents,
		getData: milestoneApi.getMilestone,
		getPopupContents: getContentsByMilestone,
	},
	{
		id: 4,
		title: "작성자",
		isLeft: false,
		popupContents: defaultPopupContents,
		getData: usersApi.getUsers,
		getPopupContents: getContentsByUsers,
	},
];

const FilterCategoryList = () => {
	const categoryList = filterCategoryItems.map((item: TFilterCategoryItem) => (
		<FilterCategory item={item} />
	));

	return <StyledFilterCategory>{categoryList}</StyledFilterCategory>;
};

export type { TFilterCategoryItem as listItem };
export default FilterCategoryList;
