import styled, { css } from "styled-components";

const Container = styled.div`
	${({ theme: { colors, width } }) =>
		css`
			margin-top: 20px;
			background-color: ${colors.offWhite};
			border: solid 1px ${colors.line};
			${width.main};
			border-radius: 16px;
		`}
`;

const Header = styled.div`
	${({ theme: { colors, width, height } }) =>
		css`
			background: ${colors.background};
			${width.main};
			height: ${height.issueHeader};
			border-bottom: 1px solid ${colors.line};
			border-radius: 16px 16px 0px 0px;
		`}
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderLeft = styled.div`
	display: flex;
	margin-left: 20px;
`;

const HeaderRight = styled.div`
	display: flex;
`;

const Content = styled.div``;

export { Container, Header, HeaderLeft, HeaderRight, Content };
