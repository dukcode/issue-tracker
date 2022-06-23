import testImg from "Img/user.jpeg";
import testImg2 from "Img/user2.jpeg";
import { TPopupContentProps } from "Component/Popup";
import StyledFilterCategory from "./FilterCategory.styled";
import FilterCategory from "./FilterCategory";

type listItem = {
	id: number;
	title: string;
	isLeft: boolean;
	popupContents: TPopupContentProps[];
};

const examplePopupContents = [
	{ id: 1, name: "열린 이슈" },
	{ id: 2, name: "내가 작성한 이슈" },
	{ id: 3, name: "나에게 할당된 이슈" },
	{ id: 4, name: "내가 댓글을 남긴 이슈" },
	{ id: 5, name: "닫힌 이슈" },
];

const managerPopupContents: TPopupContentProps[] = [
	{ id: 1, name: "담당자가 없는 이슈" },
	{ id: 2, name: "JinJeon", image: testImg, imageType: "image" },
	{ id: 3, name: "Maeve", image: testImg2, imageType: "image" },
];

const filterCategoryItems: listItem[] = [
	{ id: 1, title: "담당자", isLeft: true, popupContents: managerPopupContents },
	{ id: 2, title: "레이블", isLeft: true, popupContents: examplePopupContents },
	{ id: 3, title: "마일스톤", isLeft: false, popupContents: examplePopupContents },
	{ id: 4, title: "작성자", isLeft: false, popupContents: examplePopupContents },
];

const FilterCategoryList = () => {
	const categoryList = filterCategoryItems.map((item: listItem) => <FilterCategory item={item} />);

	return <StyledFilterCategory>{categoryList}</StyledFilterCategory>;
};

export type { listItem };
export default FilterCategoryList;
