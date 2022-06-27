import Label from "Component/Label";
import StyledCell from "./Cell.styled";

type TLabelData = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

const Cell = ({ id, name, description, labelColor, textColor }: TLabelData) => {
	return (
		<StyledCell>
			<Label key={id} name={name} color={labelColor} />
			<div>{description}</div>

			<div>{textColor}</div>
		</StyledCell>
	);
};

export default Cell;
