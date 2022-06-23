import styled, { css } from "styled-components";

const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
`;

const IssueCategory = styled.div`
	${({ theme: { height } }) =>
		css`
			height: ${height.issueHeader};
		`}
	display: flex;
	align-items: center;
	margin-left: 20px;
	gap: 25px;
`;

export { StyledCheckbox, IssueCategory };
