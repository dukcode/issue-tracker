import StyledOptionsBox from "./OptionsBox.styled";
import FilterBar from "./FilterBar";
import OptionTabs from "./OptionTabs";

const OptionsBox = () => {
	return (
		<StyledOptionsBox>
			<FilterBar />
			<OptionTabs />
		</StyledOptionsBox>
	);
};

export default OptionsBox;
