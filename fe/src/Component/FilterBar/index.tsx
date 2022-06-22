import Popup from "Component/Popup";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import icons from "Util/Icons";
import { StyledFilterBar, StyledFilterSelector, StyledFilterInputArea } from "./FilterBar.styled";

const FILTER = "필터";
const { KeyboardArrowDown, Search } = icons;
const defaultInputValue = "is:open";

const FilterBar = () => {
	const [inputValue, setInputValue] = useState(defaultInputValue);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setInputValue(value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const query = { q: inputValue };
		const params = new URLSearchParams(query);
		navigate(`/?${params.toString()}`);
	};

	useEffect(() => {
		const q = searchParams.get("q");
		if (q) setInputValue(q);
	}, [searchParams]);

	return (
		<StyledFilterBar>
			<Popup>
				<StyledFilterSelector>
					<div>{FILTER}</div>
					<KeyboardArrowDown colorset="label" size={20} />
				</StyledFilterSelector>
			</Popup>
			<StyledFilterInputArea onSubmit={handleSubmit}>
				<Search colorset="placeholder" size={20} />
				<input value={inputValue} onChange={handleInput} />
			</StyledFilterInputArea>
		</StyledFilterBar>
	);
};

export default FilterBar;
