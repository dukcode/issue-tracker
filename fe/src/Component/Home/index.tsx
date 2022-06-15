import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import {
	IssueContainer,
	IssueHeader,
	IssueHeaderLeft,
	IssueCategory,
	OpenedIssue,
	ClosedIssue,
	IssueCell,
	IssueCellLeft,
	IssueInfo,
	IssueInfoTop,
	IssueInfoBottom,
	IssueCellRight,
	AuthorImg,
	Title,
	IssueNumber,
	AuthorTimeStamp,
	MileStone,
	StyledCheckbox,
} from "./Home.styled";
import FilterCategoryList from "./FilterCategoryList/FilterCategoryList";
import type { listItem } from "./FilterCategoryList/FilterCategoryList";

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자" },
	{ id: 2, category: "레이블" },
	{ id: 3, category: "마일스톤" },
	{ id: 4, category: "작성자" },
];

const { ErrorOutline, Inventory, EmojiFlags } = icons;

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

// TODO: label 추가해야 함
const issueCellItems: issueItem[] = [
	{
		id: 1,
		title: "FE 이슈트래커 개발",
		author: "Maeve",
		timeStamp: "22 일",
		mileStone: "[FE] issue-tracker Week 1",
	},
	{
		id: 2,
		title: "feat: Header 구현",
		author: "Jinjeon",
		timeStamp: "2 일",
		mileStone: "[FE] issue-tracker Week 2",
	},
	{
		id: 3,
		title: "API 설계 및 DB 설계 문서화",
		author: "dukcode",
		timeStamp: "1 시간",
		mileStone: "[BE] issue-tracker Week 1",
	},
];

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
					<AuthorImg>이미지</AuthorImg>
				</IssueCellRight>
			</IssueCell>
		));

	return <div>{issueList}</div>;
};

const Home = () => {
	const OPENED_ISSUE = "열린 이슈";
	const CLOSED_ISSUE = "닫힌 이슈";

	return (
		<IssueContainer>
			<IssueHeader>
				<IssueHeaderLeft>
					<Checkbox size="small" color="default" />
					<IssueCategory>
						<OpenedIssue>
							<ErrorOutline colorset="titleActive" size={18} /> {OPENED_ISSUE}
						</OpenedIssue>
						<ClosedIssue>
							<Inventory colorset="titleActive" size={18} /> {CLOSED_ISSUE}
						</ClosedIssue>
					</IssueCategory>
				</IssueHeaderLeft>
				<FilterCategoryList listItems={filterCategoryItems} />
			</IssueHeader>
			<IssueCells issueItems={issueCellItems} />
		</IssueContainer>
	);
};

export default Home;
