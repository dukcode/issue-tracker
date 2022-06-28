import React, { useState, ChangeEvent } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { TNewIssueOption } from "Atoms";

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
	atom?: RecoilState<TNewIssueOption[]>;
	option?: { countOpen: number; countClosed: number };
};

const defaultContentProps = {
	image: undefined,
	imageType: undefined,
	isCheckBox: true,
	clickEventHandler: undefined,
	disabledOption: false,
	atom: undefined,
	option: undefined,
};

const PopupContent = ({
	id,
	name,
	image,
	imageType,
	isCheckBox,
	clickEventHandler,
	disabledOption,
	atom,
	option,
}: TContentProps) => {
	const [checked, setChecked] = useState(false);
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

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const handleClickContent = (event: React.MouseEvent) => {
		if (clickEventHandler) clickEventHandler(event);
		setNewAtomState();
		setChecked(!checked);
	};

	return (
		<StyledPopupContent
			checked={checked}
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
				<Checkbox checked={checked} onChange={handleChange} size="small" color="default" />
			)}
		</StyledPopupContent>
	);
};

PopupContent.defaultProps = defaultContentProps;

export default PopupContent;
export type { TContentProps };
