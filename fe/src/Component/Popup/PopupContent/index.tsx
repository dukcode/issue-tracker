import React, { useState, ChangeEvent } from "react";
import { RecoilState, useRecoilState } from "recoil";

import { Checkbox } from "@mui/material";
import UserImg from "Component/UserImg";
import { StyledPopupContent, StyledPopupName } from "./PopupContent.styled";

type TContentProps = {
	name: string;
	image?: string;
	imageType?: "image" | "color";
	isCheckBox?: boolean;
	clickEventHandler?: (event: React.MouseEvent) => void;
	disabledOption?: boolean;
	atom?: RecoilState<any[]>;
};

const defaultContentProps = {
	image: undefined,
	imageType: undefined,
	isCheckBox: true,
	clickEventHandler: undefined,
	disabledOption: false,
	atom: undefined,
};

const PopupContent = ({
	name,
	image,
	imageType,
	isCheckBox,
	clickEventHandler,
	disabledOption,
	atom,
}: TContentProps) => {
	const [checked, setChecked] = useState(false);
	const [atomState, setAtomState] = atom ? useRecoilState(atom) : [null, null];
	const contentTag = clickEventHandler ? "button" : "div";

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const handleClickContent = (event: React.MouseEvent) => {
		if (clickEventHandler) clickEventHandler(event);
		if (atomState) {
			const newAtomState = atomState.includes(name)
				? atomState.filter((value) => value !== name)
				: [...atomState, name];
			setAtomState(newAtomState);
		}
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
