import FilterBar from "Component/FilterBar";
import OptionTabs from "Component/OptionTabs";
import StyledOptionsBox from "./IssueListOptions.styled";

const OptionsBox = () => {
	return (
		<StyledOptionsBox>
			<FilterBar />
			<OptionTabs />
		</StyledOptionsBox>
	);
};

export default OptionsBox;
