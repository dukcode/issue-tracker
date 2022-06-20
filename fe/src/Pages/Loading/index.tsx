import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

type TTokenResponse = { data: { profileImage: string; accessToken: string } };

const LOADING = "LOADING";
const USER_INFO = "userInfo";

const Loading = () => {
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const isLogin = Object.keys(cookies).length;

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
			const date = new Date();
			date.setHours(date.getHours() + 1);

			setCookie(USER_INFO, { profileImage, accessToken }, { path: "/", expires: date });

			navigate("/");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const status = error.response?.status;
				if (status === 500) navigate("/login");
			}
			console.error(error); // eslint-disable-line no-console
		}
	};

	useEffect(() => {
		if (isLogin) {
			navigate("/");
		} else {
			getToken();
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
