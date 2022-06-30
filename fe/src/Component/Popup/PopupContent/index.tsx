import React, { useState, ChangeEvent } from "react";
import { RecoilState, useRecoilState } from "recoil";
import atoms, { TIssueOption } from "Atoms";
import { useNavigate } from "react-router-dom";

import { Checkbox } from "@mui/material";
import UserImg from "Component/UserImg";
import { StyledPopupContent, StyledPopupName } from "./PopupContent.styled";

type TContentProps = {
	name: string;
	id: number;
	image?: string;
	imageType?: "image" | "color";
	isCheckBox?: boolean;
	clickEventHandler?: (event: React.MouseEvent) => void;
	disabledOption?: boolean;
	atom?: RecoilState<TIssueOption[]>;
	filterName?: string;
	option?: { countOpen: number; countClosed: number };
};

const PopupContent = ({
	id,
	name,
	image = undefined,
	imageType = undefined,
	isCheckBox = true,
	clickEventHandler = undefined,
	disabledOption = false,
	filterName = undefined,
	atom = undefined,
	option = undefined,
}: TContentProps) => {
	const navigate = useNavigate();
	const [filterValue, setFilterValue] = filterName
		? useRecoilState(atoms.issueList.filterValue)
		: [null, null];
	const isWritten = filterName ? !!filterValue?.includes(name) : false;
	const [checked, setChecked] = useState(isWritten);
	const [atomState, setAtomState] = atom ? useRecoilState(atom) : [null, null];
	const contentTag = clickEventHandler ? "button" : "div";

	const setNewAtomState = () => {
		if (!atomState) return;
		const filteredAtomState = atomState.filter((value) => value.name === name);
		const newAtomState = filteredAtomState.length
			? atomState.filter((value) => value.name !== name)
			: [...atomState, { id, name, image, imageType, option }];
		setAtomState(newAtomState);
	};

	const submitFilterValue = (newFilterValue: string) => {
		const query = { q: newFilterValue };
		const params = new URLSearchParams(query);
		navigate(`/?${params.toString()}`);
	};

	const setNewFilterValue = () => {
		if (!filterName || filterValue === null) return;

		const editedFilterName = `${filterName}:${name} `;
		const newFilterValue = filterValue.includes(editedFilterName)
			? filterValue.replace(editedFilterName, "")
			: `${filterValue}${editedFilterName}`;

		setFilterValue(newFilterValue);
		submitFilterValue(newFilterValue);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const handleClickContent = (event: React.MouseEvent) => {
		if (clickEventHandler) clickEventHandler(event);

		console.log("here");
		setNewAtomState();
		setNewFilterValue();
		setChecked(!checked);
	};

	console.log(checked);

	return (
		<StyledPopupContent
			checked={isWritten || checked}
			onClick={handleClickContent}
			as={contentTag}
			disabled={disabledOption}
		>
			<StyledPopupName>
				{imageType === "image" && <UserImg img={image} size="small" />}
				{imageType === "color" && <UserImg color={image} size="small" />}
				{name}
			</StyledPopupName>
			{isCheckBox && (
				<Checkbox
					checked={isWritten || checked}
					onChange={handleChange}
					size="small"
					color="default"
				/>
			)}
		</StyledPopupContent>
	);
};

export default PopupContent;
export type { TContentProps };
