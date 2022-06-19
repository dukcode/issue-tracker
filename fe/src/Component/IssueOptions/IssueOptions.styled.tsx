import styled, { css } from "styled-components";

export const StyledNewIssueOptions = styled.div`
	${({ theme: { colors } }) => css`
		height: fit-content;
		background-color: ${colors.offWhite};
		border: solid 1px ${colors.line};
		border-radius: 10px;
		color: ${colors.label};
	`}
`;

export const StyledNewIssueOption = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		cursor: pointer;
		display: flex;
		height: 100px;
		border-bottom: solid 1px ${colors.line};
		padding: 30px;
		align-items: center;
		justify-content: space-between;

		:last-child {
			border-bottom: none;
		}
	`}
`;
