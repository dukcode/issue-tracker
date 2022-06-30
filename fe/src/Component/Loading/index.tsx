import styled, { css } from "styled-components";
import { TKeysColors } from "Styles/theme";

type TLoadingAnimationProps = {
	color: TKeysColors;
	size: number;
	border: number;
};

const LoadingAnimation = styled.div<TLoadingAnimationProps>`
	${({ theme: { colors }, color, size, border }) => css`
		margin: 0 auto;
		border: solid ${border}px;
		border-radius: 50%;
		border-color: ${colors[color]} transparent transparent transparent;
		width: ${size}px;
		height: ${size}px;
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

export default LoadingAnimation;
