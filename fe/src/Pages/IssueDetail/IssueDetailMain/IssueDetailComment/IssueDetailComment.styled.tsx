import styled, { css } from "styled-components";

export const StyledIssueDetailCommentWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

export const StyledIssueDetailComment = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.line};
		border-radius: 16px;
		width: 100%;
		overflow: hidden;
	`}
`;

export const StyledIssueDetailCommentTitle = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		padding: 15px 25px;
		color: ${colors.titleActive};
		border-bottom: solid 1px ${colors.line};
		background-color: ${colors.background};
	`}
`;

export const StyledIssueDetailCommentDesc = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		padding: 15px 25px;
		color: ${colors.titleActive};
		background-color: ${colors.offWhite};
	`}
`;
