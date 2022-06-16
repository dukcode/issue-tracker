import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";

const Loading = () => {
	const navigate = useNavigate();
	const getToken = async () => {
		try {
			const response = await fetch(
				"https://github.com/login/oauth/authorize?client_id=a11a925a68811b821ef0"
			);
			const data = await response.json();
			console.log(data);
			navigate("/new-issue");
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getToken();
	}, []);

	return (
		<StyledLoading>
			<StyledLoadingMention>{LOADING}</StyledLoadingMention>
			<StyledLoadingAnimation />
		</StyledLoading>
	);
};

export default Loading;
