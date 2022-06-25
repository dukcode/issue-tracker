import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { issuesApi } from "Api";
import useCookieUserInfo from "Hooks";
import Popup, { TPopupContentProps } from "Component/Popup";
import icons from "Util/Icons";
import StyledIssueStateEditor from "./IssueStateEditor.styled";

type TIssueStateEditorProps = {
	checkedIssues: Set<number>;
};

const { KeyboardArrowDown, KeyboardArrowUp } = icons;
const CHANGE_STATE = "상태 변경";
const EDIT_STATE = "상태 수정";

const IssueStateEditor = ({ checkedIssues }: TIssueStateEditorProps) => {
	const { accessToken } = useCookieUserInfo();
	const [isDown, setIsDown] = useState(false);
	const [searchParams] = useSearchParams();

	const editClickedIssuesState = async (status: "OPEN" | "CLOSED") => {
		const query = searchParams.get("q");
		const isSameQuery =
			(status === "OPEN" && query === "is:open") || (status === "CLOSED" && query === "is:closed");
		if (isSameQuery) return;

		const issueIds: number[] = [];
		checkedIssues.forEach((issue) => {
			issueIds.push(issue);
		});
		issuesApi.patchIssues(accessToken, issueIds, status);
		window.location.reload();
	};

	const issueStateEditorContents: TPopupContentProps[] = [
		{
			id: 0,
			name: "선택한 이슈 열기",
			clickEventHandler: () => editClickedIssuesState("OPEN"),
			isCheckBox: false,
		},
		{
			id: 1,
			name: "선택한 이슈 닫기",
			clickEventHandler: () => editClickedIssuesState("CLOSED"),
			isCheckBox: false,
		},
	];

	return (
		<Popup
			isLeft={false}
			title={CHANGE_STATE}
			contents={issueStateEditorContents}
			setOption={setIsDown}
		>
			<StyledIssueStateEditor>
				<div>{EDIT_STATE}</div>
				{isDown ? (
					<KeyboardArrowDown colorset="label" size={20} />
				) : (
					<KeyboardArrowUp colorset="label" size={20} />
				)}
			</StyledIssueStateEditor>
		</Popup>
	);
};

export default IssueStateEditor;
