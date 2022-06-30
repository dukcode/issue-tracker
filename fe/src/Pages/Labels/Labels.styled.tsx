import styled, { css } from "styled-components";

const StyledLabelsHeader = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.linkSmall};
		color: ${colors.label};
		display: flex;
		align-items: center;
		padding: 20px 30px;
	`};
`;

export default StyledLabelsHeader;
