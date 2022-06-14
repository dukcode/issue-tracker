import styled, { css } from "styled-components";

const StyledOptionsBox = styled.div`
	${({ theme: { width } }) => css`
		min-width: ${width.main};
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	`}
`;

export default StyledOptionsBox;
