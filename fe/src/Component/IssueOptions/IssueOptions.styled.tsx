import styled, { css } from "styled-components";

export const StyledNewIssueOptions = styled.div`
	${({ theme: { colors } }) => css`
		height: fit-content;
		background-color: ${colors.offWhite};
		border: solid 1px ${colors.line};
		border-radius: 10px;
		color: ${colors.label};

		> * {
			border-bottom: 1px solid ${colors.line};
		}

		> :first-child {
			border-radius: 10px 10px 0 0;
		}

		> :last-child {
			border-bottom: none;
			border-radius: 0 0 10px 10px;
		}

		> :hover {
			background-color: ${colors.inputBackground};
		}
	`}
`;

export const StyledIssueOption = styled.button`
	${({ theme: { colors, fonts } }) => css`
		${fonts.linkSmall};
		color: ${colors.label};
		cursor: pointer;
		display: flex;
		width: 100%;
		height: 100px;

		padding: 30px;
		align-items: center;
		justify-content: space-between;
	`}
`;
