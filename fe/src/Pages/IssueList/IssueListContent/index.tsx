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
	allChecked: boolean;
	setAllChecked: React.Dispatch<React.SetStateAction<boolean>>;
	checkedIssues: Set<unknown>;
	setCheckedIssues: Dispatch<SetStateAction<Set<unknown>>>;
};

const getNewIssueCells = ({
	data,
	allChecked,
	setAllChecked,
	checkedIssues,
	setCheckedIssues,
}: TGetNewIssueCells) =>
	data
		.reverse()
		.map((item: TIssueData) => (
			<IssueCell
				dataSize={data.length}
				key={item.id}
				item={item}
				allChecked={allChecked}
				setAllChecked={setAllChecked}
				checkedIssues={checkedIssues}
				setCheckedIssues={setCheckedIssues}
			/>
		));

const IssueListContent = () => {
	const [counts, setCounts] = useState(countsDefault);
	const [issueCells, setIssueCells] = useState([<MainLoading key="1" />]);
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const [allChecked, setAllChecked] = useState(false);
	const [checkedIssues, setCheckedIssues] = useState(new Set());

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
			getNewIssueCells({ data, allChecked, setAllChecked, checkedIssues, setCheckedIssues })
		);
		setCounts({ openCount, closedCount });
	};

	useEffect(() => {
		setIssueCells([<MainLoading key="1" />]);
		getIssueList();
		// console.log(checkedIssues);

		checkedIssues.clear();
		setCheckedIssues(checkedIssues);
	}, [searchParams]);

	useEffect(() => {
		getIssueList();
	}, [allChecked]);

	useEffect(() => {
		// 여긴 왜 안 먹지 -> 해결 됨
		console.log("not here", checkedIssues.size);
		if (checkedIssues.size === 3) setAllChecked(true);
	}, [checkedIssues]);

	return (
		<StyledContent>
			<IssueListContentHeader
				counts={counts}
				allChecked={allChecked}
				setAllChecked={setAllChecked}
				checkedIssues={checkedIssues}
			/>
			{issueCells}
		</StyledContent>
	);
};

export default IssueListContent;
