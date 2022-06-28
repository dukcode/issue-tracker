import styled, { css } from "styled-components";

export const StyledIssueDetailHeaderInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StyledIssueDetailStatus = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textXSamll};
		color: ${colors.blue};
		background-color: ${colors.lightBlue};
		border: solid 1px ${colors.blue};
		border-radius: 30px;
		padding: 10px 16px;
		display: flex;
		align-items: center;
		gap: 3px;
	`}
`;
export const StyledIssueDetailDesc = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textMedium};
		color: ${colors.body};
	`}
`;
