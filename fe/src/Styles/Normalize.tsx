import { createGlobalStyle, css } from "styled-components";
import type { ThemeType } from "./theme";

const Normalize = createGlobalStyle<{ theme: ThemeType }>`
	${({ theme: { fonts, width, colors } }) => css`
		.App {
			${fonts.main};
			${width.base};
			background-color: ${colors.background};
			box-sizing: border-box;
			width: 100vw;
			height: 100vh;
		}

		div {
			box-sizing: border-box;
		}

		button {
			${fonts.main};
			cursor: pointer;
		}
	`}
`;

export default Normalize;
