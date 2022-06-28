import styled, { css } from "styled-components";

export const StyledSelectedOptionUser = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		color: ${colors.label};
		display: flex;
		gap: 10px;
		align-items: center;
	`}
`;

export const StyledSelectedOptionLabel = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	margin-top: 10px;
`;

export const StyledSelectedOptionMilestone = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.textSmall};
		color: ${colors.label};

		> div {
			margin-top: 10px;
		}
	`}
`;

export const StyledSelectedOptions = styled.div`
	> div {
		margin-top: 10px;
	}
`;
