import styled, { css } from "styled-components";

const StyledContent = styled.div`
	${({ theme: { colors, width } }) => css`
		${width.main};
		margin-top: 20px;
		background-color: ${colors.offWhite};
		border: solid 1px ${colors.line};
		border-radius: 16px;
		overflow: hidden;

		> :first-child {
			background-color: ${colors.background};
		}

		> div:not(:last-child) {
			border-bottom: solid 1px ${colors.line};
		}
	`};
`;

export default StyledContent;
