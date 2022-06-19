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

	> :nth-child(1) {
		flex: 7;
	}
	> :nth-child(2) {
		flex: 3;
	}

	${({ theme: { colors } }) => css`
		border-bottom: solid 1px ${colors.line};
	`}
`;
