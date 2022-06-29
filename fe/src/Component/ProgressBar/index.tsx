import { StyledProgressBar, StyledProgressBarInner } from "./ProgressBar.styled";

type TProgressBar = {
	ratio: number;
};

const ProgressBar = ({ ratio }: TProgressBar) => {
	return (
		<StyledProgressBar>
			<StyledProgressBarInner ratio={ratio} />
		</StyledProgressBar>
	);
};

export default ProgressBar;
