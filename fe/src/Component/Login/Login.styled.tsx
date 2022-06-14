import styled, { css } from "styled-components";

const StyledLogin = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledLoginButton = styled.button`
	${({ theme: { colors } }) => css`
		color: ${colors.greyScale.offWhite};
		background-color: ${colors.greyScale.titleActive};
		width: 340px;
		margin: 0 auto;
		padding: 16px;
		border-radius: 20px;
		display: flex;
		justify-content: center;

		:hover {
			opacity: 80%;
		}
	`}
`;

const StyledLoginMention = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.linkMedium};
		color: ${colors.greyScale.offWhite};
	`}
	display: flex;
	align-items: center;
	gap: 5px;

	svg {
		margin-top: -0.1rem;
	}
`;

const StyledLoginTitle = styled.div`
	margin-bottom: 30px;
	${({ theme: { fonts, colors } }) => css`
		${fonts.title};
		color: ${colors.greyScale.titleActive};
	`}
`;

export { StyledLoginButton, StyledLoginMention, StyledLogin, StyledLoginTitle };
