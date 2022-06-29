import Label from "Component/Label";
import icons from "Util/Icons";
import { labelsApi } from "Api";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
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

const Cell = ({ id, name, description, labelColor, textColor }: TLabelData) => {
	const { accessToken } = useCookieUserInfo();

	const handleLabelEdit = () => {
		// TODO: 레이블 편집 구현
		console.log("handleLabelEdit");
	};

	const deleteLabel = async (issueNumber: number) => {
		const response = await labelsApi.deleteLabel(accessToken, issueNumber);
		const { status: statusNum } = response;

		if (statusNum && statusNum < 300) window.location.reload();
	};

	const handleLabelDelete = () => {
		deleteLabel(id);
	};

	return (
		<StyledCell>
			<Label key={id} name={name} labelColor={labelColor} textColor={textColor} />
			<StyledCellDescription>{description}</StyledCellDescription>
			<StyledButtons>
				<StyledButton onClick={handleLabelEdit}>
					<Edit size={20} colorset="label" />
					<StyledButtonName buttonColor="label">{EDIT}</StyledButtonName>
				</StyledButton>
				<StyledButton onClick={handleLabelDelete}>
					<DeleteOutline size={20} colorset="red" />
					<StyledButtonName buttonColor="red">{DELETE}</StyledButtonName>
				</StyledButton>
			</StyledButtons>
		</StyledCell>
	);
};

export default Cell;
