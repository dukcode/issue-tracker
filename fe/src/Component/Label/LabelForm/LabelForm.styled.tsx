import styled, { css } from "styled-components";

interface IStyledLabelFormWrapper {
	hasInput: string;
}

interface IStyledLabelForm {
	isEditing: boolean;
}

export const StyledLabelForm = styled.div<IStyledLabelForm>`
	${({ theme: { colors }, isEditing }) => css`
		height: 345px;
		${!isEditing && `border: solid 1px ${colors.line};`}
		${!isEditing && `border-radius: 16px;`}
		${!isEditing && `margin-top: 24px;`}
		${!isEditing && `background: ${colors.offWhite};`}
	`}
	display: flex;
`;

export const StyledLabelFormTitle = styled.div`
	width: 344px;
	position: relative;
`;

export const StyledLabelFormForm = styled.div<IStyledLabelFormWrapper>`
	${({ hasInput }) => css`
		width: 936px;
		margin-top: 96px;

		button {
			margin-right: 20px;
			margin-top: 24px;
			float: right;
			${!hasInput && `opacity: 0.5`}
		}
	`}
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
	top: 45%;
	left: 40%;
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
