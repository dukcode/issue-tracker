import icons from "Util/Icons";
import StyledAddIssue from "./Button.styled";

const { AddBox } = icons;

const Button = ({ content }: { content: string }) => {
	return (
		<StyledAddIssue>
			<AddBox colorset="offWhite" size={20} />
			{content}
		</StyledAddIssue>
	);
};

export default Button;
