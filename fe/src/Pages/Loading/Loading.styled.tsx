import styled, { css } from "styled-components";

export const StyledLoading = styled.div`
	${({ theme: { colors } }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: ${colors.blue};
		width: 100%;
		height: 100%;
	`}
`;

export const StyledLoadingMention = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.title};
		font-weight: 700;
		color: ${colors.offWhite};
		text-align: center;
		margin: 0 auto;
		margin-bottom: 30px;
		padding: 30px;
		border-radius: 20px;
	`}
`;

export const StyledLoadingAnimation = styled.div`
	${({ theme: { colors } }) => css`
		margin: 0 auto;
		border: solid 15px red;
		border-radius: 50%;
		border-color: ${colors.offWhite} transparent transparent transparent;
		width: 100px;
		height: 100px;
		animation: spinning 1s infinite;

		@keyframes spinning {
			from {
				transform: rotate(0);
			}
			to {
				transform: rotate(360deg);
			}
		}
	`}
`;
