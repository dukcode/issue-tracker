import styled, { css } from "styled-components";

type TStyledProgressBarInnerProps = {
	ratio: number;
};

export const StyledProgressBar = styled.div`
	${({ theme: { colors } }) => css`
		width: 100%;
		height: 8px;
		border-radius: 10px;
		overflow: hidden;
		background-color: ${colors.background};
	`}
`;

export const StyledProgressBarInner = styled.div<TStyledProgressBarInnerProps>`
	${({ theme: { colors }, ratio }) => css`
		width: ${ratio}%;
		height: 100%;
		border-radius: 10px;

		background-color: ${colors.blue};
	`}
`;
