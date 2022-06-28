import styled, { css } from "styled-components";

export const StyledAddNewLabel = styled.div`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.line};
		border-radius: 16px;
		background: ${colors.offWhite};
		height: 345px;
		margin-top: 24px;
	`}
	display: flex;
`;

export const StyledAddNewLabelTitle = styled.div`
	width: 344px;
	position: relative;
`;

export const StyledAddNewLabelForm = styled.div`
	width: 936px;
	margin-top: 96px;
`;

export const StyledMention = styled.div`
	${({ theme: { fonts } }) => css`
		${fonts.textLarge};
		margin-top: 32px;
		margin-left: 32px;
	`}
`;

export const StyledLabelWrapper = styled.div`
	position: absolute;
	top: 200px;
	left: 131px;
`;

export const StyledInputArea = styled.form`
	${({ theme: { colors, fonts } }) => css`
		padding-left: 10px;
		background-color: ${colors.inputBackground};
		width: 904px;
		height: 40px;
		display: flex;
		align-items: center;
		color: ${colors.placeholder};
		gap: 5px;
		overflow: hidden;
		border-radius: 10px;
		margin-bottom: 16px;

		input {
			${fonts.textSmall};
			background-color: ${colors.inputBackground};
			color: ${colors.titleActive};
			outline: none;
			border: none;
			width: 700px;
		}
	`}
`;

export const StyledColorSelect = styled.div`
	display: flex;
	gap: 16px;
`;

export const StyledBackgroundColor = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textXSmall}
		padding-left: 10px;
		background-color: ${colors.inputBackground};
		width: 240px;
		height: 40px;
		display: flex;
		align-items: center;
		color: ${colors.label};
		gap: 40px;
		overflow: hidden;
		border-radius: 10px;
	`}
`;

export const StyledTextColor = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textXSmall}
		padding-left: 10px;
		background-color: ${colors.inputBackground};
		width: 352px;
		height: 40px;
		display: flex;
		align-items: center;
		color: ${colors.label};
		gap: 40px;
		overflow: hidden;
		border-radius: 10px;

		span {
			color: ${colors.body};
			${fonts.textSmall}
		}
	`}
`;

export const StyledInputBackgroundColor = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};
		color: ${colors.titleActive};
		width: 65px;
	`}
`;
