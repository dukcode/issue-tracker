import styled, { css } from "styled-components";

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	${({ theme: { width } }) => css`
		${width.main};
		margin: 0 auto;
		padding-top: 20px;
		padding-bottom: 40px;
	`}
`;

const StyledHeaderLogo = styled.div`
	${({ theme: { fonts } }) => css`
		${fonts.logotypeRegular};
	`}
	display: flex;
	align-items: center;
	gap: 5px;
`;

export { StyledHeader, StyledHeaderLogo };
