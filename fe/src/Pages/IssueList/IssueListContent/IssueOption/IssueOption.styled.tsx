import styled, { css } from "styled-components";

type TStyledIssueOption = {
	isSelected: boolean;
};

const StyledIssueOption = styled.button<TStyledIssueOption>`
	${({ theme: { colors, fonts }, isSelected }) =>
		css`
			color: ${colors.titleActive};

			${fonts.linkMedium};
			${isSelected &&
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

			width: fit-content;
			height: 28px;
			font-weight: 700;
			font-size: 16px;
			line-height: 28px;
			display: flex;
			align-items: center;
			gap: 3px;

			svg {
				margin-top: -1px;
			}
		`}
`;

export default StyledIssueOption;
