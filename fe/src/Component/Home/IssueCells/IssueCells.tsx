import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import user2 from "Img/user2.jpeg";
import UserImg from "Component/UserImg";
import {
	IssueCell,
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

type issueItem = {
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
};

type issueItemType = {
	issueItems: issueItem[];
};

const IssueCells = ({ issueItems }: issueItemType) => {
	const issueList = issueItems
		.slice(0)
		.reverse()
		.map((item: issueItem) => (
			<IssueCell key={item.id}>
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
			</IssueCell>
		));

	return <div>{issueList}</div>;
};

export type { issueItem };
export default IssueCells;
