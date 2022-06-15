import { StyledUserImg, StyledUserImgWrapper } from "./UserImg.styled";

type TUserImgProps = {
	img: string;
};

const UserImg = ({ img }: TUserImgProps) => {
	return (
		<StyledUserImgWrapper>
			<StyledUserImg src={img} alt="logo" />
		</StyledUserImgWrapper>
	);
};

export default UserImg;
