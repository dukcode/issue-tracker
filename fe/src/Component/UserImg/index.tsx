import { StyledUserImg, StyledUserImgWrapper } from "./UserImg.styled";

type TUserImgProps = {
	size: "small" | "medium";
	img?: string;
	color?: string;
};

const UserImg = ({ img = undefined, size, color = undefined }: TUserImgProps) => {
	return (
		<StyledUserImgWrapper size={size} color={color}>
			<StyledUserImg src={img} alt="logo" size={size} color={color} />
		</StyledUserImgWrapper>
	);
};

export default UserImg;
