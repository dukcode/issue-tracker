import styled, { css } from "styled-components";

const FilterCategory = styled.div`
	display: flex;
	justify-content: space-around;
	width: 357px;

	${({ theme: { colors } }) =>
		css`
			color: ${colors.label};
		`}

	li {
		height: 32px;
		font-weight: 700;
		font-size: 16px;
		line-height: 28px;
		display: flex;
		align-items: center;
		cursor: pointer;
		gap: 3px;

		svg {
			margin-top: -6px;
		}
	}
	margin-right: 20px;
`;

export default FilterCategory;
