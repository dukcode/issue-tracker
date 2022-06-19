import icons from "Util/Icons";
// import { Link } from "react-router-dom";
import warning from "Img/warning.png";
import {
	StyledLogin,
	StyledLoginButton,
	StyledLoginMention,
	StyledLoginTitle,
	StyledLoginImg,
} from "./Login.styled";

const GITHUB_LOGIN = "GITHUB LOGIN";
const ISSUE_TRACKER = "ISSUE TRACKER";

const Login = () => {
	const { GitHub } = icons;
	const loginUrl = process.env.REACT_APP_GITHUB_LOGIN;

	return (
		<StyledLogin>
			<StyledLoginImg>
				<img src={warning} alt="logo" width={250} />
			</StyledLoginImg>
			<StyledLoginTitle>{ISSUE_TRACKER}</StyledLoginTitle>
			<a href={loginUrl}>
				<StyledLoginButton>
					<StyledLoginMention>
						<GitHub colorset="white" size={18} />
						{GITHUB_LOGIN}
					</StyledLoginMention>
				</StyledLoginButton>
			</a>
		</StyledLogin>
	);
};

export default Login;
