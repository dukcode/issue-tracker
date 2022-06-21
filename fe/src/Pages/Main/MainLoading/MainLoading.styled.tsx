import styled, { css } from "styled-components";

export const StyledLoading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 300px;
`;

export const StyledLoadingAnimation = styled.div`
	${({ theme: { colors } }) => css`
		margin: 0 auto;
		border: solid 15px;
		border-radius: 50%;
		border-color: ${colors.label} transparent transparent transparent;
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
