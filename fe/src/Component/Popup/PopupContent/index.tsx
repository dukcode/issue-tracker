import { useState, ChangeEvent } from "react";
import { Checkbox } from "@mui/material";
import UserImg from "Component/UserImg";
import { StyledPopupContent, StyledPopupName } from "./PopupContent.styled";

type TContentProps = {
	name: string;
	image?: string;
	imageType?: "image" | "color";
};

const defaultContentProps = {
	image: undefined,
	imageType: undefined,
};

const PopupContent = ({ name, image, imageType }: TContentProps) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<StyledPopupContent checked={checked}>
			<StyledPopupName>
				{imageType === "image" && <UserImg img={image} size="small" />}
				{imageType === "color" && <UserImg color={image} size="small" />}
				{name}
			</StyledPopupName>
			<Checkbox checked={checked} onChange={handleChange} size="small" color="default" />
		</StyledPopupContent>
	);
};

PopupContent.defaultProps = defaultContentProps;

export default PopupContent;
export type { TContentProps };
