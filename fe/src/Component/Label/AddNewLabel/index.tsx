import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { labelsApi } from "Api";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import icons from "Util/Icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Label from "Component/Label";
import Button from "Component/Button";
import {
	StyledAddNewLabel,
	StyledAddNewLabelTitle,
	StyledAddNewLabelForm,
	StyledMention,
	StyledLabelWrapper,
	StyledInputArea,
	StyledColorSelect,
	StyledTextColor,
	StyledBackgroundColor,
	StyledInputBackgroundColor,
} from "./AddNewLabel.styled";

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

type TAddNewLabel = {
	isEditing: boolean;
	isEditClicked?: boolean;
	setIsEditClicked?: Dispatch<SetStateAction<boolean>>;
	curName: string;
	curDescription: string;
	curLabelColor: string;
	curTextColor: string;
};

const defaultAddNewLabel = {
	isEditClicked: false,
	setIsEditClicked: undefined,
};

const AddNewLabel = ({
	isEditing,
	isEditClicked,
	setIsEditClicked,
	curName,
	curDescription,
	curLabelColor,
	curTextColor,
}: TAddNewLabel) => {
	const { accessToken } = useCookieUserInfo();
	const [inputTitle, setInputTitle] = useState(curName); // curName ? curName : ""
	const [inputDescription, setInputDescription] = useState(curDescription);
	const [inputBackgroundColor, setInputBackgroundColor] = useState(
		curLabelColor || DefaultBackgroundColor
	); // 여기 조건문 체크 curLabelColor ? curLabelColor : DefaultBackgroundColor
	const [inputTextColor, setInputTextColor] = useState(curTextColor || DARK); // 여기도 체크
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

	const postNewLabel = async (
		title: string,
		description: string,
		backgroundColor: string,
		textColor: string
	) => {
		const response = await labelsApi.postLabel(
			accessToken,
			title,
			description,
			backgroundColor,
			textColor
		);
		const { status: statusNum } = response;

		if (statusNum && statusNum < 300) window.location.reload();
	};

	const handleAddNewLabel = () => {
		postNewLabel(inputTitle, inputDescription, inputBackgroundColor, inputTextColor);
	};

	const handleCancelEditingLabel = () => {
		if (setIsEditClicked) setIsEditClicked(!isEditClicked);
	};

	const handleEditingLabel = () => {
		console.log("handleEditingLabel");
	};

	return (
		<StyledAddNewLabel isEditing={isEditing}>
			<StyledAddNewLabelTitle>
				<StyledMention>{isEditing ? MENTION_EDIT : MENTION_ADD}</StyledMention>
				<StyledLabelWrapper>
					<Label
						name={!inputTitle ? NAME : inputTitle}
						labelColor={inputBackgroundColor}
						textColor={inputTextColor}
					/>
				</StyledLabelWrapper>
			</StyledAddNewLabelTitle>
			<StyledAddNewLabelForm hasInput={inputTitle}>
				<StyledInputArea>
					<input
						placeholder={defaultInputTitle}
						value={inputTitle}
						maxLength={30}
						onChange={handleInputTitle}
					/>
				</StyledInputArea>
				<StyledInputArea>
					<input
						placeholder={defaultInputDescription}
						value={inputDescription}
						maxLength={50}
						onChange={handleInputDescription}
					/>
				</StyledInputArea>
				<StyledColorSelect>
					<StyledBackgroundColor>
						{BACKGROUNDCOLOR}
						<StyledInputBackgroundColor> {inputBackgroundColor}</StyledInputBackgroundColor>
						<Loop size={20} colorset="label" onClick={handleColorPick} />
					</StyledBackgroundColor>
					<StyledTextColor>
						{TEXTCOLOR}
						<FormControl>
							<RadioGroup
								row
								name="textColor-radio-buttons-group"
								value={inputTextColor}
								onChange={handleInputTextColor}
							>
								<FormControlLabel value="DARK" control={<Radio />} label="어두운 색" />
								<FormControlLabel value="LIGHT" control={<Radio />} label="밝은 색" />
							</RadioGroup>
						</FormControl>
					</StyledTextColor>
				</StyledColorSelect>
				{isEditing && (
					<>
						<Button content={DONE} icon="AddBox" clickHandler={handleEditingLabel} />
						<Button
							content={CANCEL}
							icon="AddBox"
							reverse={true}
							clickHandler={handleCancelEditingLabel}
						/>
					</>
				)}
				{!isEditing && <Button content={DONE} icon="AddBox" clickHandler={handleAddNewLabel} />}
			</StyledAddNewLabelForm>
		</StyledAddNewLabel>
	);
};

AddNewLabel.defaultProps = defaultAddNewLabel;

export default AddNewLabel;
