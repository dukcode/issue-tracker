import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";

const Loading = () => {
	const { search } = useLocation();
	const navigate = useNavigate();
	const baseURL = `${process.env.REACT_APP_LOGIN_SERVER}${search}`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "text/plain",
		},
		withCredentials: true,
	});

	const getToken = async () => {
		try {
			const response = await client.get("/", { withCredentials: true });
			console.log(response);
			navigate("/");
		} catch (error) {
			console.error(error);
			// navigate("/login");
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
