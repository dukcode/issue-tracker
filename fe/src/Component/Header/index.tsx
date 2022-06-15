import { Link } from "react-router-dom";

import user from "Img/user.jpeg";
import UserImg from "Component/UserImg";
import warning from "Img/warning.png";
import { StyledHeader, StyledHeaderLogo } from "./Header.styled";

const ISSUE_TRACKER = "ISSUE TRACKER";

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/">
				<StyledHeaderLogo>
					<img src={warning} alt="logo" width={35} />
					{ISSUE_TRACKER}
				</StyledHeaderLogo>
			</Link>
			<UserImg img={user} />
		</StyledHeader>
	);
};

export default Header;
