import styled, { css } from "styled-components";

type TStyledWriterOptionProps = {
	isSameUser: boolean;
};

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
		display: flex;
		gap: 10px;
		color: ${colors.titleActive};
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

export const StyledEditedTime = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.label};
	`}
`;

export const StyledIssueDetailTop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px 25px;
	${({ theme: { colors } }) => css`
		border-bottom: solid 1px ${colors.line};
	`}
`;

export const StyledWriterOption = styled.div<TStyledWriterOptionProps>`
	${({ isSameUser }) => css`
		display: flex;
		width: fit-content;
		gap: 15px;
		align-items: center;

		${!isSameUser &&
		css`
			visibility: hidden;
			pointer-events: none;
		`}
	`}
`;

export const StyledWriter = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textXSmall};
		padding: 2px 10px;
		border: solid 1px ${colors.line};
		border-radius: 30px;
		color: ${colors.label};
		display: flex;
		align-items: center;
	`}
`;
