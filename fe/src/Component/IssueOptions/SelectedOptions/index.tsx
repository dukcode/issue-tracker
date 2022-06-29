import { RecoilState, useRecoilValue } from "recoil";
import { TNewIssueOption } from "Atoms";

import UserImg from "Component/UserImg";
import Label from "Component/Label";
import ProgressBar from "Component/ProgressBar";
import {
	StyledSelectedOptionUser,
	StyledSelectedOptions,
	StyledSelectedOptionLabel,
	StyledSelectedOptionMilestone,
} from "./SelectedOptions.styled";

type TSeletedOptionsProps = {
	atom: RecoilState<TNewIssueOption[]>;
};

export const SelectedOptionUsers = ({ atom }: TSeletedOptionsProps) => {
	const atomState = useRecoilValue(atom);
	const selectedOptionUsers = atomState.map(({ name, image, id }) => {
		return (
			<StyledSelectedOptionUser key={id}>
				<UserImg size="medium" img={image} />
				{name}
			</StyledSelectedOptionUser>
		);
	});
	return <StyledSelectedOptions>{selectedOptionUsers}</StyledSelectedOptions>;
};

export const SelectedOptionLabels = ({ atom }: TSeletedOptionsProps) => {
	const atomState = useRecoilValue(atom);
	const selectedOptionLabels = atomState.map(({ name, image, id }) => {
		if (!image) return null;

		return <Label name={name} color={image} key={id} />;
	});
	return <StyledSelectedOptionLabel>{selectedOptionLabels}</StyledSelectedOptionLabel>;
};

export const SelectedOptionMilestones = ({ atom }: TSeletedOptionsProps) => {
	const atomState = useRecoilValue(atom);
	const selectedOptionMilestones = atomState.map(({ name, option, id }) => {
		if (!option) return null;
		const { countOpen, countClosed } = option;
		const ratio = (countOpen / (countOpen + countClosed)) * 100;

		return (
			<StyledSelectedOptionMilestone key={id}>
				<ProgressBar ratio={ratio} />
				<div>{name}</div>
			</StyledSelectedOptionMilestone>
		);
	});

	return <div>{selectedOptionMilestones}</div>;
};
