import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios, { AxiosError } from "axios";

import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

type TTokenResponse = { data: { profileImage: string; accessToken: string } };

const LOADING = "LOADING";
const USER_INFO = "userInfo";

const Loading = () => {
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const isLogout = Object.keys(cookies).length === 0 && cookies.constructor === Object;

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
			const response: TTokenResponse = await client.get("");
			const { profileImage } = response.data;
			const { accessToken } = response.data;
			setCookie(
				USER_INFO,
				{ profileImage, accessToken },
				{ path: "/", expires: new Date(2040, 11, 11) }
			);

			navigate("/");
		} catch (error) {
			const e = error as AxiosError;
			const status = e.response?.status;
			if (status === 500) navigate("/login");
		}
	};

	useEffect(() => {
		if (isLogout) {
			getToken();
		} else {
			navigate("/");
		}
	}, []);

	return (
		<StyledLoading>
			<StyledLoadingMention>{LOADING}</StyledLoadingMention>
			<StyledLoadingAnimation />
		</StyledLoading>
	);
};

export default Loading;
