import styled, { css } from "styled-components";

type TStyledIssueOption = {
	isClosed: boolean;
};

const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
`;

const IssueContainer = styled.div`
	${({ theme: { colors, width } }) =>
		css`
			margin-top: 20px;
			background-color: ${colors.offWhite};
			border: solid 1px ${colors.line};
			${width.main};
			border-radius: 16px;
		`}
`;

const IssueHeader = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			background: ${colors.background};
			${width.main};
			height: ${height.issueHeader};
			border-bottom: 1px solid ${colors.line};
			border-radius: 16px 16px 0px 0px;
		`}
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const IssueCategory = styled.div`
	${({ theme: { height } }) =>
		css`
			height: ${height.issueHeader};
		`}
	display: flex;
	align-items: center;
	margin-left: 20px;
	gap: 25px;
`;

const OpenedIssue = styled.button<TStyledIssueOption>`
	${({ theme: { colors }, isClosed }) =>
		css`
			color: ${colors.titleActive};
			${isClosed &&
			css`
				color: ${colors.label};
			`}
		`}
	width: 110px;
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

const ClosedIssue = styled.button<TStyledIssueOption>`
	${({ theme: { colors }, isClosed }) =>
		css`
			color: ${colors.titleActive};
			${!isClosed &&
			css`
				color: ${colors.label};
			`}
		`}
	width: 110px;
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

export {
	StyledCheckbox,
	IssueContainer,
	IssueHeader,
	IssueHeaderLeft,
	IssueCategory,
	OpenedIssue,
	ClosedIssue,
};
