import styled, { css } from "styled-components";

export const StyledIssueDetailMainWrapper = styled.div`
	${({ theme: { colors } }) => css`
		border-top: solid 1px ${colors.line};
		border-bottom: solid 1px ${colors.line};
		padding: 30px 0;
	`}
`;

export const StyledIssueDetailContent = styled.div``;
