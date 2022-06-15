import styled, { css } from "styled-components";

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

export { StyledUserImg, StyledUserImgWrapper };
