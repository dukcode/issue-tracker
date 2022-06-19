import styled, { css } from "styled-components";

type TStyledLabelProps = {
	color: string;
};

export const StyledLabel = styled.div<TStyledLabelProps>`
	${({ theme: { colors, fonts }, color }) => css`
		${fonts.textXSamll};
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: ${color};
		color: ${colors.offWhite};
		border-radius: 30px;
		padding: 4px 16px;
	`}
`;

export const StyledLabelChild = styled.div``;
