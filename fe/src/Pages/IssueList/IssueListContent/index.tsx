import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import issueListApi from "Api/issueListApi";
import useCookieUserInfo from "Hooks";
import MainLoading from "Pages/Main/MainLoading";
import IssueCell from "Pages/IssueList/IssueCell";
import TIssueData from "Pages/IssueList/mockData";
import StyledContent from "Component/StyledContent";
import IssueListContentHeader from "./IssueListContentHeader";

const countsDefault = { openCount: 0, closedCount: 0 };

const getNewIssueCells = (data: TIssueData[]) =>
	data
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
				labels={item.labels}
			/>
		));

const IssueListContent = () => {
	const [counts, setCounts] = useState(countsDefault);
	const [issueCells, setIssueCells] = useState([<MainLoading key="1" />]);
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");

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

		setIssueCells(getNewIssueCells(data));
		setCounts({ openCount, closedCount });
	};

	useEffect(() => {
		setIssueCells([<MainLoading key="1" />]);
		getIssueList();
	}, [searchParams]);

	return (
		<StyledContent>
			<IssueListContentHeader counts={counts} />
			{issueCells}
		</StyledContent>
	);
};

export default IssueListContent;
