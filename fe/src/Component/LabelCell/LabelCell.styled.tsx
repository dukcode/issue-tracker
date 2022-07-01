import styled, { css } from "styled-components";

interface IStyledButtonName {
	buttonColor: string;
}

export const StyledCell = styled.div`
	padding: 30px;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-between;
`;

export const StyledCellDescription = styled.div`
	${({ theme: { colors, fonts } }) => css`
		color: ${colors.label};
		${fonts.textSmall};
	`};
	position: absolute;
	left: 240px;
`;

export const StyledButtons = styled.div`
	display: flex;
	justify-content: left;
	gap: 15px;
`;

export const StyledButton = styled.div`
	display: flex;
	gap: 5px;
`;

export const StyledButtonName = styled.div<IStyledButtonName>`
	${({ theme: { colors, fonts }, buttonColor }) => css`
		${fonts.linkXSmall};
		${buttonColor === "label" ? `color: ${colors.label} ` : `color: ${colors.red} `};
	`};
`;

export const StyledLabelWrapper = styled.div`
	display: flex;
	align-items: center;

	> :nth-child(1) {
		margin-right: 150px;
	}
`;
