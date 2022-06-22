import styled, { css } from "styled-components";

export const StyledIssueListContentHeader = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			background: ${colors.background};
			${width.main};
			height: ${height.issueHeader};
			border-bottom: 1px solid ${colors.line};
			border-radius: 16px 16px 0px 0px;
		`}

	padding: 15px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledIssueOptions = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;
