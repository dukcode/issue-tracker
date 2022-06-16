import styled, { css } from "styled-components";

export const StyledNewIssue = styled.div`
	${({ theme: { width } }) => css`
		${width.main};
		margin-top: 30px;
	`}
`;

export const StyledNewIssueHeader = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.title};
		padding-bottom: 30px;
		border-bottom: solid 1px ${colors.line};
	`}
`;

export const StyledNewIssueMain = styled.div`
	padding-top: 30px;
	padding-bottom: 30px;
	display: flex;
	justify-content: space-between;
	gap: 20px;

	${({ theme: { colors } }) => css`
		border-bottom: solid 1px ${colors.line};
	`}
`;

export const StyledNewIssueContentWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

export const StyledNewIssueContent = styled.div`
	width: 750px;
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
			width: 95%;
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
		width: 300px;
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
