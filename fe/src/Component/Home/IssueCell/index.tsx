import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import user2 from "Img/user2.jpeg";
import UserImg from "Component/UserImg";
import Label from "Component/Label";
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
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
};

const labelsInfo = [
	{ id: 1, name: "docs", color: "#ba874c" },
	{ id: 2, name: "feat", color: "#2a578e" },
];

const IssueCell = ({ id, title, author, timeStamp, mileStone }: TIssueItem) => {
	const labels = labelsInfo.map(({ id: lableId, name, color }) => (
		<Label key={lableId} name={name} color={color} />
	));

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
						<StyledLabelsWrapper>{labels}</StyledLabelsWrapper>
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
