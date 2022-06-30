import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

import { useIssuesGet } from "Hooks/useIssues";
import icons from "Util/Icons";
import {
	StyledIssueDetailHeaderInfo,
	StyledIssueDetailStatus,
	StyledIssueDetailDesc,
} from "./IssueDetailHeaderInfo.styled";

type TAuthor = {
	id: number;
	loginName: string;
	name: string;
	email: string | null;
	profileImage: string;
};

type TIssueDetailHeaderInfos = {
	createDate: string;
	status: "OPEN" | "CLOSED";
	commentsCount: number;
	author: TAuthor;
};

const statusName = {
	OPEN: "열린 이슈",
	CLOSED: "닫힌 이슈",
};
const { InfoOutlined } = icons;
const defaultInfo: TIssueDetailHeaderInfos = {
	createDate: "2000-01-01T00:00:00",
	status: "OPEN",
	commentsCount: 0,
	author: {
		id: 0,
		loginName: "",
		name: "",
		email: null,
		profileImage: "",
	},
};

const IssueDetailHeaderInfo = () => {
	const id = useParams()?.id;
	const { data, isLoading, isSuccess } = useIssuesGet({ id });
	const [infos, setInfos] = useState<TIssueDetailHeaderInfos>(defaultInfo);
	const {
		status,
		createDate,
		commentsCount,
		author: { name },
	} = infos;
	const statusDesc = status ? statusName[status] : null;
	const commentsCountDesc = `코멘트 ${commentsCount || 0}개`;
	const createDateMention = createDate ? moment(createDate).fromNow() : "0초 전";
	const createDateDesc = `이 이슈가 ${createDateMention}에 ${name}님에 의해 열렸습니다`;

	useEffect(() => {
		if (!isLoading && isSuccess) {
			const {
				status: newStatus,
				createDate: newCreateDate,
				comments: { count },
				author,
			} = data;
			const newInfos: TIssueDetailHeaderInfos = {
				status: newStatus,
				commentsCount: count,
				createDate: newCreateDate,
				author,
			};
			setInfos(newInfos);
		}
	}, [isLoading]);

	return (
		<StyledIssueDetailHeaderInfo>
			<StyledIssueDetailStatus>
				<InfoOutlined colorset="blue" size={14} />
				{statusDesc}
			</StyledIssueDetailStatus>
			<StyledIssueDetailDesc>{`${createDateDesc} ∙ ${commentsCountDesc}`}</StyledIssueDetailDesc>
		</StyledIssueDetailHeaderInfo>
	);
};

export default IssueDetailHeaderInfo;
