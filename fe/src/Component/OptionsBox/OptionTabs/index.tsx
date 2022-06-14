import icons from "Util/Icons";
import { StyledOptionTabs, StyledTabsLabelMilestone, StyledAddIssue } from "./OptionsTabs.styled";

const { BookmarksOutlined, DirectionsOutlined, AddBox } = icons;
const LABEL = "레이블";
const MILESTONE = "마일스톤";
const ADD_ISSUE = "이슈 작성";
const labelCount = 2;
const milestoneCount = 3;

const OptionTabs = () => {
	return (
		<StyledOptionTabs>
			<StyledTabsLabelMilestone>
				<div>
					<BookmarksOutlined colorset="label" size={20} />
					<div>{LABEL}</div>
					<div>({labelCount})</div>
				</div>
				<div>
					<DirectionsOutlined colorset="label" size={20} />
					<div>{MILESTONE}</div>
					<div>({milestoneCount})</div>
				</div>
			</StyledTabsLabelMilestone>
			<StyledAddIssue>
				<AddBox colorset="offWhite" size={20} />
				{ADD_ISSUE}
			</StyledAddIssue>
		</StyledOptionTabs>
	);
};

export default OptionTabs;
