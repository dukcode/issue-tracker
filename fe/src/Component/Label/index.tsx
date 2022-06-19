import { StyledLabel } from "./Label.styled";

type TLabelProps = {
	color: string;
	name: string;
};

const Label = ({ color, name }: TLabelProps) => {
	return <StyledLabel color={color}>{name}</StyledLabel>;
};

export default Label;
