import styled, { css } from "styled-components";

const StyledMain = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.green};
	`}
`;

const Main = () => {
	return <StyledMain>HI</StyledMain>;
};

export default Main;
