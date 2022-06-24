import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import issueListApi from "Api/issueListApi";
import useCookieUserInfo from "Hooks";
import MainLoading from "Pages/Main/MainLoading";
import IssueCell from "Pages/IssueList/IssueCell";
import TIssueData from "Pages/IssueList/mockData";
import StyledContent from "Component/StyledContent";
import IssueListContentHeader from "./IssueListContentHeader";

const countsDefault = { openCount: 0, closedCount: 0 };

type TGetNewIssueCells = {
	data: TIssueData[];
	isAllChecked: boolean;
	setIsAllChecked: Dispatch<SetStateAction<boolean>>;
	setCheckedIssues: Dispatch<SetStateAction<Set<unknown>>>;
	setAllCheckedCount: Dispatch<SetStateAction<number>>;
};

const getNewIssueCells = ({
	data,
	isAllChecked,
	setIsAllChecked,
	setCheckedIssues,
	setAllCheckedCount,
}: TGetNewIssueCells) =>
	data
		.reverse()
		.map((item: TIssueData) => (
			<IssueCell
				key={item.id}
				dataSize={data.length}
				item={item}
				isAllChecked={isAllChecked}
				setIsAllChecked={setIsAllChecked}
				setCheckedIssues={setCheckedIssues}
				setAllCheckedCount={setAllCheckedCount}
			/>
		));

const IssueListContent = () => {
	const [counts, setCounts] = useState(countsDefault);
	const [issueCells, setIssueCells] = useState([<MainLoading key="1" />]);
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const [isAllChecked, setIsAllChecked] = useState(false);
	const [checkedIssues, setCheckedIssues] = useState(new Set());
	const [allCheckedCount, setAllCheckedCount] = useState(0);

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

		setIssueCells(
			getNewIssueCells({
				data,
				isAllChecked,
				setIsAllChecked,
				setCheckedIssues,
				setAllCheckedCount,
			})
		);
		setCounts({ openCount, closedCount });
	};

	useEffect(() => {
		setIssueCells([<MainLoading key="1" />]);
		getIssueList();
		checkedIssues.clear();
		setCheckedIssues(checkedIssues);
	}, [searchParams]);

	useEffect(() => {
		getIssueList();
	}, [isAllChecked]);

	useEffect(() => {
		if (allCheckedCount && checkedIssues.size === allCheckedCount) setIsAllChecked(true);
	}, [checkedIssues]);

	return (
		<StyledContent>
			<IssueListContentHeader
				counts={counts}
				isAllChecked={isAllChecked}
				setIsAllChecked={setIsAllChecked}
				checkedIssues={checkedIssues}
			/>
			{issueCells}
		</StyledContent>
	);
};

export default IssueListContent;
