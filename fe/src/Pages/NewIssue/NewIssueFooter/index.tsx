import { useRecoilState } from "recoil";

import atoms from "Atoms";
import Button from "Component/Button";
import { StyledNewIssueFooter } from "./NewIssueFooter.styled";

const NewIssueFooter = () => {
	const [users] = useRecoilState(atoms.newIssue.users);
	const [labels] = useRecoilState(atoms.newIssue.labels);

	return (
		<StyledNewIssueFooter>
			<div>취소 버튼 위치</div>
			<Button
				content="완료"
				size="medium"
				clickHandler={() => {
					console.log(users, labels);
				}}
			/>
		</StyledNewIssueFooter>
	);
};

export default NewIssueFooter;
