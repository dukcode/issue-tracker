import useCookieUserInfo from "Hooks/useCookieUserInfo";
import { StyledUserImg, StyledUserImgWrapper } from "./UserImg.styled";

type TUserImgProps = {
	size: "small" | "medium";
	img?: string;
	color?: string;
};

const UserImg = ({ img = undefined, size, color = undefined }: TUserImgProps) => {
	const { profileImage } = useCookieUserInfo();
	const srcImg = img || profileImage;
	return (
		<StyledUserImgWrapper size={size} color={color}>
			<StyledUserImg src={srcImg} alt="logo" size={size} color={color} />
		</StyledUserImgWrapper>
	);
};

export default UserImg;
