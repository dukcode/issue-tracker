import styled, { css } from "styled-components";

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	${({ theme: { width } }) => css`
		min-width: ${width.main};
		width: 1200px; // for test
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

const StyledUserImgWrapper = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.line};
	`}
`;

const StyledUserImg = styled.img`
	width: 40px;
`;

export { StyledHeader, StyledHeaderLogo, StyledUserImgWrapper, StyledUserImg };
