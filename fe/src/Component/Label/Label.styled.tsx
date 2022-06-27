import styled, { css } from "styled-components";

type TStyledLabelProps = {
	labelColor: string;
	textColor: string;
};

export const StyledLabel = styled.div<TStyledLabelProps>`
	${({ theme: { fonts, colors }, labelColor, textColor }) => css`
		${fonts.linkXSmall};
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: ${textColor === "LIGHT" ? colors.offWhite : colors.titleActive};
		background-color: ${labelColor};
		border-radius: 30px;
		padding: 4px 10px;
	`}
`;

export const StyledLabelChild = styled.div``;
