import React from "react";
import icons, { TKeysIcons } from "Util/Icons";
import StyledButton from "./Button.styled";

type TButtonProps = {
	content: string;
	icon?: TKeysIcons;
	size?: "small" | "medium" | "large";
	clickHandler?: (event: React.MouseEvent) => void;
	disableOption?: boolean;
<<<<<<< HEAD
=======
	reverse?: boolean;
>>>>>>> 111e5dc (refactor: Button 컴포넌트 수정)
};

const defaultButtonProps = {
	icon: undefined,
	size: "small",
	clickHandler: undefined,
	disableOption: undefined,
<<<<<<< HEAD
};

const Button = ({ content, icon, size, clickHandler, disableOption }: TButtonProps) => {
=======
	reverse: false,
};

const Button = ({ content, icon, size, clickHandler, disableOption, reverse }: TButtonProps) => {
>>>>>>> 111e5dc (refactor: Button 컴포넌트 수정)
	const Icon = icon ? icons[icon] : null;
	const handleButtonClick = (event: React.MouseEvent) => {
		if (clickHandler) clickHandler(event);
	};

	return (
<<<<<<< HEAD
		<StyledButton size={size} onClick={handleButtonClick} disabled={disableOption}>
			{Icon && <Icon colorset="offWhite" size={20} />}
=======
		<StyledButton
			size={size}
			onClick={handleButtonClick}
			disabled={disableOption}
			reverse={reverse}
		>
			{Icon && <Icon colorset={!reverse ? "offWhite" : "blue"} size={20} />}
>>>>>>> 111e5dc (refactor: Button 컴포넌트 수정)
			{content}
		</StyledButton>
	);
};

Button.defaultProps = defaultButtonProps;

export default Button;
