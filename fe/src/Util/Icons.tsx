import styled, { css } from "styled-components";

import {
	SvgIconComponent,
	GitHub,
	ErrorOutline,
	Inventory,
	KeyboardArrowDown,
	EmojiFlags,
} from "@mui/icons-material";

type TResultButton = {
	colorset: string;
	size: number;
	hover?: string;
};

type TIcons = {
	[key in string]: any;
};

const muiIcons: TIcons = { GitHub, ErrorOutline, Inventory, KeyboardArrowDown, EmojiFlags };
const muiKeys = Object.keys(muiIcons);

const getIcon = (buttonType: SvgIconComponent) => {
	const resultButton = styled(buttonType)<TResultButton>`
		&& {
			${({ theme: { colors }, colorset, size, hover }) => css`
				color: ${colors[colorset]};
				width: ${size}px;
				height: ${size}px;
				cursor: pointer;
				${hover &&
				css`
					:hover {
						color: ${colors[`${colorset}dark`]};
					}
				`}
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
