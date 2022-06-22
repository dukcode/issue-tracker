import icons from "Util/Icons";
import FilterCategory from "./FilterCategory.styled";

type listItem = {
	id: number;
	category: string;
};

const { KeyboardArrowDown } = icons;

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자" },
	{ id: 2, category: "레이블" },
	{ id: 3, category: "마일스톤" },
	{ id: 4, category: "작성자" },
];

const FilterCategoryList = () => {
	const categoryList = filterCategoryItems.map((item: listItem) => (
		<li key={item.id}>
			<div>{item.category}</div>
			<KeyboardArrowDown colorset="label" size={18} />
		</li>
	));

	return <FilterCategory>{categoryList}</FilterCategory>;
};

export type { listItem };
export default FilterCategoryList;
