import { useEffect } from "react";
import icons from "Util/Icons";
import { useNavigate } from "react-router-dom";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
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
	const { accessToken } = useCookieUserInfo();
	const navigate = useNavigate();
	const isDev = process.env.NODE_ENV === "development";

	const loginUrl = isDev
		? "http://localhost:3000/loading"
		: (process.env.REACT_APP_GITHUB_LOGIN as string);

	const handleButtonClick = () => {
		window.location.href = loginUrl;
	};

	useEffect(() => {
		if (accessToken) navigate("/");
	}, []);

	return (
		<StyledLogin>
			<StyledLoginImg>
				<img src={warning} alt="logo" width={250} />
			</StyledLoginImg>
			<StyledLoginTitle>{ISSUE_TRACKER}</StyledLoginTitle>

			<StyledLoginButton onClick={handleButtonClick}>
				<StyledLoginMention>
					<GitHub colorset="offWhite" size={18} />
					{GITHUB_LOGIN}
				</StyledLoginMention>
			</StyledLoginButton>
		</StyledLogin>
	);
};

export default Login;
