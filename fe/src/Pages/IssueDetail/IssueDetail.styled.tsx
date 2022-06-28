import styled, { css } from "styled-components";

const StyledIssueDetail = styled.div`
	${({ theme: { width } }) => css`
		${width.main};
		margin-top: 30px;
	`}
`;

export default StyledIssueDetail;
