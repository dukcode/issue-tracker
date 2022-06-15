import styled, { css } from "styled-components";

const StyledNewIssue = styled.div`
	${({ theme: { width } }) => css`
		${width.main};
		margin-top: 30px;
	`}
`;

const StyledNewIssueHeader = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.title};
		padding-bottom: 30px;
		border-bottom: solid 1px ${colors.line};
	`}
`;

const StyledNewIssueMain = styled.div`
	padding-top: 30px;
	padding-bottom: 30px;
	display: flex;
	justify-content: space-between;

	${({ theme: { colors } }) => css`
		border-bottom: solid 1px ${colors.line};
	`}
`;

const StyledNewIssueContentWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

const StyledNewIssueContent = styled.div`
	width: 800px;
`;

const StyledNewIssueTitle = styled.div`
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

const StyledNewIssueDesc = styled.div`
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

const StyledNewIssueOptions = styled.div`
	width: 350px;
`;

export {
	StyledNewIssue,
	StyledNewIssueHeader,
	StyledNewIssueMain,
	StyledNewIssueContentWrapper,
	StyledNewIssueContent,
	StyledNewIssueTitle,
	StyledNewIssueDesc,
	StyledNewIssueOptions,
};
