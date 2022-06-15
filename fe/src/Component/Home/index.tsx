import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import {
	IssueContainer,
	IssueHeader,
	IssueHeaderLeft,
	IssueCategory,
	OpenedIssue,
	ClosedIssue,
} from "./Home.styled";
import FilterCategoryList from "./FilterCategoryList/FilterCategoryList";
import type { listItem } from "./FilterCategoryList/FilterCategoryList";
import IssueCells from "./IssueCells/IssueCells";
import type { issueItem } from "./IssueCells/IssueCells";

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자" },
	{ id: 2, category: "레이블" },
	{ id: 3, category: "마일스톤" },
	{ id: 4, category: "작성자" },
];

const { ErrorOutline, Inventory } = icons;

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
