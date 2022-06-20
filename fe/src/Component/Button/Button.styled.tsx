import styled, { css } from "styled-components";

const StyledAddIssue = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.textSmall};

		cursor: pointer;
		display: flex;
		height: 40px;
		width: 120px;
		border-radius: 10px;
		align-items: center;
		text-align: center;
		justify-content: center;
		gap: 5px;
		color: ${colors.offWhite};
		background-color: ${colors.blue};

		svg {
			margin-top: -2px;
		}
	`}
`;

export default StyledAddIssue;
