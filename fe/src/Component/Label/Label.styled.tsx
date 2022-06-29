import styled, { css } from "styled-components";

type TStyledLabelProps = {
	color: string;
};

export const StyledLabel = styled.div<TStyledLabelProps>`
	${({ theme: { fonts, getTextColor }, color }) => css`
		${fonts.linkXSmall};
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: ${color};
		color: ${getTextColor(color)};
		border-radius: 30px;
		padding: 4px 10px;
	`}
`;

export const StyledLabelChild = styled.div``;
