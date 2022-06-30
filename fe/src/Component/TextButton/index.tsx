import React from "react";
import icons, { TKeysIcons } from "Util/Icons";
import StyledTextButton from "./TextButton.styled";

type TTextButtonProps = {
	icon: TKeysIcons;
	content: string;
	handleClick?: (event: React.MouseEvent) => void;
};

const TextButton = ({ icon, content, handleClick }: TTextButtonProps) => {
	const Icon = icons[icon];

	return (
		<StyledTextButton onClick={handleClick}>
			<Icon size={18} colorset="label" />
			{content}
		</StyledTextButton>
	);
};

TextButton.defaultProps = { handleClick: undefined };

export default TextButton;
