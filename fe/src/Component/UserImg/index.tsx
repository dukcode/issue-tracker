
import { StyledUserImg, StyledUserImgWrapper } from "./UserImg.styled";

type TUserImgProps = {
	img: string;
	size: "small" | "medium";
};

const UserImg = ({ img, size }: TUserImgProps) => {
	return (
		<StyledUserImgWrapper size={size}>
			<StyledUserImg src={img} alt="logo" size={size} />
		</StyledUserImgWrapper>
	);
};

export default UserImg;