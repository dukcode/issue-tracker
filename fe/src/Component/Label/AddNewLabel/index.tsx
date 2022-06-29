import { useState, ChangeEvent } from "react";
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
const MENTION = "새로운 레이블 추가";
const defaultInputTitle = "레이블 이름";
const defaultInputDescription = "설명(선택)";
const BACKGROUNDCOLOR = "배경 색상";
const TEXTCOLOR = "텍스트 색상";
const DONE = "완료";
const { Loop } = icons;

const getRandomColorCode = () => {
	return Math.round(Math.random() * 0xffffff).toString(16);
};

const AddNewLabel = () => {
	const { accessToken } = useCookieUserInfo();
	const [inputTitle, setInputTitle] = useState("");
	const [inputDescription, setInputDescription] = useState("");
	const [inputBackgroundColor, setInputBackgroundColor] = useState(DefaultBackgroundColor);
	const [inputTextColor, setInputTextColor] = useState(DARK);
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

	return (
		<StyledAddNewLabel>
			<StyledAddNewLabelTitle>
				<StyledMention>{MENTION}</StyledMention>
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
				<Button content={DONE} icon="AddBox" clickHandler={handleAddNewLabel} />
			</StyledAddNewLabelForm>
		</StyledAddNewLabel>
	);
};

export default AddNewLabel;
