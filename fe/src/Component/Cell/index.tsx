import { useState, useEffect } from "react";
import Label from "Component/Label";
import TextButton from "Component/TextButton";
import { useLabelsDelete } from "Hooks/useLabels";
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
	const [isEditClicked, setIsEditClicked] = useState(false);
	const { mutate, isSuccess } = useLabelsDelete({ id });

	const handleLabelEdit = () => {
		setIsEditClicked(!isEditClicked);
	};

	const handleLabelDelete = () => {
		mutate();
	};

	useEffect(() => {
		if (isSuccess) window.location.reload();
	}, [isSuccess]);

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
