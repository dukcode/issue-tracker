import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import atoms from "Atoms";
import { useIssuesGet } from "Hooks/useIssues";
import IssuesNotification from "Pages/IssueList/IssuesNotification";
import IssueCell from "Pages/IssueList/IssueCell";
import { TIssueData } from "Pages/IssueList/mockData";
import StyledContent from "Component/StyledContent";
import IssueListContentHeader from "./IssueListContentHeader";

type TGetNewIssueCells = {
	data: TIssueData[];
};

const getNewIssueCells = ({ data }: TGetNewIssueCells) => {
	if (!data.length) return [<IssuesNotification mention="등록된 이슈가 없습니다" key="1" />];
	return data.reverse().map((item: TIssueData) => <IssueCell key={item.id} item={item} />);
};

const IssueListContent = () => {
	const setCounts = useSetRecoilState(atoms.issueList.counts);
	const setListCount = useSetRecoilState(atoms.issueList.listCount);
	const [issueCells, setIssueCells] = useState([<IssuesNotification key="1" />]);
	const [isShowed, setIsShowed] = useState(false);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const { data: issuesData, isFetching, isError } = useIssuesGet({ query: q });

	const updateIssueList = () => {
		if (!issuesData) return;

		const { data, openCount, closedCount } = issuesData;
		const newIssueCells = getNewIssueCells({ data });
		setIssueCells(newIssueCells);
		setCounts({ openCount, closedCount });
		setListCount(data.length);
		setIsShowed(true);
	};

	useEffect(() => {
		setIsShowed(false);
	}, [searchParams]);

	useEffect(() => {
		if (isFetching) return;
		updateIssueList();
	}, [isFetching]);

	useEffect(() => {
		if (isError) navigate("/login");
	}, [isError]);

	return (
		<StyledContent>
			<IssueListContentHeader />
			{isShowed ? issueCells : <IssuesNotification />}
		</StyledContent>
	);
};

export default IssueListContent;
