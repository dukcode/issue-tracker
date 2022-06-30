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

type TIssueDetailHeaderInfos = {
	createDate?: string;
	status?: "OPEN" | "CLOSED";
	commentsCount?: number;
};

const statusName = {
	OPEN: "열린 이슈",
	CLOSED: "닫힌 이슈",
};
const { InfoOutlined } = icons;

const IssueDetailHeaderInfo = () => {
	const id = useParams()?.id;
	const { data, isLoading, isSuccess } = useIssuesGet(id);
	const [infos, setInfos] = useState<TIssueDetailHeaderInfos>({});
	const { status, createDate, commentsCount } = infos;
	const statusDesc = status ? statusName[status] : null;
	const commentsCountDesc = `코멘트 ${commentsCount || 0}개`;
	const createDateMention = createDate ? moment(createDate).fromNow() : "0초 전";
	const createDateDesc = `이 이슈가 ${createDateMention}에 님에 의해 열렸습니다`;

	useEffect(() => {
		if (!isLoading && isSuccess) {
			const {
				status: newStatus,
				createDate: newCreateDate,
				comments: { count },
			} = data;
			const newInfos: TIssueDetailHeaderInfos = {
				status: newStatus,
				commentsCount: count,
				createDate: newCreateDate,
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
