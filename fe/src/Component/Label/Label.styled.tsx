import styled, { css } from "styled-components";

type TStyledLabelProps = {
	labelColor: string;
	textColor: string;
};

export const StyledLabel = styled.div<TStyledLabelProps>`
	${({ theme: { fonts }, labelColor, textColor }) => css`
		${fonts.linkXSmall};
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: ${labelColor};
		color: ${textColor};
		border-radius: 30px;
		padding: 4px 10px;
	`}
`;

export const StyledLabelChild = styled.div``;
