import styled, { css } from "styled-components";

const StyledContent = styled.div`
	${({ theme: { colors, width } }) => css`
		${width.main};
		margin-top: 20px;
		background-color: ${colors.offWhite};
		border: solid 1px ${colors.line};
		border-radius: 16px;

		> :first-child {
			background-color: ${colors.background};
			border-radius: 16px 16px 0px 0px;
		}

		> div:not(:last-child) {
			border-bottom: solid 1px ${colors.line};
		}
	`};
`;

export default StyledContent;
