import icons from "Util/Icons";
import FilterCategory from "./FilterCategory.styled";

type listItem = {
	id: number;
	category: string;
};

type filterCategoryListType = {
	listItems: listItem[];
};

const { KeyboardArrowDown } = icons;

const FilterCategoryList = ({ listItems }: filterCategoryListType) => {
	const categoryList = listItems.map((item: listItem) => (
		<li key={item.id}>
			{item.category}
			<KeyboardArrowDown colorset="label" size={18} />
		</li>
	));
	return <FilterCategory>{categoryList}</FilterCategory>;
};

export type { listItem };
export default FilterCategoryList;
