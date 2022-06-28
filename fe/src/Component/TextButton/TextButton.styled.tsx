import styled, { css } from "styled-components";

const StyledTextButton = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.linkSmall};
		color: ${colors.label};
		display: flex;
		align-items: center;
		gap: 3px;

		svg {
			margin-top: -3px;
		}

		:hover {
			color: ${colors.body};
			svg {
				color: ${colors.body};
			}
		}

		:active {
			color: ${colors.titleActive};
			svg {
				color: ${colors.titleActive};
			}
		}
	`}
`;

export default StyledTextButton;
