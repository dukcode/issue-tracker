import { useState } from "react";

import icons from "Util/Icons";
import { StyledFilterBar, StyledFilterSelector, StyledFilterInputArea } from "./FilterBar.styled";

const FILTER = "필터";
const { KeyboardArrowDown, Search } = icons;
const defaultInputValue = "is:issue is:open";

const FilterBar = () => {
	const [inputValue] = useState(defaultInputValue);

	return (
		<StyledFilterBar>
			<StyledFilterSelector>
				<div>{FILTER}</div>
				<KeyboardArrowDown colorset="label" size={20} />
			</StyledFilterSelector>
			<StyledFilterInputArea>
				<Search colorset="placeholder" size={20} />
				<input value={inputValue} />
			</StyledFilterInputArea>
		</StyledFilterBar>
	);
};

export default FilterBar;
