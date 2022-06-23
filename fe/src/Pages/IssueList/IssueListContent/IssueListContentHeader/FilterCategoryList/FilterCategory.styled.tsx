import styled, { css } from "styled-components";

const StyledFilterCategory = styled.div`
	display: flex;
	justify-content: space-around;
	width: 357px;

	${({ theme: { colors } }) =>
		css`
			color: ${colors.label};
			button {
				height: 32px;
				color: ${colors.label};
				font-weight: 700;
				font-size: 16px;
				line-height: 28px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				gap: 3px;
				width: 90px;

				svg {
					margin-top: -4px;
				}
			}
		`}
`;

export default StyledFilterCategory;
