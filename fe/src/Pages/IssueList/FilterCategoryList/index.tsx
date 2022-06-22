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

const FilterCategoryList = () => {
	const categoryList = filterCategoryItems.map((item: listItem) => (
		<Popup isLeft={item.isLeft}>
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
