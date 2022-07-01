import styled, { css } from "styled-components";

export const StyledIssueDetailMain = styled.div`
	${({ theme: { colors } }) => css`
		border-top: solid 1px ${colors.line};
		border-bottom: solid 1px ${colors.line};
		padding: 30px 0;
		display: flex;
		justify-content: space-between;
		gap: 20px;

		> :nth-child(1) {
			flex: 8;
		}
		> :nth-child(2) {
			flex: 3;
		}
	`}
`;

export const StyledIssueDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const IssueDetailOptionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const TextButtonWrapper = styled.div`
	margin-right: 5px;
	float: right;
	display: flex;
	justify-content: right;
`;
