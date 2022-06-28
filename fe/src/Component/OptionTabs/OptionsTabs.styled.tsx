import styled, { css } from "styled-components";

interface IStyledOptionTabs {
	isLabels: boolean;
}

const StyledOptionTabs = styled.div<IStyledOptionTabs>`
	${({ isLabels }) => {
		return (
			isLabels &&
			css`
				justify-content: space-between;
			`
		);
	}}
	display: flex;
	gap: 15px;
	align-items: center;
	// 여기서 style 줌
`;

const StyledTabsLabelMilestone = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		border: solid 1px ${colors.line};
		border-radius: 10px;
		display: flex;

		> :first-child {
			border-right: solid 1px ${colors.line};
		}
	`}
`;

const StyledTab = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.label};
		cursor: pointer;
		display: flex;
		width: 160px;
		height: 40px;
		align-items: center;
		justify-content: center;
		gap: 10px;

		svg {
			margin-top: -2px;
		}
	`}
`;

const StyledAddIssue = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};

		cursor: pointer;
		display: flex;
		height: 40px;
		width: 120px;
		border-radius: 10px;
		align-items: center;
		text-align: center;
		justify-content: center;
		gap: 5px;
		color: ${colors.offWhite};
		background-color: ${colors.blue};

		svg {
			margin-top: -2px;
		}
	`}
`;

export { StyledOptionTabs, StyledTabsLabelMilestone, StyledAddIssue, StyledTab };
