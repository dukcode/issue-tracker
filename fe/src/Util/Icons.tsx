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
	IndeterminateCheckBox,
	RemoveCircleOutline,
	Edit,
	DeleteOutline,
	Loop,
	DriveFileRenameOutline,
	InfoOutlined,
	SentimentSatisfiedAlt,
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
	IndeterminateCheckBox,
	RemoveCircleOutline,
	Edit,
	DeleteOutline,
	Loop,
	DriveFileRenameOutline,
	InfoOutlined,
	SentimentSatisfiedAlt,
};

type TResultButton = {
	colorset: TKeysColors;
	size: number;
};
type TKeysIcons = keyof typeof muiIcons;
type TResultIcon = StyledComponent<SvgIconComponent, DefaultTheme, TResultButton>;

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

const icons: { [key in string]: TResultIcon } = {};

muiKeys.forEach((key) => {
	icons[key] = getIcon(muiIcons[key]);
});

export default icons;
export type { TKeysIcons, TResultButton, TResultIcon };
