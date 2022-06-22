import styled, { css } from "styled-components";

const StyledIssueListContent = styled.div`
	${({ theme: { colors, width } }) =>
		css`
			margin-top: 20px;
			background-color: ${colors.offWhite};
			border: solid 1px ${colors.line};
			${width.main};
			border-radius: 16px;
		`}
`;

export default StyledIssueListContent;
