import styled, { css } from "styled-components";

const StyledOptionsBox = styled.div`
	${({ theme: { width } }) => css`
		min-width: ${width.main};
		width: 1200px; // for test;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	`}
`;

export default StyledOptionsBox;
