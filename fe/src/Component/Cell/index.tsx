import { useState } from "react";
import Label from "Component/Label";
import TextButton from "Component/TextButton";
import { labelsApi } from "Api";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import LabelForm from "Component/Label/LabelForm";
import {
	StyledCell,
	StyledCellDescription,
	StyledButtons,
	StyledLabelWrapper,
} from "./Cell.styled";

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
	const [isEditClicked, setIsEditClicked] = useState(false);

	const handleLabelEdit = () => {
		setIsEditClicked(!isEditClicked);
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
		<div>
			{isEditClicked ? (
				<LabelForm
					isEditing={true}
					isEditClicked={isEditClicked}
					setIsEditClicked={setIsEditClicked}
					curId={id}
					curName={name}
					curDescription={description}
					curLabelColor={labelColor}
					curTextColor={textColor}
				/>
			) : (
				<StyledCell>
					<StyledLabelWrapper>
						<Label key={id} name={name} labelColor={labelColor} textColor={textColor} />
						<StyledCellDescription>{description}</StyledCellDescription>
					</StyledLabelWrapper>
					<StyledButtons>
						<TextButton
							icon="Edit"
							content={EDIT}
							handleClick={handleLabelEdit}
							size="linkXSmall"
							color="label"
							isHover={false}
						/>
						<TextButton
							icon="DeleteOutline"
							content={DELETE}
							handleClick={handleLabelDelete}
							size="linkXSmall"
							color="red"
							isHover={false}
						/>
					</StyledButtons>
				</StyledCell>
			)}
		</div>
	);
};

export default Cell;
