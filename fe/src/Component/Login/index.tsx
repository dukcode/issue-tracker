import icons from "Util/Icons";
import { Link } from "react-router-dom";
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
			<Link to="/">
				<StyledLoginButton>
					<StyledLoginMention>
						<GitHub colorset="white" size={18} />
						{GITHUB_LOGIN}
					</StyledLoginMention>
				</StyledLoginButton>
			</Link>
		</StyledLogin>
	);
};

export default Login;
