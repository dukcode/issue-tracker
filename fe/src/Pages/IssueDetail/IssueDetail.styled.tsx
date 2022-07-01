import styled, { css } from "styled-components";

export const StyledIssueDetail = styled.div`
	${({ theme: { width } }) => css`
		${width.main};
		margin-top: 30px;
	`}
`;

export const LoadingWrapper = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
