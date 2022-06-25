import styled, { css } from "styled-components";

export const StyledPopup = styled.div<{ isLeft: boolean; isOpened: boolean }>`
	${({ theme: { colors, fonts }, isLeft, isOpened }) => css`
		width: 300px;
		position: absolute;
		margin-top: 5px;
		margin-left: -1px;
		border: solid 1px ${colors.line};
		border-radius: 20px;
		box-shadow: 0px 4px 8px -4px ${colors.body};
		overflow: hidden;
		display: none;
		animation: fadein 0.5s forwards;

		${!isOpened &&
		css`
			animation: fadeout 0.5s forwards;
		`}

		${!isLeft &&
		css`
			right: 0;
		`}

		svg {
			margin-top: -2px;
		}

		> :first-child {
			${fonts.textMedium};
			background-color: ${colors.background};
			color: ${colors.titleActive};
		}

		> div:not(:first-child),
		> button:not(:first-child) {
			${fonts.textSmall};
			width: 100%;
			background-color: ${colors.offWhite};
			:hover {
				background-color: ${colors.inputBackground};
			}
			:active {
				background-color: ${colors.line};
			}
			:disabled {
				background-color: ${colors.lightRed};
				cursor: not-allowed;
			}
		}

		> div:not(:last-child),
		> button:not(:last-child) {
			width: 100%;
			border-bottom: solid 1px ${colors.line};
		}

		> div,
		> button {
			padding: 8px 16px;
			margin: 0;
		}
	`}
`;

export const StyledPopupWrapper = styled.div`
	z-index: 2;
	position: relative;

	svg {
		pointer-events: none;
	}
`;
