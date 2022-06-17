import styled, { css } from "styled-components";

export const StyledLogin = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledLoginButton = styled.button`
	${({ theme: { colors } }) => css`
		color: ${colors.offWhite};
		background-color: ${colors.titleActive};
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

export const StyledLoginMention = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.linkMedium};
		color: ${colors.offWhite};
	`}
	display: flex;
	align-items: center;
	gap: 5px;

	svg {
		margin-top: -0.1rem;
	}
`;

export const StyledLoginTitle = styled.div`
	margin-bottom: 30px;
	${({ theme: { fonts, colors } }) => css`
		${fonts.title};
		color: ${colors.titleActive};
	`}
`;

export const StyledLoginImg = styled.div`
	animation: spinning 10s infinite;

	@keyframes spinning {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
