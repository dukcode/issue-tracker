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
		"font-weight": 400,
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
		"font-weight": 700,
		"font-size": "32px",
		"line-height": "48px",
	},
	textLarge: {
		"font-size": "24px",
		"line-height": "40px",
	},
	lineLarge: {
		"font-weight": 700,
		"font-size": "24px",
		"line-height": "40px",
	},
	textMedium: {
		"font-size": "18px",
		"line-height": "32px",
	},
	linkMedium: {
		"font-weight": 700,
		"font-size": "18px",
		"line-height": "32px",
	},
	textSmall: {
		"font-size": "16px",
		"line-height": "28px",
	},
	textXSamll: {
		"font-weight": 500,
		"font-size": "12px",
		"line-height": "20px",
	},
	linkXSmall: {
		"font-weight": 700,
		"font-size": "12px",
		"line-height": "20px",
	},
	logotypeLarge: {
		"font-style": "italic",
		"font-size": "56px",
		"line-height": "72px",
		"letter-spacing": "-0.04em",
	},
	logotypeRegular: {
		// "font-style": "italic",
		"font-weight": 500,
		"font-size": "32px",
		"line-height": "40px",
		"letter-spacing": "-0.04em",
	},
};

const width = {
	main: "1100px",
	issueContainer: "1280px",
	issueHeader: "1280px",
	issueCategory: "220px",
};

const height = {
	issueContainer: "266px",
	issueHeader: "64px",
};

const theme = {
	colors,
	fonts,
	width,
	height,
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
