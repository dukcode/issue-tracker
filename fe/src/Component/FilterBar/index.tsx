import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import atoms from "Atoms";
import Popup, { TPopupContentProps } from "Component/Popup";
import icons from "Util/Icons";
import { StyledFilterBar, StyledFilterSelector, StyledFilterInputArea } from "./FilterBar.styled";

const FILTER = "필터";
const { KeyboardArrowDown, KeyboardArrowUp, Search } = icons;
const popupTitle = "이슈 필터";
const popupContents: TPopupContentProps[] = [
	{ id: 1, name: "열린 이슈" },
	{ id: 2, name: "내가 작성한 이슈" },
	{ id: 3, name: "나에게 할당된 이슈" },
	{ id: 4, name: "내가 댓글을 남긴 이슈" },
	{ id: 5, name: "닫힌 이슈" },
];

const FilterBar = () => {
	const [isDown, setIsDown] = useState(false);
	const [filterValue, setFilterValue] = useRecoilState(atoms.issueList.filterValue);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFilterValue(value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const query = { q: filterValue };
		const params = new URLSearchParams(query);
		navigate(`/?${params.toString()}`);
	};

	useEffect(() => {
		const q = searchParams.get("q");
		if (q) setFilterValue(q);
	}, [searchParams]);

	return (
		<StyledFilterBar>
			<Popup isLeft={true} title={popupTitle} contents={popupContents} setOption={setIsDown}>
				<StyledFilterSelector>
					<div>{FILTER}</div>
					{isDown ? (
						<KeyboardArrowDown colorset="label" size={20} />
					) : (
						<KeyboardArrowUp colorset="label" size={20} />
					)}
				</StyledFilterSelector>
			</Popup>
			<StyledFilterInputArea onSubmit={handleSubmit}>
				<Search colorset="placeholder" size={20} />
				<input value={filterValue} onChange={handleInput} placeholder="SEARCH ALL ISSUES" />
			</StyledFilterInputArea>
		</StyledFilterBar>
	);
};

export default FilterBar;
