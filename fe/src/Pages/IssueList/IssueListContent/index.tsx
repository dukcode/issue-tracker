import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useIssuesGet } from "Hooks/useIssues";
import IssuesNotification from "Pages/IssueList/IssuesNotification";
import IssueCell from "Pages/IssueList/IssueCell";
import { TIssueData } from "Pages/IssueList/mockData";
import StyledContent from "Component/StyledContent";
import IssueListContentHeader from "./IssueListContentHeader";

const countsDefault = { openCount: 0, closedCount: 0 };

type TGetNewIssueCells = {
	data: TIssueData[];
	isAllChecked: boolean;
	setIsAllChecked: Dispatch<SetStateAction<boolean>>;
	setCheckedIssues: Dispatch<SetStateAction<Set<number>>>;
	setAllCheckedCount: Dispatch<SetStateAction<number>>;
};

const getNewIssueCells = ({
	data,
	isAllChecked,
	setIsAllChecked,
	setCheckedIssues,
	setAllCheckedCount,
}: TGetNewIssueCells) => {
	if (!data.length) return [<IssuesNotification mention="등록된 이슈가 없습니다" key="1" />];
	return data
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
};

const IssueListContent = () => {
	const [counts, setCounts] = useState(countsDefault);
	const [issueCells, setIssueCells] = useState([<IssuesNotification key="1" />]);
	const [isShowed, setIsShowed] = useState(false);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const [isAllChecked, setIsAllChecked] = useState(false);
	const [checkedIssues, setCheckedIssues] = useState(new Set<number>());
	const [allCheckedCount, setAllCheckedCount] = useState(0);
	const { data: issuesData, isFetching, isError } = useIssuesGet({ query: q });

	const updateIssueList = () => {
		if (!issuesData) return;

		const { data, openCount, closedCount } = issuesData;
		const newIssueCells = getNewIssueCells({
			data,
			isAllChecked,
			setIsAllChecked,
			setCheckedIssues,
			setAllCheckedCount,
		});
		setIssueCells(newIssueCells);
		setCounts({ openCount, closedCount });
		setIsShowed(true);
	};

	useEffect(() => {
		setIsShowed(false);
	}, [searchParams]);

	useEffect(() => {
		if (allCheckedCount && checkedIssues.size === allCheckedCount) setIsAllChecked(true);
		if (checkedIssues.size === 0) setIsAllChecked(false);
	}, [checkedIssues]);

	useEffect(() => {
		if (isFetching) return;
		checkedIssues.clear();
		setCheckedIssues(checkedIssues);
		updateIssueList();
	}, [isFetching]);

	useEffect(() => {
		if (isError) navigate("/login");
	}, [isError]);

	return (
		<StyledContent>
			<IssueListContentHeader
				counts={counts}
				isAllChecked={isAllChecked}
				setIsAllChecked={setIsAllChecked}
				checkedIssues={checkedIssues}
			/>
			{isShowed ? issueCells : <IssuesNotification />}
		</StyledContent>
	);
};

export default IssueListContent;
