import icons from "Util/Icons";
import warning from "Img/warning.png";
import {
	StyledLogin,
	StyledLoginButton,
	StyledLoginMention,
	StyledLoginTitle,
} from "./Login.styled";

const GITHUB_LOGIN = "GITHUB LOGIN";
const ISSUE_TRACKER = "ISSUE TRACKER";

const Login = () => {
	const { GitHub } = icons;

	return (
		<StyledLogin>
			<img src={warning} alt="logo" width={250} />
			<StyledLoginTitle>{ISSUE_TRACKER}</StyledLoginTitle>
			<StyledLoginButton>
				<StyledLoginMention>
					<GitHub colorset="white" size={18} />
					{GITHUB_LOGIN}
				</StyledLoginMention>
			</StyledLoginButton>
		</StyledLogin>
	);
};

export default Login;
