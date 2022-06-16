import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { useCookies } from "react-cookie";
import axios from "axios";

import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";
// const USER_INFO = "userInfo";

const Loading = () => {
	// const [cookies, setCookie] = useCookies([USER_INFO]);
	// console.log(cookies);
	const { search } = useLocation();
	const navigate = useNavigate();
	const baseURL = `${process.env.REACT_APP_LOGIN_SERVER}${search}`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		withCredentials: true,
	});

	const getToken = async () => {
		try {
			const response = await client.get("/", { withCredentials: true });
			console.log(response);
			// const { profileImage, accessToken } = response;
			// setCookie(
			// 	USER_INFO,
			// 	{ profileImage, accessToken },
			// 	{ path: "/", expires: new Date(2040, 11, 11) }
			// );
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
