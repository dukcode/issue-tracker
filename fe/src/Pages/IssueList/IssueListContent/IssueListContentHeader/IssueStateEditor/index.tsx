import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useIssuesPatch } from "Hooks/useIssues";
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
	const [isDown, setIsDown] = useState(false);
	const [searchParams] = useSearchParams();
	const { mutate, isSuccess } = useIssuesPatch();
	const query = searchParams.get("q");
	const isQueryOpen = query === "is:open" || !query;
	const isQueryClosed = query === "is:closed";

	const editClickedIssuesState = async (status: "OPEN" | "CLOSED") => {
		const isSameQuery =
			(status === "OPEN" && isQueryOpen) || (status === "CLOSED" && isQueryClosed);
		if (isSameQuery) return;
		const issueIds: number[] = [];
		checkedIssues.forEach((issue) => {
			issueIds.push(issue);
		});

		const editedIssuesOptions = { issueIds, status };
		mutate(editedIssuesOptions);
	};

	const issueStateEditorContents: TPopupContentProps[] = [
		{
			id: 0,
			name: "선택한 이슈 열기",
			clickEventHandler: () => editClickedIssuesState("OPEN"),
			isCheckBox: false,
			disabledOption: isQueryOpen,
		},
		{
			id: 1,
			name: "선택한 이슈 닫기",
			clickEventHandler: () => editClickedIssuesState("CLOSED"),
			isCheckBox: false,
			disabledOption: isQueryClosed,
		},
	];

	useEffect(() => {
		if (isSuccess) window.location.reload();
	}, [isSuccess]);

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
