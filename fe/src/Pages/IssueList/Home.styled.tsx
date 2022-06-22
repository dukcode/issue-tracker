import styled, { css } from "styled-components";

type TStyledIssueOption = {
	isClosed: boolean;
};

const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
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
	${({ theme: { colors, fonts }, isClosed }) =>
		css`
			color: ${colors.titleActive};

			${fonts.linkMedium};
			${isClosed &&
			css`
				${fonts.textMedium};
				color: ${colors.placeholder};
				:hover {
					color: ${colors.body};
					svg {
						color: ${colors.body};
					}
				}
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
		`}
`;

const ClosedIssue = styled.button<TStyledIssueOption>`
	${({ theme: { colors, fonts }, isClosed }) =>
		css`
			color: ${colors.titleActive};

			${fonts.linkMedium};
			${!isClosed &&
			css`
				${fonts.textMedium};
				color: ${colors.placeholder};
				:hover {
					color: ${colors.body};
					svg {
						color: ${colors.body};
					}
				}
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
		`}
`;

export { StyledCheckbox, IssueCategory, OpenedIssue, ClosedIssue };
