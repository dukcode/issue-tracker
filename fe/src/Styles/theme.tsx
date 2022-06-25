const colors = {
	offWhite: "#FEFEFE",
	background: "#F7F7FC",
	inputBackground: "#EFF0F6",
	line: "#D9DBE9",
	placeholder: "#A0A3BD",
	label: "#6E7191",
	body: "#4E4B66",
	titleActive: "#14142B",
	blue: "#007AFF",
	darkBlue: "#004DE3",
	lightBlue: "#C7EBFF",
	purple: "#0025E7",
	lightPurple: "#CCD4FF",
	darkPurple: "#020070",
	red: "#FF3B30",
	lightRed: "#FFD1CF",
	darkRed: "#C60B00",
	green: "#34C759",
	lightGreen: "#DDFFE6",
	darkGreen: "#00A028",
};

const fonts = {
	main: {
		"font-family": '"IBM Plex Sans KR", sans-serif',
		"font-style": "normal",
		"font-size": "18px",
		"line-height": "32px",
		"font-weight": "400",
		color: colors.titleActive,
	},
	title: {
		"font-size": "40px",
		"line-height": "60px",
	},
	display: {
		"font-size": "32px",
		"line-height": "48px",
	},
	displayBold: {
		"font-weight": "700",
		"font-size": "32px",
		"line-height": "48px",
	},
	textLarge: {
		"font-size": "24px",
		"line-height": "40px",
	},
	lineLarge: {
		"font-weight": "700",
		"font-size": "24px",
		"line-height": "40px",
	},
	textMedium: {
		"font-size": "18px",
		"line-height": "32px",
	},
	linkMedium: {
		"font-weight": "700",
		"font-size": "18px",
		"line-height": "32px",
	},
	textSmall: {
		"font-size": "16px",
		"line-height": "28px",
	},
	textXSamll: {
		"font-weight": "500",
		"font-size": "12px",
		"line-height": "20px",
	},
	linkXSmall: {
		"font-weight": "700",
		"font-size": "12px",
		"line-height": "20px",
	},
	logotypeLarge: {
		"font-size": "56px",
		"line-height": "72px",
		"letter-spacing": "-0.04em",
	},
	logotypeRegular: {
		"font-weight": "500",
		"font-size": "32px",
		"line-height": "40px",
		"letter-spacing": "-0.04em",
	},
};

const width = {
	issueContainer: "1280px",
	issueHeader: "1280px",
	issueCategory: "220px",
	large: "1200px",
	main: {
		"min-width": "1100px",
		"max-width": "1400px",
	},
	base: {
		"min-width": "1200px",
	},
};

const height = {
	issueContainer: "266px",
	issueHeader: "64px",
};

const getTextColor = (targetColor: string) => {
	const originColor = targetColor.substring(1);
	const rgb = parseInt(originColor, 16);
	const r = (rgb >> 16) & 0xff; // eslint-disable-line no-bitwise
	const g = (rgb >> 8) & 0xff; // eslint-disable-line no-bitwise
	const b = (rgb >> 0) & 0xff; // eslint-disable-line no-bitwise
	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luma > 127.5 ? "#000000" : "#ffffff";
};

const theme = {
	colors,
	fonts,
	width,
	height,
	getTextColor,
};

type TTheme = typeof theme;
type TKeysColors = keyof typeof colors;

export type { TTheme, TKeysColors };
export default theme;
