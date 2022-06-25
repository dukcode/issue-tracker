import {
	StyledNotification,
	StyledLoadingAnimation,
	StyledMention,
} from "./IssuesNotification.styled";

const IssuesNotification = ({ mention }: { mention?: string }) => {
	const notificationContent = mention ? (
		<StyledMention>{mention}</StyledMention>
	) : (
		<StyledLoadingAnimation />
	);

	return <StyledNotification>{notificationContent}</StyledNotification>;
};

IssuesNotification.defaultProps = {
	mention: "",
};

export default IssuesNotification;
