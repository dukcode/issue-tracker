import { createGlobalStyle, css } from "styled-components";
import type { ThemeType } from "./theme";

const Normalize = createGlobalStyle<{ theme: ThemeType }>`
	${({ theme: { fonts } }) => css`
		.App {
			${fonts.main};
			width: 100vw;
			height: 100vh;
		}
	`}
`;

export default Normalize;
