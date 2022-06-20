import styled, { css } from "styled-components";

export const StyledIssueCell = styled.div`
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

export const IssueCellLeft = styled.div`
	display: flex;
	margin: 20px;
`;

export const IssueInfo = styled.div`
	margin-left: 20px;
`;

export const IssueInfoTop = styled.div`
	display: flex;
`;

export const IssueInfoBottom = styled.div`
	${({ theme: { colors, fonts } }) =>
		css`
			${fonts.textSmall};
			color: ${colors.label};
		`}
	font-weight: 400;
	font-size: 16px;
	line-height: 28px;
	display: flex;
	margin-top: 6px;
`;

export const IssueCellRight = styled.div`
	display: flex;
	align-items: center;
	margin: 40px;
`;

export const Title = styled.div`
	${({ theme: { colors } }) =>
		css`
			color: ${colors.titleActive};
			height: 32px;
			display: flex;
			align-items: center;
			gap: 8px;
			font-weight: 700;
			font-size: 18px;
			line-height: 32px;
			margin-right: 8px;

			svg {
				margin-top: -3px;
			}
		`}
`;

export const IssueNumber = styled.div`
	margin-right: 14px;
`;

export const AuthorTimeStamp = styled.div`
	margin-right: 14px;
`;

export const MileStone = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	svg {
		margin-top: -3px;
	}
`;

export const StyledCheckbox = styled.div`
	margin-top: -5px;
`;

export const StyledLabelsWrapper = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
`;
