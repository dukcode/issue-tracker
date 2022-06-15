import styled, { css } from "styled-components";

const StyledMain = styled.div`
	${({ theme: { width } }) => css`
		${width.main};
		margin: 0 auto;
		padding: 20px 40px;
	`}
`;

export default StyledMain;
