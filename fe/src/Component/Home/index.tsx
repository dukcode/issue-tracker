import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import OptionsBox from "Component/OptionsBox";
import {
	IssueContainer,
	IssueHeader,
	IssueHeaderLeft,
	IssueCategory,
	OpenedIssue,
	ClosedIssue,
	StyledCheckbox,
} from "./Home.styled";
import FilterCategoryList from "./FilterCategoryList";
import IssueCell from "./IssueCell";

import type { listItem } from "./FilterCategoryList";

type TIssueItem = {
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
};

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자" },
	{ id: 2, category: "레이블" },
	{ id: 3, category: "마일스톤" },
	{ id: 4, category: "작성자" },
];

const { ErrorOutline, Inventory } = icons;

// TODO: label 추가해야 함
const issueCellItems: TIssueItem[] = [
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
	const issueCells = issueCellItems
		.reverse()
		.map((item: TIssueItem) => (
			<IssueCell
				key={item.id}
				id={item.id}
				title={item.title}
				author={item.author}
				timeStamp={item.timeStamp}
				mileStone={item.mileStone}
			/>
		));

	return (
		<>
			<OptionsBox />
			<IssueContainer>
				<IssueHeader>
					<IssueHeaderLeft>
						<StyledCheckbox>
							<Checkbox size="small" color="default" />
						</StyledCheckbox>
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
				{issueCells}
			</IssueContainer>
		</>
	);
};

export default Home;
