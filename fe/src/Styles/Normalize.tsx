import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { fonts, width, colors } }) => css`
		.App {
			${fonts.main};
			${width.base};
			box-sizing: border-box;
			width: 100vw;
			height: 100vh;

			@keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			@keyframes fadeout {
				from {
					opacity: 1;
				}
				to {
					opacity: 0;
				}
			}
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
