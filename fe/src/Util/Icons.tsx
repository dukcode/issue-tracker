import styled, { css } from "styled-components";

import {
	SvgIconComponent,
	GitHub,
	ErrorOutline,
	Inventory,
	KeyboardArrowDown,
	EmojiFlags,
	Search,
	BookmarksOutlined,
	DirectionsOutlined,
	AddBox,
	FilePresent,
} from "@mui/icons-material";
import { ColorsType } from "../Styles/theme";

type TResultButton = {
	colorset: keyof ColorsType;
	size: number;
};

type TIcons = {
	[key in string]: any;
};

const muiIcons: TIcons = {
	GitHub,
	ErrorOutline,
	Inventory,
	KeyboardArrowDown,
	EmojiFlags,
	Search,
	BookmarksOutlined,
	DirectionsOutlined,
	AddBox,
	FilePresent,
};

const muiKeys = Object.keys(muiIcons);

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

const icons: TIcons = {};

muiKeys.forEach((key) => {
	icons[key] = getIcon(muiIcons[key]);
});

export default icons;
