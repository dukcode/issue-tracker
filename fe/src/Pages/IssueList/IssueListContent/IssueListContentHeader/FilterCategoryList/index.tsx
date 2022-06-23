import icons from "Util/Icons";
import Popup from "Component/Popup";
import FilterCategory from "./FilterCategory.styled";

type listItem = {
	id: number;
	category: string;
	isLeft: boolean;
};

const { KeyboardArrowDown } = icons;

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자", isLeft: true },
	{ id: 2, category: "레이블", isLeft: true },
	{ id: 3, category: "마일스톤", isLeft: false },
	{ id: 4, category: "작성자", isLeft: false },
];

const popupTitle = "이슈 필터";
const popupContents = [
	{ id: 1, name: "열린 이슈" },
	{ id: 2, name: "내가 작성한 이슈" },
	{ id: 3, name: "나에게 할당된 이슈" },
	{ id: 4, name: "내가 댓글을 남긴 이슈" },
	{ id: 5, name: "닫힌 이슈" },
];

const FilterCategoryList = () => {
	const categoryList = filterCategoryItems.map((item: listItem) => (
		<Popup isLeft={item.isLeft} contents={popupContents} title={popupTitle}>
			<button key={item.id} type="button">
				<div>{item.category}</div>
				<KeyboardArrowDown colorset="label" size={18} />
			</button>
		</Popup>
	));

	return <FilterCategory>{categoryList}</FilterCategory>;
};

export type { listItem };
export default FilterCategoryList;
