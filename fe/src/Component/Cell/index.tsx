import Label from "Component/Label";
import icons from "Util/Icons";
import {
	StyledCell,
	StyledCellDescription,
	StyledButtons,
	StyledButton,
	StyledButtonName,
} from "./Cell.styled";

const { Edit, DeleteOutline } = icons;

type TLabelData = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

const EDIT = "편집";
const DELETE = "삭제";

const buttonsInfo = [
	{ id: 1, Icon: Edit, name: EDIT },
	{ id: 2, Icon: DeleteOutline, name: DELETE },
];

const buttons = buttonsInfo.map(({ id, Icon, name }) => {
	const buttonColor = name === EDIT ? "label" : "red";
	return (
		<StyledButton key={id}>
			<Icon size={20} colorset={buttonColor} />
			<StyledButtonName buttonColor={buttonColor}>{name}</StyledButtonName>
		</StyledButton>
	);
});

const Cell = ({ id, name, description, labelColor, textColor }: TLabelData) => {
	return (
		<StyledCell>
			<Label key={id} name={name} labelColor={labelColor} textColor={textColor} />
			<StyledCellDescription>{description}</StyledCellDescription>
			<StyledButtons>{buttons}</StyledButtons>
		</StyledCell>
	);
};

export default Cell;
