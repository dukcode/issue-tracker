import icons from "Util/Icons";
import StyledAddIssue from "./Button.styled";

type TIcons = typeof icons;
type TButtonProps = { content: string; icon: keyof TIcons };

const Button = ({ content, icon }: TButtonProps) => {
	const Icon = icons[icon];

	return (
		<StyledAddIssue>
			<Icon colorset="offWhite" size={20} />
			{content}
		</StyledAddIssue>
	);
};

export default Button;
