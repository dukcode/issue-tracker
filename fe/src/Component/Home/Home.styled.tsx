import styled, { css } from "styled-components";

const IssueContainer = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			margin-top: 20px;
			background: ${colors.line};
			${width.main};
			height: ${height.issueContainer};
			border-radius: 16px;
		`}
`;

const IssueHeader = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			background: ${colors.background};
			${width.main};
			height: ${height.issueHeader};
			border: 1px solid ${colors.line};
			border-radius: 16px 16px 0px 0px;
		`}
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const IssueCategory = styled.div`
	${({ theme: { width, height } }) =>
		css`
			${width.main};
			height: ${height.issueHeader};
		`}
	display: flex;
	align-items: center;
	margin-left: 20px;
	gap: 25px;
`;

const OpenedIssue = styled.button`
	${({ theme: { colors } }) =>
		css`
			color: ${colors.titleActive};
		`}
	width: 85px;
	height: 28px;
	font-weight: 700;
	font-size: 16px;
	line-height: 28px;
	display: flex;
	align-items: center;
	gap: 3px;

	svg {
		margin-top: -3px;
	}
`;

const ClosedIssue = styled.button`
	${({ theme: { colors } }) =>
		css`
			color: ${colors.titleActive};
		`}
	width: 85px;
	height: 28px;
	font-weight: 700;
	font-size: 16px;
	line-height: 28px;
	display: flex;
	align-items: center;
	gap: 3px;

	svg {
		margin-top: -3px;
	}
`;

const IssueHeaderLeft = styled.div`
	display: flex;
	margin-left: 20px;
`;

export { IssueContainer, IssueHeader, IssueHeaderLeft, IssueCategory, OpenedIssue, ClosedIssue };
