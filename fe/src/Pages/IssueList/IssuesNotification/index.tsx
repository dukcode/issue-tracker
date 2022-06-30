import LoadingAnimation from "Component/Loading";
import { StyledNotification, StyledMention } from "./IssuesNotification.styled";

const IssuesNotification = ({ mention }: { mention?: string }) => {
	const notificationContent = mention ? (
		<StyledMention>{mention}</StyledMention>
	) : (
		<LoadingAnimation size={100} border={15} color="line" />
	);

	return <StyledNotification>{notificationContent}</StyledNotification>;
};

IssuesNotification.defaultProps = {
	mention: "",
};

export default IssuesNotification;
