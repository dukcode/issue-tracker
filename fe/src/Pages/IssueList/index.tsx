import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

import issueListApi from "Api/issueListApi";
import useCookieUserInfo from "Hooks";
import icons from "Util/Icons";
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

const Home = () => {
	const [issueCells, setIssueCells] = useState([]);
	const navigate = useNavigate();
	const cookieUserInfo = useCookieUserInfo();

	const getIssueList = async () => {
		const { accessToken } = cookieUserInfo;

		if (!accessToken) {
			navigate("/login");
			return;
		}

		const issueListResponse = await issueListApi.getIssueList(accessToken);
		const {
			data: { data },
		} = issueListResponse;

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
				/>
			));
		setIssueCells(newIssueCells);
	};

	useEffect(() => {
		getIssueList();
	}, []);

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
