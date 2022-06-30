import styled, { css } from "styled-components";

interface IStyledOptionTabs {
	isLabels: boolean;
}

interface IStyledTab {
	tabType: string;
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

const StyledTab = styled.div<IStyledTab>`
	${({ theme: { colors }, tabType, isLabels }) => css`
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

		:hover {
			background: ${colors.inputBackground};
		}

		${isLabels && tabType === "레이블" && `background: ${colors.line};`}
		${tabType === "레이블"
			? `border-radius: 10px 0px 0px 10px;`
			: `border-radius: 0px 10px 10px 0px;`}
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
