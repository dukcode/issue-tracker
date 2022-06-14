import StyledOptionsBox from "./OptionsBox.styled";
import FilterBar from "./FilterBar";

const OptionsBox = () => {
	return (
		<StyledOptionsBox>
			<FilterBar />
			<div>label area</div>
		</StyledOptionsBox>
	);
};

export default OptionsBox;
