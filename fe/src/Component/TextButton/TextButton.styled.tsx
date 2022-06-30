import styled, { css } from "styled-components";
import { TKeysColors, TKeysFonts } from "Styles/theme";

type TStyledTextButton = {
	color: TKeysColors;
	size: TKeysFonts;
	isHover: boolean;
};

const StyledTextButton = styled.div<TStyledTextButton>`
	${({ theme: { colors, fonts }, color, size, isHover }) => css`
		${fonts[size]};
		cursor: pointer;
		color: ${colors[color]};
		display: flex;
		align-items: center;
		gap: 3px;

		svg {
			margin-top: -3px;
		}

		${isHover &&
		css`
			opacity: 0.6;
			:hover {
				opacity: 0.8;
			}

			:active {
				opacity: 1;
			}

			:disabled {
				opacity: 0.5;
			}
		`}
	`}
`;

export default StyledTextButton;
