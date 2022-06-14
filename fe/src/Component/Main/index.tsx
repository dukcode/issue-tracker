import styled, { css } from "styled-components";

import Header from "Component/Header";

const StyledMain = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.green};
	`}
`;

const Main = () => {
	return (
		<>
			<Header />
			<StyledMain>THIS IS MAIN</StyledMain>
		</>
	);
};

export default Main;
