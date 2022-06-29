import styled, { css } from "styled-components";

const StyledLabelsHeader = styled.div`
	${({ theme: { colors, fonts } }) => css`
		color: ${colors.label};
		height: 64px;
		${fonts.linkSmall};
	`};
	display: flex;
	align-items: center;
	padding-left: 32px;
`;

export default StyledLabelsHeader;
