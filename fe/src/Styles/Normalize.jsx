import { createGlobalStyle, css } from "styled-components";

const Normalize = createGlobalStyle`
	${({ theme: { colors, fontMain } }) => css`
		#modal {
			${fontMain};
			color: ${colors.black};
		}
		.App {
			${fontMain};
			color: ${colors.black};
			width: 100vw;
			height: 100vh;
		}
	`}
`;

export default Normalize;
