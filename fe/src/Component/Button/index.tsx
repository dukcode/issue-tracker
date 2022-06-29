import React from "react";
import icons, { TKeysIcons } from "Util/Icons";
import StyledButton from "./Button.styled";

type TButtonProps = {
	content: string;
	icon?: TKeysIcons;
	size?: "small" | "medium" | "large";
	clickHandler?: (event: React.MouseEvent) => void;
	disableOption?: boolean;
};

const defaultButtonProps = {
	icon: undefined,
	size: "small",
	clickHandler: undefined,
	disableOption: undefined,
};

const Button = ({ content, icon, size, clickHandler, disableOption }: TButtonProps) => {
	const Icon = icon ? icons[icon] : null;
	const handleButtonClick = (event: React.MouseEvent) => {
		if (clickHandler) clickHandler(event);
	};

	return (
		<StyledButton size={size} onClick={handleButtonClick} disabled={disableOption}>
			{Icon && <Icon colorset="offWhite" size={20} />}
			{content}
		</StyledButton>
	);
};

Button.defaultProps = defaultButtonProps;

export default Button;
