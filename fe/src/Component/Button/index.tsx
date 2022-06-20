import icons, { TKeysIcons } from "Util/Icons";
import StyledAddIssue from "./Button.styled";

type TButtonProps = { content: string; icon: TKeysIcons };

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
