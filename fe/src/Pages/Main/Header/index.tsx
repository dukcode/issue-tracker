import { Link } from "react-router-dom";

import useCookieUserInfo from "Hooks/useCookieUserInfo";
import UserImg from "Component/UserImg";
import warning from "Img/warning.png";
import { StyledHeader, StyledHeaderLogo } from "./Header.styled";

const ISSUE_TRACKER = "ISSUE TRACKER";

const Header = () => {
	const { profileImage } = useCookieUserInfo();
	const profile = profileImage || warning;

	return (
		<StyledHeader>
			<Link to="/">
				<StyledHeaderLogo>
					<img src={warning} alt="logo" width={35} />
					{ISSUE_TRACKER}
				</StyledHeaderLogo>
			</Link>
			<UserImg img={profile} size="medium" />
		</StyledHeader>
	);
};

export default Header;
