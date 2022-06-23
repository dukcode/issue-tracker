import React, { useState, useEffect } from "react";
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
};

const getNewIssueCells = ({ data, allChecked, setAllChecked }: TGetNewIssueCells) =>
	data
		.reverse()
		.map((item: TIssueData) => (
			<IssueCell key={item.id} item={item} allChecked={allChecked} setAllChecked={setAllChecked} />
		));

const IssueListContent = () => {
	const [counts, setCounts] = useState(countsDefault);
	const [issueCells, setIssueCells] = useState([<MainLoading key="1" />]);
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const [allChecked, setAllChecked] = useState(false);

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

		setIssueCells(getNewIssueCells({ data, allChecked, setAllChecked }));
		setCounts({ openCount, closedCount });
	};

	useEffect(() => {
		setIssueCells([<MainLoading key="1" />]);
		getIssueList();
	}, [searchParams]);

	useEffect(() => {
		getIssueList();
	}, [allChecked]);

	return (
		<StyledContent>
			<IssueListContentHeader
				counts={counts}
				allChecked={allChecked}
				setAllChecked={setAllChecked}
			/>
			{issueCells}
		</StyledContent>
	);
};

export default IssueListContent;
