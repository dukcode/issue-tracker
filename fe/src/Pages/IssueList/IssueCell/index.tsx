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
	isAllChecked: boolean;
	setIsAllChecked: Dispatch<SetStateAction<boolean>>;
	setCheckedIssues: Dispatch<SetStateAction<Set<unknown>>>;
	setAllCheckedCount: Dispatch<SetStateAction<number>>;
};

const IssueCell = ({
	dataSize,
	item,
	isAllChecked,
	setIsAllChecked,
	setCheckedIssues,
	setAllCheckedCount,
}: TIssueItem) => {
	const { id, title, author, createDate, milestone, labels: labelsInfo } = item;
	const { loginName, profileImage } = author;
	const labels = labelsInfo.map(({ id: lableId, name, labelColor }) => (
		<Label key={lableId} name={name} color={labelColor} />
	));
	const editedTime = <Moment fromNow>{createDate}</Moment>;
	const [checked, setChecked] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (checked) {
			if (!isAllChecked) setIsAllChecked(false);
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
		setChecked(event.target.checked);
	};

	useEffect(() => {
		if (isAllChecked) {
			setChecked(true);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.add(id);
				return newCheckedIssues;
			});
		} else {
			setChecked(false);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.clear();
				return newCheckedIssues;
			});
		}
	}, [isAllChecked]);

	useEffect(() => {
		setAllCheckedCount(dataSize);
	}, []);

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
