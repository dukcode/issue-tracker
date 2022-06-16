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
} from "./IssueCells.styled";

const { ErrorOutline, EmojiFlags } = icons;

type TIssueItem = {
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
};

type TIssueItems = {
	issueItems: TIssueItem[];
};

const IssueCells = ({ issueItems }: TIssueItems) => {
	const issueList = issueItems
		.slice(0)
		.reverse()
		.map((item: TIssueItem) => (
			<StyledIssueCell key={item.id}>
				<IssueCellLeft>
					<StyledCheckbox>
						<Checkbox size="small" color="default" />
					</StyledCheckbox>
					<IssueInfo>
						<IssueInfoTop>
							<Title>
								<ErrorOutline colorset="blue" size={18} />
								{item.title}
							</Title>
						</IssueInfoTop>
						<IssueInfoBottom>
							<IssueNumber>#{item.id}</IssueNumber>
							<AuthorTimeStamp>
								이 이슈가 {item.timeStamp} 전, {item.author}님에 의해 작성되었습니다
							</AuthorTimeStamp>
							<MileStone>
								<EmojiFlags colorset="label" size={18} /> {item.mileStone}
							</MileStone>
						</IssueInfoBottom>
					</IssueInfo>
				</IssueCellLeft>
				<IssueCellRight>
					<UserImg img={user2} size="small" />
				</IssueCellRight>
			</StyledIssueCell>
		));

	return <div>{issueList}</div>;
};

export type { TIssueItem };
export default IssueCells;
