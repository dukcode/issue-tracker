import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { useLabelsPost, TNewLabelInfo } from "Hooks/useLabels";
// import { labelsApi } from "Api";
// import useCookieUserInfo from "Hooks/useCookieUserInfo";
import icons from "Util/Icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Label from "Component/Label";
import Button from "Component/Button";
import {
	StyledLabelForm,
	StyledLabelFormTitle,
	StyledLabelFormForm,
	StyledMention,
	StyledLabelWrapper,
	StyledInputArea,
	StyledColorSelect,
	StyledTextColor,
	StyledBackgroundColor,
	StyledInputBackgroundColor,
} from "./LabelForm.styled";

const NAME = "레이블 이름";
const DefaultBackgroundColor = "#c2e0c6";
const DARK = "DARK";
const MENTION_ADD = "새로운 레이블 추가";
const MENTION_EDIT = "레이블 편집";
const defaultInputTitle = "레이블 이름";
const defaultInputDescription = "설명(선택)";
const BACKGROUNDCOLOR = "배경 색상";
const TEXTCOLOR = "텍스트 색상";
const DONE = "완료";
const CANCEL = "취소";
const { Loop } = icons;

const getRandomColorCode = () => {
	return Math.round(Math.random() * 0xffffff).toString(16);
};

type TLabelForm = {
	isEditing: boolean;
	curName: string;
	curDescription: string;
	curLabelColor: string;
	curTextColor: string;
	isEditClicked?: boolean;
	setIsEditClicked?: Dispatch<SetStateAction<boolean>>;
	curId?: number;
};

const LabelForm = ({
	isEditing,
	curName,
	curDescription,
	curLabelColor,
	curTextColor,
	isEditClicked = false,
	setIsEditClicked = undefined,
	curId = 1,
}: TLabelForm) => {
	// const { accessToken } = useCookieUserInfo();
	const [name, setInputTitle] = useState(curName);
	const [description, setInputDescription] = useState(curDescription);
	const [labelColor, setInputBackgroundColor] = useState(curLabelColor || DefaultBackgroundColor);
	const [textColor, setInputTextColor] = useState(curTextColor || DARK);
	const { mutate } = useLabelsPost();
	const newLabelInfo: TNewLabelInfo = {
		name,
		description,
		labelColor,
		textColor,
	};

	const handleInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setInputTitle(value);
	};
	const handleInputDescription = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setInputDescription(value);
	};

	const handleInputTextColor = (event: ChangeEvent<HTMLInputElement>) => {
		setInputTextColor((event.target as HTMLInputElement).value);
	};

	const handleColorPick = () => {
		const color = getRandomColorCode();
		setInputBackgroundColor(`#${color}`);
	};

	const postNewLabel = () => {
		console.log(newLabelInfo);
		mutate(newLabelInfo);
	};

	const handleLabelForm = () => {
		postNewLabel();
	};

	const handleCancelEditingLabel = () => {
		if (setIsEditClicked) setIsEditClicked(!isEditClicked);
	};

	// const editCurLabel = async (
	// 	id: number,
	// 	title: string,
	// 	description: string,
	// 	backgroundColor: string,
	// 	textColor: string
	// ) => {
	// 	const response = await labelsApi.editLabel(
	// 		accessToken,
	// 		id,
	// 		title,
	// 		description,
	// 		backgroundColor,
	// 		textColor
	// 	);

	// 	const { status: statusNum } = response;

	// 	if (statusNum && statusNum < 300) window.location.reload();
	// };

	const handleEditingLabel = () => {
		// if (curId) editCurLabel(curId, name, description, labelColor, textColor);
		console.log(curId);
	};

	return (
		<StyledLabelForm isEditing={isEditing}>
			<StyledLabelFormTitle>
				<StyledMention>{isEditing ? MENTION_EDIT : MENTION_ADD}</StyledMention>
				<StyledLabelWrapper>
					<Label name={!name ? NAME : name} labelColor={labelColor} textColor={textColor} />
				</StyledLabelWrapper>
			</StyledLabelFormTitle>
			<StyledLabelFormForm hasInput={name}>
				<StyledInputArea>
					<input
						placeholder={defaultInputTitle}
						value={name}
						maxLength={30}
						onChange={handleInputTitle}
					/>
				</StyledInputArea>
				<StyledInputArea>
					<input
						placeholder={defaultInputDescription}
						value={description}
						maxLength={50}
						onChange={handleInputDescription}
					/>
				</StyledInputArea>
				<StyledColorSelect>
					<StyledBackgroundColor>
						{BACKGROUNDCOLOR}
						<StyledInputBackgroundColor> {labelColor}</StyledInputBackgroundColor>
						<Loop size={20} colorset="label" onClick={handleColorPick} />
					</StyledBackgroundColor>
					<StyledTextColor>
						{TEXTCOLOR}
						<FormControl>
							<RadioGroup
								row
								name="textColor-radio-buttons-group"
								value={textColor}
								onChange={handleInputTextColor}
							>
								<FormControlLabel value="DARK" control={<Radio />} label="어두운 색" />
								<FormControlLabel value="LIGHT" control={<Radio />} label="밝은 색" />
							</RadioGroup>
						</FormControl>
					</StyledTextColor>
				</StyledColorSelect>
				{isEditing ? (
					<>
						<Button content={DONE} icon="Edit" clickHandler={handleEditingLabel} />
						<Button
							content={CANCEL}
							icon="RemoveCircleOutline"
							reverse={true}
							clickHandler={handleCancelEditingLabel}
						/>
					</>
				) : (
					<Button content={DONE} icon="AddBox" clickHandler={handleLabelForm} />
				)}
			</StyledLabelFormForm>
		</StyledLabelForm>
	);
};

export default LabelForm;
