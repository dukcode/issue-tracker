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

const TextButton = ({ icon, content, handleClick, color, size, isHover }: TTextButtonProps) => {
	const Icon = icons[icon];
	const resultSize = size || "textSmall";
	const resultColor = color || "titleActive";
	const iconSize = iconSizeData[resultSize];

	return (
		<StyledTextButton
			onClick={handleClick}
			color={resultColor}
			size={resultSize}
			isHover={isHover === true}
		>
			<Icon size={iconSize} colorset={resultColor} />
			{content}
		</StyledTextButton>
	);
};

TextButton.defaultProps = {
	handleClick: undefined,
	color: undefined,
	size: "medium",
	isHover: true,
};

export default TextButton;
