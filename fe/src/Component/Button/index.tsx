import React from "react";
import icons, { TKeysIcons } from "Util/Icons";
import StyledAddIssue from "./Button.styled";

type TButtonProps = {
	content: string;
	icon?: TKeysIcons;
	size?: "small" | "medium" | "large";
	clickHandler?: (event: React.MouseEvent) => void;
};

const defaultButtonProps = { icon: undefined, size: "small", clickHandler: undefined };

const Button = ({ content, icon, size, clickHandler }: TButtonProps) => {
	const Icon = icon ? icons[icon] : null;
	const handleButtonClick = (event: React.MouseEvent) => {
		if (clickHandler) clickHandler(event);
	};

	return (
		<StyledAddIssue size={size} onClick={handleButtonClick}>
			{Icon && <Icon colorset="offWhite" size={20} />}
			{content}
		</StyledAddIssue>
	);
};

Button.defaultProps = defaultButtonProps;

export default Button;
