import styled, { css } from "styled-components";

const StyledNotFound = styled.div`
	${({ theme: { colors } }) => css`
		background-color: ${colors.blue};
		color: ${colors.greyScale.offWhite};
	`}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 64px;
	font-weight: 700;
	position: absolute;
	gap: 50px;
	width: 100vw;
	height: 100vh;
`;

const StyledGoHome = styled.button`
	${({ theme: { colors } }) => css`
		font-size: 64px;
		font-weight: 700;
		padding: 40px;
		border-radius: 40px;
		background-color: ${colors.greyScale.offWhite};
		color: ${colors.blue};
	`}
`;

export { StyledGoHome, StyledNotFound };
