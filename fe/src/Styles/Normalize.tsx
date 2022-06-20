import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { fonts, width, colors } }) => css`
		.App {
			${fonts.main};
			${width.base};
			box-sizing: border-box;
			width: 100vw;
			height: 100vh;
		}

		body {
			background-color: ${colors.background};
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
