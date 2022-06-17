import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import user2 from "Img/user2.jpeg";
import UserImg from "Component/UserImg";
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
} from "./IssueCell.styled";

const { ErrorOutline, EmojiFlags } = icons;

type TIssueItem = {
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
};

const IssueCell = ({ id, title, author, timeStamp, mileStone }: TIssueItem) => {
	return (
		<StyledIssueCell>
			<IssueCellLeft>
				<StyledCheckbox>
					<Checkbox size="small" color="default" />
				</StyledCheckbox>
				<IssueInfo>
					<IssueInfoTop>
						<Title>
							<ErrorOutline colorset="blue" size={18} />
							{title}
						</Title>
					</IssueInfoTop>
					<IssueInfoBottom>
						<IssueNumber>#{id}</IssueNumber>
						<AuthorTimeStamp>
							이 이슈가 {timeStamp} 전, {author}님에 의해 작성되었습니다
						</AuthorTimeStamp>
						<MileStone>
							<EmojiFlags colorset="label" size={18} /> {mileStone}
						</MileStone>
					</IssueInfoBottom>
				</IssueInfo>
			</IssueCellLeft>
			<IssueCellRight>
				<UserImg img={user2} size="small" />
			</IssueCellRight>
		</StyledIssueCell>
	);
};

export default IssueCell;
