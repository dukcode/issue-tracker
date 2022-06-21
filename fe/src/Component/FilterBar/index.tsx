import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import icons from "Util/Icons";
import { StyledFilterBar, StyledFilterSelector, StyledFilterInputArea } from "./FilterBar.styled";

const FILTER = "필터";
const { KeyboardArrowDown, Search } = icons;
const defaultInputValue = "is:open";

const FilterBar = () => {
	const [inputValue, setInputValue] = useState(defaultInputValue);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const q = searchParams.get("q");
		if (q) setInputValue(q);
	}, [searchParams]);

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
