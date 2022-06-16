import styled, { css } from "styled-components";

const StyledIssueCell = styled.div`
	${({ theme: { colors, width } }) =>
		css`
			background: ${colors.offWhite};
			border-left: 1px solid ${colors.line};
			border-right: 1px solid ${colors.line};
			border-bottom: 1px solid ${colors.line};
			${width.main};
		`}
	height: 100px;
	display: flex;
	justify-content: space-between;

	:last-child {
		border-radius: 0px 0px 16px 16px;
	}
`;

const IssueCellLeft = styled.div`
	display: flex;
	margin: 20px;
`;

const IssueInfo = styled.div`
	margin-left: 20px;
`;

const IssueInfoTop = styled.div`
	display: flex;
`;

const IssueInfoBottom = styled.div`
	${({ theme: { colors, fonts } }) =>
		css`
			${fonts.testSmall};
			color: ${colors.label};
		`}
	font-weight: 400;
	font-size: 16px;
	line-height: 28px;
	display: flex;
	margin-top: 6px;
`;

const IssueCellRight = styled.div`
	display: flex;
	align-items: center;
	margin: 40px;
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
	gap: 8px;
	font-weight: 700;
	font-size: 18px;
	line-height: 32px;

	svg {
		margin-top: -3px;
	}
`;

const IssueNumber = styled.div`
	margin-right: 14px;
`;

const AuthorTimeStamp = styled.div`
	margin-right: 14px;
`;

const MileStone = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	svg {
		margin-top: -3px;
	}
`;

const StyledCheckbox = styled.div`
	margin-top: -5px;
`;

export {
	StyledIssueCell,
	IssueCellLeft,
	IssueInfo,
	IssueInfoTop,
	IssueInfoBottom,
	IssueCellRight,
	Title,
	IssueNumber,
	AuthorTimeStamp,
	MileStone,
	StyledCheckbox,
};
