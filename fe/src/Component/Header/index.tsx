import user from "Img/user.jpeg";
import warning from "Img/warning.png";
import {
	StyledHeader,
	StyledHeaderLogo,
	StyledUserImg,
	StyledUserImgWrapper,
} from "./Header.styled";

const ISSUE_TRACKER = "ISSUE TRACKER";

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderLogo>
				<img src={warning} alt="logo" width={35} />
				{ISSUE_TRACKER}
			</StyledHeaderLogo>
			<StyledUserImgWrapper>
				<StyledUserImg src={user} alt="logo" />
			</StyledUserImgWrapper>
		</StyledHeader>
	);
};

export default Header;
