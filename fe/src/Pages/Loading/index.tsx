import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import tokenApi from "Api/tokenApi";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";
const CODE = "code";

const Loading = () => {
	const cookieUserInfo = useCookieUserInfo();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const code = searchParams.get(CODE);

	const getCookie = async () => {
		const { accessToken: token, setCookie, key } = cookieUserInfo;
		if (token) navigate("/");

		const response = await tokenApi.getTokenResponse(code);
		const { data, status } = response;
		if (status !== 200) navigate("/login");

		const { profileImage, accessToken } = data;
		const date = new Date();
		date.setHours(date.getHours() + 1);
		setCookie(key, { profileImage, accessToken }, { path: "/", expires: date });
		navigate("/");
	};

	useEffect(() => {
		getCookie();
	}, []);

	return (
		<StyledLoading>
			<StyledLoadingMention>{LOADING}</StyledLoadingMention>
			<StyledLoadingAnimation />
		</StyledLoading>
	);
};

export default Loading;
