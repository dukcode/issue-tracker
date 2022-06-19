import styled, { css } from "styled-components";

const StyledIssueHeader = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.title};
		padding-bottom: 30px;
		border-bottom: solid 1px ${colors.line};
	`}
`;

export default StyledIssueHeader;
