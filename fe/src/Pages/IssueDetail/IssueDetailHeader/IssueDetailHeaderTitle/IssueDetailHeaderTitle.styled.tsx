import styled, { css } from "styled-components";

export const StyledIssueDetailHeaderTitle = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledTitleButtons = styled.div`
	display: flex;
	gap: 10px;
`;

export const StyledIssueDetailHeaderName = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.display};
		display: flex;
		align-items: center;
		gap: 15px;

		> :nth-child(1) {
			color: ${colors.titleActive};
		}

		> :nth-child(2) {
			color: ${colors.label};
		}
	`}
`;
