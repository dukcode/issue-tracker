import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import issuesApi from "Api/issuesApi";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
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
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const [isAllChecked, setIsAllChecked] = useState(false);
	const [checkedIssues, setCheckedIssues] = useState(new Set<number>());
	const [allCheckedCount, setAllCheckedCount] = useState(0);

	const getIssueList = async () => {
		const { accessToken } = cookieUserInfo;
		if (!accessToken) {
			navigate("/login");
			return;
		}

		const issueListResponse = await issuesApi.getIssues(accessToken, q);
		const {
			data: { data, openCount, closedCount },
			status,
		} = issueListResponse;
		if (status !== 200) {
			navigate("/login");
			return;
		}

		const newIssueCells = getNewIssueCells({
			data,
			isAllChecked,
			setIsAllChecked,
			setCheckedIssues,
			setAllCheckedCount,
		});

		setIssueCells(newIssueCells);
		setCounts({ openCount, closedCount });
	};

	useEffect(() => {
		setIssueCells([<IssuesNotification key="1" />]);
		getIssueList();
		checkedIssues.clear();
		setCheckedIssues(checkedIssues);
	}, [searchParams]);

	useEffect(() => {
		getIssueList();
	}, [isAllChecked]);

	useEffect(() => {
		if (allCheckedCount && checkedIssues.size === allCheckedCount) setIsAllChecked(true);
		if (checkedIssues.size === 0) setIsAllChecked(false);
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
