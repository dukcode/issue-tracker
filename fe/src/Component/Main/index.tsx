import styled, { css } from "styled-components";
import icons from "Util/Icons";

const StyledMain = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const StyledLoginButton = styled.button`
	${({ theme: { colors } }) => css`
		color: ${colors.greyScale.offWhite};
		background-color: ${colors.greyScale.titleActive};
		width: 340px;
		margin: 0 auto;
		padding: 16px;
		border-radius: 20px;
		display: flex;
		justify-content: center;

		:hover {
			opacity: 80%;
		}
	`}
`;

const StyledLoginMention = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	svg {
		// GitHub Button
		margin-top: -0.1rem;
	}
`;

const GITHUB_LOGIN = "GITHUB LOGIN";

const Main = () => {
	const { GitHub } = icons;

	return (
		<StyledMain>
			<StyledLoginButton>
				<StyledLoginMention>
					<GitHub colorset="white" size={18} />
					{GITHUB_LOGIN}
				</StyledLoginMention>
			</StyledLoginButton>
		</StyledMain>
	);
};

export default Main;
