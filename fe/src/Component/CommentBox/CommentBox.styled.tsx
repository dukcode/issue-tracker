import styled, { css } from "styled-components";

export const StyledCommentBox = styled.div`
	${({ theme: { colors, fonts } }) => css`
		background-color: ${colors.inputBackground};
		border-radius: 15px;
		height: 300px;
		display: flex;
		width: 100%;
		flex-direction: column;
		overflow: hidden;

		:focus-within {
			color: ${colors.titleActive};
			background-color: ${colors.offWhite};
			border: solid 2px ${colors.titleActive};

			label {
				border-color: ${colors.titleActive};
				color: ${colors.titleActive};
			}
		}

		textarea {
			${fonts.textSmall};
			background-color: inherit;
			color: inherit;
			box-sizing: border-box;
			margin: 10px 20px;
			flex-grow: 12;
			outline: none;
			border: none;
		}

		input {
			display: none;
		}
	`}
`;

export const StyledUploadImg = styled.label`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textXSmall};
		color: ${colors.label};
		cursor: pointer;
		display: flex;
		flex-grow: 1;
		align-items: center;
		gap: 5px;
		border-top: dashed 2px ${colors.line};
		padding: 10px 20px;

		:focus-within {
		}

		:hover {
			color: ${colors.titleActive};

			svg {
				color: ${colors.titleActive};
			}
		}
	`}
`;
