import OptionButtonWithPopup, { TOptionButtonWithPopupItem } from "Component/OptionButtonWithPopup";
import filterCategoryItems from "./filterCategoryItems";
import { StyledFilterCategoryList } from "./FilterCategoryList.styled";

const FilterCategoryList = () => {
	const filterCategoryList = filterCategoryItems.map((item: TOptionButtonWithPopupItem) => (
		<OptionButtonWithPopup item={item} key={item.id} />
	));

	return <StyledFilterCategoryList>{filterCategoryList}</StyledFilterCategoryList>;
};

export default FilterCategoryList;
