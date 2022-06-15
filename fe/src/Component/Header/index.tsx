import user from "Img/user.jpeg";
import warning from "Img/warning.png";
import UserImg from "Component/UserImg";
import { StyledHeader, StyledHeaderLogo } from "./Header.styled";

const ISSUE_TRACKER = "ISSUE TRACKER";

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderLogo>
				<img src={warning} alt="logo" width={35} />
				{ISSUE_TRACKER}
			</StyledHeaderLogo>
			<UserImg img={user} />
		</StyledHeader>
	);
};

export default Header;
