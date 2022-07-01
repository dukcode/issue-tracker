import styled, { css } from "styled-components";
import { TKeysColors } from "Styles/theme";

export const StyledIssueDetailHeaderInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StyledIssueDetailStatus = styled.div<{ color: TKeysColors }>`
	${({ theme: { colors, fonts }, color }) => css`
		${fonts.textXSmall};
		color: ${colors[color]};
		background-color: ${colors[color === "blue" ? "lightBlue" : "lightPurple"]};
		border: solid 1px ${colors[color]};
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
