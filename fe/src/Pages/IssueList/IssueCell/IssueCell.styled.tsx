import styled, { css } from "styled-components";

export const StyledIssueCell = styled.div`
	${({ theme: { colors } }) => css`
		height: 100px;
		display: flex;
		justify-content: space-between;
		:hover {
			background-color: ${colors.background};
		}
	`}
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
			cursor: pointer;
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

			:hover {
				color: ${colors.darkBlue};
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
