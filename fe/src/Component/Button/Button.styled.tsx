import styled, { css } from "styled-components";

type TStyledButtonProps = {
	size?: "small" | "medium" | "large";
};

const StyledButton = styled.button<TStyledButtonProps>`
	${({ theme: { colors, fonts }, size }) => css`
		${size === "small" &&
		css`
			${fonts.textSmall};
			height: 40px;
			width: 120px;
			border-radius: 10px;
		`}

		${size === "medium" &&
		css`
			${fonts.linkMedium};
			height: 55px;
			width: 220px;
			border-radius: 20px;
		`}

		cursor: pointer;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		gap: 5px;
		color: ${colors.offWhite};
		background-color: ${colors.blue};

		:hover {
			opacity: 0.8;
		}

		:active {
			opacity: 1;
		}

		:disabled {
			opacity: 0.5;
		}

		svg {
			margin-top: -2px;
		}
	`}
`;

export default StyledButton;
export type { TStyledButtonProps };
