import styled, { css } from "styled-components";

const StyledFilterCategory = styled.button`
	${({ theme: { colors } }) => css`
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

		:hover {
			color: ${colors.titleActive};
			svg {
				color: ${colors.titleActive};
			}
		}
	`}
`;

export default StyledFilterCategory;
