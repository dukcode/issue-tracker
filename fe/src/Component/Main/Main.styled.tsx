import styled, { css } from "styled-components";

const StyledMain = styled.div`
	${({ theme: { width } }) => css`
		min-width: ${width.large};
		margin: 0 auto;
		padding: 20px 40px;
	`}
`;

export default StyledMain;
