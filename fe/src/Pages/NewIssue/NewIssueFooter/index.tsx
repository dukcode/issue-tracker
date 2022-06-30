import { useEffect } from "react";
import { useRecoilState, Resetter, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { useIssuesPost, TIssuesInfo } from "Hooks/useIssues";
import atoms from "Atoms";
import Button from "Component/Button";
import TextButton from "Component/TextButton";
import { StyledNewIssueFooter } from "./NewIssueFooter.styled";

type TNewIssueKey = keyof typeof atoms.newIssue;

const NewIssueFooter = () => {
	const navigate = useNavigate();
	const newIssueKeys = Object.keys(atoms.newIssue) as TNewIssueKey[];
	const newIssueResetters: Resetter[] = [];
	newIssueKeys.forEach((key) => {
		const atom = atoms.newIssue[key];
		const resetter = useResetRecoilState(atom);
		newIssueResetters.push(resetter);
	});

	const [users] = useRecoilState(atoms.newIssue.users);
	const [labels] = useRecoilState(atoms.newIssue.labels);
	const [milestones] = useRecoilState(atoms.newIssue.milestones);
	const [title] = useRecoilState(atoms.newIssue.title);
	const [desc] = useRecoilState(atoms.newIssue.desc);
	const assigneeIds = users.map((user) => user.id);
	const labelIds = labels.map((label) => label.id);
	const milestoneId = milestones[0]?.id;
	const commentCreateRequest = { content: desc };
	const newIssuesInfo: TIssuesInfo = {
		title,
		assigneeIds,
		labelIds,
		milestoneId,
		commentCreateRequest,
	};
	const { mutate, isSuccess, isLoading } = useIssuesPost();

	const deleteNewIssueInfo = () => {
		newIssueResetters.forEach((resetter) => resetter());
		navigate("/");
	};

	const handleButtonClick = () => {
		mutate(newIssuesInfo);
	};

	const handleTextButtonClick = () => {
		deleteNewIssueInfo();
	};

	useEffect(() => {
		if (isSuccess) deleteNewIssueInfo();
	}, [isSuccess]);

	return (
		<StyledNewIssueFooter>
			<TextButton
				icon="RemoveCircleOutline"
				content="작성 취소"
				handleClick={handleTextButtonClick}
			/>
			<Button
				content="완료"
				size="medium"
				clickHandler={handleButtonClick}
				disableOption={isLoading || !title.length || !desc.length}
			/>
		</StyledNewIssueFooter>
	);
};

export default NewIssueFooter;
