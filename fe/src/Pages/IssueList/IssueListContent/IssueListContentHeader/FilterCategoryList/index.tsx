import { AxiosResponse } from "axios";

import labelsApi from "Api/labelsApi";
import { TPopupContentProps } from "Component/Popup";
import StyledFilterCategory from "./FilterCategory.styled";
import FilterCategory from "./FilterCategory";

type listItem = {
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

const examplePopupContents = [
	{ id: 1, name: "열린 이슈" },
	{ id: 2, name: "내가 작성한 이슈" },
	{ id: 3, name: "나에게 할당된 이슈" },
	{ id: 4, name: "내가 댓글을 남긴 이슈" },
	{ id: 5, name: "닫힌 이슈" },
];

const defaultPopupContents: TPopupContentProps[] = [];

const getContentsByLabels = (data: TLabelData[]) => {
	const newContents: TPopupContentProps[] = data.map(({ id, name, labelColor }: TLabelData) => {
		return {
			id,
			name,
			image: labelColor,
			imageType: "color",
		};
	});
	return newContents;
};

const filterCategoryItems: listItem[] = [
	{
		id: 1,
		title: "담당자",
		isLeft: true,
		popupContents: defaultPopupContents,
		getData: labelsApi.getLabels,
		getPopupContents: getContentsByLabels,
	},
	{
		id: 2,
		title: "레이블",
		isLeft: true,
		popupContents: examplePopupContents,
		getData: labelsApi.getLabels,
		getPopupContents: getContentsByLabels,
	},
	{
		id: 3,
		title: "마일스톤",
		isLeft: false,
		popupContents: examplePopupContents,
		getData: labelsApi.getLabels,
		getPopupContents: getContentsByLabels,
	},
	{
		id: 4,
		title: "작성자",
		isLeft: false,
		popupContents: examplePopupContents,
		getData: labelsApi.getLabels,
		getPopupContents: getContentsByLabels,
	},
];

const FilterCategoryList = () => {
	const categoryList = filterCategoryItems.map((item: listItem) => <FilterCategory item={item} />);

	return <StyledFilterCategory>{categoryList}</StyledFilterCategory>;
};

export type { listItem };
export default FilterCategoryList;
