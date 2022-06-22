import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

import issueListApi from "Api/issueListApi";
import useCookieUserInfo from "Hooks";
import icons from "Util/Icons";
import OptionsBox from "Component/OptionsBox";
import MainLoading from "Pages/Main/MainLoading";
import {
	IssueContainer,
	IssueHeader,
	IssueHeaderLeft,
	IssueCategory,
	OpenedIssue,
	ClosedIssue,
	StyledCheckbox,
} from "./Home.styled";
import FilterCategoryList, { listItem } from "./FilterCategoryList";
import IssueCell from "./IssueCell";
import TIssueData from "./mockData";

const filterCategoryItems: listItem[] = [
	{ id: 1, category: "담당자" },
	{ id: 2, category: "레이블" },
	{ id: 3, category: "마일스톤" },
	{ id: 4, category: "작성자" },
];

const { ErrorOutline, Inventory } = icons;
const OPENED_ISSUE = "열린 이슈";
const CLOSED_ISSUE = "닫힌 이슈";
const OPEN = "open";
const CLOSED = "closed";
const countsDefault = { openCount: 0, closedCount: 0 };
const getOptionString = (option: string) => `is:${option}`;

const Home = () => {
	const [counts, setCounts] = useState(countsDefault);
	const [issueCells, setIssueCells] = useState(<MainLoading />);
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const isClosed = q === getOptionString(CLOSED);

	const handleClickIssueOption = (option: string) => {
		const tester = { q: getOptionString(option) };
		const params = new URLSearchParams(tester);
		navigate(`/?${params.toString()}`);
	};

	const getIssueList = async () => {
		const { accessToken } = cookieUserInfo;
		if (!accessToken) {
			navigate("/login");
			return;
		}

		const issueListResponse = await issueListApi.getIssueList(accessToken, q);
		const {
			data: { data, openCount, closedCount },
			status,
		} = issueListResponse;
		if (status !== 200) {
			navigate("/login");
			return;
		}

		const newIssueCells = data
			.reverse()
			.map((item: TIssueData) => (
				<IssueCell
					key={item.id}
					id={item.id}
					title={item.title}
					author={item.author.loginName}
					timeStamp={item.createDate}
					mileStone={item.milestone.title}
					profileImage={item.author.profileImage}
				/>
			));

		setIssueCells(newIssueCells);
		setCounts({ openCount, closedCount });
	};

	useEffect(() => {
		setIssueCells(<MainLoading />);
		getIssueList();
	}, [searchParams]);

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
							<OpenedIssue isClosed={isClosed} onClick={() => handleClickIssueOption(OPEN)}>
								<ErrorOutline colorset={!isClosed ? "titleActive" : "label"} size={18} />
								{`${OPENED_ISSUE} (${counts.openCount})`}
							</OpenedIssue>
							<ClosedIssue isClosed={isClosed} onClick={() => handleClickIssueOption(CLOSED)}>
								<Inventory colorset={isClosed ? "titleActive" : "label"} size={18} />
								{`${CLOSED_ISSUE} (${counts.closedCount})`}
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
