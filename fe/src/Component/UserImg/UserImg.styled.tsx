import styled, { css } from "styled-components";

type TSizeProp = {
	size: "small" | "medium";
	color: string | undefined;
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
	position: relative;
	box-sizing: content-box;
	${({ theme: { colors }, color, size }) => css`
		background-color: ${color};
		width: ${imgSizes[size]};
		height: ${imgSizes[size]};
		border: solid 1px ${colors.line};
	`}
`;

const StyledUserImg = styled.img<TSizeProp>`
	${({ size, color }) => css`
		${color &&
		css`
			visibility: hidden;
		`}
		position: absolute;
		width: ${imgSizes[size]};
		height: ${imgSizes[size]};
	`}
`;

export { StyledUserImg, StyledUserImgWrapper };
