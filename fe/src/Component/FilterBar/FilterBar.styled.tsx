import styled, { css } from "styled-components";

const StyledFilterBar = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.line};
		border-radius: 10px;
		height: 40px;
		display: flex;
		overflow: hidden;
	`}
`;

const StyledFilterSelector = styled.div`
	cursor: pointer;
	width: 130px;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: space-around;

	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		color: ${colors.label};
		border-right: solid 1px ${colors.line};
	`}

	svg {
		margin-top: -4px;
	}
`;

const StyledFilterInputArea = styled.form`
	${({ theme: { colors, fonts } }) => css`
		padding-left: 10px;
		background-color: ${colors.inputBackground};
		width: 470px;
		display: flex;
		align-items: center;
		color: ${colors.placeholder};
		gap: 5px;

		input {
			${fonts.textSmall};
			background-color: ${colors.inputBackground};
			color: ${colors.placeholder};
			outline: none;
			border: none;
		}
	`}
`;

export { StyledFilterBar, StyledFilterSelector, StyledFilterInputArea };
