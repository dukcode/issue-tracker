import { createGlobalStyle, css } from "styled-components";
import type { ThemeType } from "./theme";

const Normalize = createGlobalStyle<{ theme: ThemeType }>`
	${({ theme: { fonts, colors } }) => css`
		.App {
			${fonts.main};
			box-sizing: border-box;
			background-color: ${colors.greyScale.background};
			width: 100vw;
			height: 100vh;
		}

		button {
			${fonts.main};
			cursor: pointer;
		}
	`}
`;

export default Normalize;
