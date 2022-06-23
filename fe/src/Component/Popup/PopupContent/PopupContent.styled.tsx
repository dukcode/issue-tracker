import styled, { css } from "styled-components";

type TStyledContentProps = {
	checked: boolean;
};

export const StyledPopupContent = styled.div<TStyledContentProps>`
	${({ checked, theme: { colors } }) => css`
		color: ${colors.label};

		${checked &&
		css`
			font-weight: 700;
			color: ${colors.titleActive};
		`}

		display: flex;
		justify-content: space-between;
		align-items: center;
	`}
`;

export const StyledPopupName = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
`;
