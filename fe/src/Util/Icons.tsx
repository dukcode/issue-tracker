import styled, { css, DefaultTheme, StyledComponent } from "styled-components";

import {
	SvgIconComponent,
	GitHub,
	ErrorOutline,
	Inventory,
	KeyboardArrowDown,
	KeyboardArrowUp,
	EmojiFlags,
	Search,
	BookmarksOutlined,
	DirectionsOutlined,
	AddBox,
	FilePresent,
} from "@mui/icons-material";
import { TKeysColors } from "Styles/theme";

const muiIcons = {
	GitHub,
	ErrorOutline,
	Inventory,
	KeyboardArrowDown,
	KeyboardArrowUp,
	EmojiFlags,
	Search,
	BookmarksOutlined,
	DirectionsOutlined,
	AddBox,
	FilePresent,
};

type TResultButton = {
	colorset: TKeysColors;
	size: number;
};
type TKeysIcons = keyof typeof muiIcons;

const muiKeys = Object.keys(muiIcons) as TKeysIcons[];

const getIcon = (buttonType: SvgIconComponent) => {
	const resultButton = styled(buttonType)<TResultButton>`
		&& {
			${({ theme: { colors }, colorset, size }) => css`
				color: ${colors[colorset]};
				width: ${size}px;
				height: ${size}px;
				cursor: pointer;
			`}
		}
	`;
	return resultButton;
};

const icons: { [key in string]: StyledComponent<SvgIconComponent, DefaultTheme, TResultButton> } =
	{};

muiKeys.forEach((key) => {
	icons[key] = getIcon(muiIcons[key]);
});

export default icons;
export type { TKeysIcons, TResultButton };
