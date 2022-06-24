import { StyledUserImg, StyledUserImgWrapper } from "./UserImg.styled";

type TUserImgProps = {
	size: "small" | "medium";
	img?: string;
	color?: string;
};

const defaultUserImgProps = {
	img: undefined,
	color: undefined,
};

const UserImg = ({ img, size, color }: TUserImgProps) => {
	return (
		<StyledUserImgWrapper size={size} color={color}>
			<StyledUserImg src={img} alt="logo" size={size} color={color} />
		</StyledUserImgWrapper>
	);
};

UserImg.defaultProps = defaultUserImgProps;

export default UserImg;
