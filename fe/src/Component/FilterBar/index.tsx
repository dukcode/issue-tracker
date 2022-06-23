import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Popup, { TPopupContentProps } from "Component/Popup";
import icons from "Util/Icons";
import { StyledFilterBar, StyledFilterSelector, StyledFilterInputArea } from "./FilterBar.styled";

const FILTER = "필터";
const { KeyboardArrowDown, Search } = icons;
const defaultInputValue = "is:open";
const popupTitle = "이슈 필터";
const popupContents: TPopupContentProps[] = [
	{ id: 1, name: "열린 이슈", image: "#FFFFFF", imageType: "color" },
	{ id: 2, name: "내가 작성한 이슈" },
	{ id: 3, name: "나에게 할당된 이슈" },
	{ id: 4, name: "내가 댓글을 남긴 이슈" },
	{ id: 5, name: "닫힌 이슈" },
];

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
			<Popup isLeft={true} title={popupTitle} contents={popupContents}>
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
