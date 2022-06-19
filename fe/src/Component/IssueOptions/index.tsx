import icons from "Util/Icons";
import { StyledNewIssueOptions, StyledNewIssueOption } from "./NewIssueOptions.styled";

const issueOptionsInfo = [
	{ id: 1, name: "담당자" },
	{ id: 2, name: "레이블" },
	{ id: 3, name: "마일스톤" },
];
const { AddBox } = icons;

const NewIssueOptions = () => {
	const issueOptions = issueOptionsInfo.map(({ id, name }) => {
		return (
			<StyledNewIssueOption>
				<div key={id}>{name}</div>
				<AddBox size={25} />
			</StyledNewIssueOption>
		);
	});

	return <StyledNewIssueOptions>{issueOptions}</StyledNewIssueOptions>;
};

export default NewIssueOptions;
