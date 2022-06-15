import styled, { css } from "styled-components";

const IssueContainer = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			background: ${colors.line};
			width: ${width.issueContainer};
			height: ${height.issueContainer};
			border-radius: 16px;
		`}
`;

const IssueHeader = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			background: ${colors.background};
			width: ${width.issueHeader};
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
			width: ${width.issueCategory};
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

const IssueCell = styled.div`
	${({ theme: { colors } }) =>
		css`
			background: ${colors.offWhite};
			border-left: 1px solid ${colors.line};
			border-right: 1px solid ${colors.line};
			border-bottom: 1px solid ${colors.line};
		`}
	width: 1280px;
	height: 100px;
	display: flex;
	justify-content: space-between;
`;

const IssueCellLeft = styled.div`
	display: flex;
	margin-left: 20px;
`;

const IssueInfo = styled.div`
	margin-left: 20px;
`;

const IssueInfoTop = styled.div`
	display: flex;
	height: 32px;
`;

const IssueInfoBottom = styled.div`
	${({ theme: { colors } }) =>
		css`
			color: ${colors.label};
		`}
	font-weight: 400;
	font-size: 16px;
	line-height: 28px;
	display: flex;
	height: 28px;
	margin-top: 30px;
`;

const IssueCellRight = styled.div``;

const AuthorImg = styled.div`
	margin-right: 50px;
`;

const Title = styled.div`
	${({ theme: { colors } }) =>
		css`
			color: ${colors.titleActive};
		`}
	width: 100%;
	height: 32px;
	display: flex;
	align-items: center;
	margin-top: 16px;
	gap: 8px;
	font-weight: 700;
	font-size: 18px;
	line-height: 32px;

	svg {
		margin-top: -3px;
	}
`;

const IssueNumber = styled.div`
	margin-right: 20px;
`;
const AuthorTimeStamp = styled.div`
	margin-right: 20px;
`;

const MileStone = styled.div`
	align-items: center;
	display: flex;
	gap: 5px;

	svg {
		margin-top: -3px;
	}
`;

const StyledCheckbox = styled.div`
	margin-top: 10px;
`;

export {
	IssueContainer,
	IssueHeader,
	IssueHeaderLeft,
	IssueCategory,
	OpenedIssue,
	ClosedIssue,
	IssueCell,
	IssueCellLeft,
	IssueInfo,
	IssueInfoTop,
	IssueInfoBottom,
	IssueCellRight,
	AuthorImg,
	Title,
	IssueNumber,
	AuthorTimeStamp,
	MileStone,
	StyledCheckbox,
};
