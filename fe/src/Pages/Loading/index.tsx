import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import tokenApi from "Api/tokenApi";

import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";
const USER_INFO = "userInfo";
const CODE = "code";

const Loading = () => {
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const [searchParams] = useSearchParams();
	const isLogin = Object.keys(cookies).length;
	const code = searchParams.get(CODE);
	const navigate = useNavigate();

	const getCookie = async () => {
		const response = await tokenApi.getTokenResponse(code);
		const { data, status } = response;
		if (status !== 200) navigate("/login");

		const { profileImage, accessToken } = data;
		const date = new Date();
		date.setHours(date.getHours() + 1);
		setCookie(USER_INFO, { profileImage, accessToken }, { path: "/", expires: date });
		navigate("/");
	};

	useEffect(() => {
		if (isLogin) {
			navigate("/");
		} else {
			getCookie();
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
