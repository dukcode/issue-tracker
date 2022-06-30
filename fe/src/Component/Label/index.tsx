import { StyledLabel } from "./Label.styled";

type TLabelProps = {
	labelColor: string;
	textColor: string;
	name: string;
};

const Label = ({ labelColor, textColor, name }: TLabelProps) => {
	return (
		<StyledLabel labelColor={labelColor} textColor={textColor}>
			{name}
		</StyledLabel>
	);
};

export default Label;
