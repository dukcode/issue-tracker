import Moment from "react-moment";
import "moment/locale/ko";
import { useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import UserImg from "Component/UserImg";
import Label from "Component/Label";
import TIssueData from "Pages/IssueList/mockData";
import {
	StyledIssueCell,
	IssueCellLeft,
	IssueInfo,
	IssueInfoTop,
	IssueInfoBottom,
	IssueCellRight,
	Title,
	IssueNumber,
	AuthorTimeStamp,
	MileStone,
	StyledCheckbox,
	StyledLabelsWrapper,
} from "./IssueCell.styled";

const { ErrorOutline, EmojiFlags } = icons;

type TIssueItem = {
	dataSize: number;
	item: TIssueData;
	allChecked: boolean;
	setAllChecked: Dispatch<SetStateAction<boolean>>;
	checkedIssues: Set<unknown>;
	setCheckedIssues: Dispatch<SetStateAction<Set<unknown>>>;
};

const IssueCell = ({
	dataSize,
	item,
	allChecked,
	setAllChecked,
	checkedIssues,
	setCheckedIssues,
}: TIssueItem) => {
	const { id, title, author, createDate, milestone, labels: labelsInfo } = item;
	const { loginName, profileImage } = author;
	const labels = labelsInfo.map(({ id: lableId, name, labelColor }) => (
		<Label key={lableId} name={name} color={labelColor} />
	));
	const editedTime = <Moment fromNow>{createDate}</Moment>;
	const [checked, setChecked] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		if (checked) {
			setAllChecked(false);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.delete(id);
				return newCheckedIssues;
			});
		} else {
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.add(id);
				return newCheckedIssues;
			});
		}
	};

	useEffect(() => {
		console.log("im all checked");
		if (allChecked) {
			setChecked(true);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.add(id);
				return newCheckedIssues;
			});
		}
	}, [allChecked]);

	useEffect(() => {
		// 데이터 길이와 set 크기 같으면 allChecked = true
		console.log("asldkfjalsdjkf", dataSize, checkedIssues.size);
		if (dataSize === checkedIssues.size) {
			console.log("here");
			setAllChecked(true);
		}
	}, [checked]);

	return (
		<StyledIssueCell>
			<IssueCellLeft>
				<StyledCheckbox>
					<Checkbox size="small" color="default" checked={checked} onChange={handleChange} />
				</StyledCheckbox>
				<IssueInfo>
					<IssueInfoTop>
						<Title>
							<ErrorOutline colorset="blue" size={18} />
							{title}
						</Title>
						<StyledLabelsWrapper>{labels}</StyledLabelsWrapper>
					</IssueInfoTop>
					<IssueInfoBottom>
						<IssueNumber>#{id}</IssueNumber>
						<AuthorTimeStamp>
							이 이슈가 {editedTime}, {loginName}님에 의해 작성되었습니다.
						</AuthorTimeStamp>
						<MileStone>
							<EmojiFlags colorset="label" size={18} />
							{milestone.title}
						</MileStone>
					</IssueInfoBottom>
				</IssueInfo>
			</IssueCellLeft>
			<IssueCellRight>
				<UserImg img={profileImage} size="small" />
			</IssueCellRight>
		</StyledIssueCell>
	);
};

export default IssueCell;
