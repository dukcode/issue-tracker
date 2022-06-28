import styled, { css } from "styled-components";

interface IStyledButtonName {
	buttonColor: string;
}

const StyledCell = styled.div`
	height: 100px;
	display: flex;
	align-items: center;
	padding-left: 32px;
	position: relative;

	> :last-child {
		margin-left: auto;
		margin-right: 32px;
	}
`;

const StyledCellDescription = styled.div`
	${({ theme: { colors, fonts } }) => css`
		color: ${colors.label};
		${fonts.textSmall};
	`};
	position: absolute;
	left: 240px;
`;

const StyledButtons = styled.div`
	display: flex;
	gap: 30px;
`;

const StyledButton = styled.div`
	display: flex;
	gap: 5px;
`;

const StyledButtonName = styled.div<IStyledButtonName>`
	${({ theme: { colors, fonts }, buttonColor }) => css`
		${fonts.linkXSmall};
		${buttonColor === "label" ? `color: ${colors.label} ` : `color: ${colors.red} `};
	`};
`;

export { StyledCell, StyledCellDescription, StyledButtons, StyledButton, StyledButtonName };
