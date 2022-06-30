import React from "react";

import { TKeysColors } from "Styles/theme";
import icons, { TKeysIcons } from "Util/Icons";
import StyledTextButton from "./TextButton.styled";

const iconSizeData = {
	linkSmall: 20,
	textSmall: 20,
	linkXSmall: 15,
	textXSmall: 15,
};

type TTextButtonSize = keyof typeof iconSizeData;

type TTextButtonProps = {
	icon: TKeysIcons;
	content: string;
	handleClick?: (event: React.MouseEvent) => void;
	color?: TKeysColors;
	size?: TTextButtonSize;
	isHover?: boolean;
};

const TextButton = ({
	icon,
	content,
	handleClick = undefined,
	color = "titleActive",
	size = "textSmall",
	isHover = true,
}: TTextButtonProps) => {
	const Icon = icons[icon];
	const iconSize = iconSizeData[size];

	return (
		<StyledTextButton onClick={handleClick} color={color} size={size} isHover={isHover === true}>
			<Icon size={iconSize} colorset={color} />
			{content}
		</StyledTextButton>
	);
};

export default TextButton;
