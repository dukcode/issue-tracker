import { useIssuesGet, useIssuesPatch } from "Hooks/useIssues";
import { useParams } from "react-router-dom";

import Button from "Component/Button";
import {
	StyledIssueDetailHeaderTitle,
	StyledTitleButtons,
	StyledIssueDetailHeaderName,
} from "./IssueDetailHeaderTitle.styled";

const IssueDetailHeaderTitle = () => {
	const id = useParams()?.id;
	const { data } = useIssuesGet({ id });
	const title = data?.title;
	const status = data?.status;
	const { mutate } = useIssuesPatch({ id });

	const handleClickStatusButton = (buttonStatus: "CLOSED" | "OPEN") => {
		mutate({ status: buttonStatus });
	};

	return (
		<StyledIssueDetailHeaderTitle>
			<StyledIssueDetailHeaderName>
				<div>{title}</div>
				<div>#{id}</div>
			</StyledIssueDetailHeaderName>
			<StyledTitleButtons>
				<Button icon="DriveFileRenameOutline" content="제목 편집" reverse={true} />
				{status === "OPEN" && (
					<Button
						icon="Inventory"
						content="이슈 닫기"
						reverse={true}
						clickHandler={() => handleClickStatusButton("CLOSED")}
					/>
				)}
				{status === "CLOSED" && (
					<Button
						icon="ErrorOutline"
						content="다시 열기"
						reverse={true}
						clickHandler={() => handleClickStatusButton("OPEN")}
					/>
				)}
			</StyledTitleButtons>
		</StyledIssueDetailHeaderTitle>
	);
};

export default IssueDetailHeaderTitle;
