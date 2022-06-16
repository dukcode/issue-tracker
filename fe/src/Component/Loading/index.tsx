import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";
const USER_INFO = "userInfo";

const Loading = () => {
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const { search } = useLocation();
	const navigate = useNavigate();

	const getToken = async () => {
		const baseURL = `${process.env.REACT_APP_LOGIN_SERVER}${search}`;
		const client = axios.create({
			baseURL,
			headers: {
				"Content-Type": "application/json",
			},
		});

		try {
			const response: { profileImage: string; accessToken: string } = await client.get("");
			const { profileImage } = response;
			const { accessToken } = response;
			setCookie(
				USER_INFO,
				{ profileImage, accessToken },
				{ path: "/", expires: new Date(2040, 11, 11) }
			);
			navigate("/");
		} catch (error) {
			const e = error as Error;
			console.error(e);
			navigate("/login");
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
