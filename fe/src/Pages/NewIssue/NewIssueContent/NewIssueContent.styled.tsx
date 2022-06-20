import styled, { css } from "styled-components";

export const StyledNewIssueContentWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

export const StyledNewIssueContent = styled.div`
	width: 100%;
`;

export const StyledNewIssueTitle = styled.div`
	${({ theme: { colors, fonts } }) => css`
		background-color: ${colors.inputBackground};
		border-radius: 15px;
		padding: 10px 20px;
		margin-bottom: 20px;

		input {
			${fonts.textSmall};
			background-color: ${colors.inputBackground};
			color: ${colors.placeholder};
			width: 100%;
			outline: none;
			border: none;
		}
	`}
`;

export const StyledNewIssueDesc = styled.div`
	${({ theme: { colors, fonts } }) => css`
		background-color: ${colors.inputBackground};
		border-radius: 15px;
		height: 300px;
		display: flex;
		flex-direction: column;

		textarea {
			${fonts.textSmall};
			background-color: ${colors.inputBackground};
			color: ${colors.placeholder};
			box-sizing: border-box;
			margin: 10px 20px;
			flex-grow: 1;
			outline: none;
			border: none;
		}

		div {
			${fonts.textXSamll};
			color: ${colors.label};
			cursor: pointer;
			display: flex;
			flex-grow: 0.05;
			align-items: center;
			gap: 5px;
			border-top: dashed 2px ${colors.line};
			padding: 10px 20px;
		}
	`}
`;
