import { useNavigate, useSearchParams } from "react-router-dom";
import { DefaultTheme, StyledComponent } from "styled-components";
import { TResultButton } from "Util/Icons";
import { SvgIconComponent } from "@mui/icons-material";
import StyledIssueOption from "./IssueOption.styled";

type TIssueOptionProps = {
	counts: { [key in string]: number };
	Icon: StyledComponent<SvgIconComponent, DefaultTheme, TResultButton>;
	isOpened: boolean;
	name: string;
	option: string;
};

const CLOSED = "closed";
const getOptionString = (option: string) => `is:${option}`;

const IssueOption = ({ counts, Icon, isOpened, name, option }: TIssueOptionProps) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const isClosed = q === getOptionString(CLOSED);

	const handleClickIssueOption = (optionString: string) => {
		const tester = { q: getOptionString(optionString) };
		const params = new URLSearchParams(tester);
		navigate(`/?${params.toString()}`);
	};

	return (
		<StyledIssueOption
			isClosed={isOpened === isClosed}
			onClick={() => handleClickIssueOption(option)}
		>
			<Icon colorset={isOpened === isClosed ? "placeholder" : "titleActive"} size={18} />
			{`${name} (${counts[`${option}Count`]})`}
		</StyledIssueOption>
	);
};

export default IssueOption;
