import styled, { css } from "styled-components";

type TSizeProp = {
	size: "small" | "medium";
};

type TImgSizes = {
	small: string;
	medium: string;
};

const imgSizes: TImgSizes = {
	small: "20px",
	medium: "40px",
};

const StyledUserImgWrapper = styled.div<TSizeProp>`
	border-radius: 50%;
	overflow: hidden;
	${({ theme: { colors }, size }) => css`
		width: ${imgSizes[size]};
		height: ${imgSizes[size]};
		border: solid 1px ${colors.line};
	`}
`;

const StyledUserImg = styled.img<TSizeProp>`
	${({ size }) => css`
		width: ${imgSizes[size]};
	`}
`;

export { StyledUserImg, StyledUserImgWrapper };
