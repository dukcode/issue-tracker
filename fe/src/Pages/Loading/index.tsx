import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useUsers from "Hooks/useUsers";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import { StyledLoading, StyledLoadingMention, StyledLoadingAnimation } from "./Loading.styled";

const LOADING = "LOADING";
const CODE = "code";

const Loading = () => {
	const cookieUserInfo = useCookieUserInfo();
	const navigate = useNavigate();
	const { accessToken: token, setCookie, key } = cookieUserInfo;
	const isDev = process.env.NODE_ENV === "development";
	if (isDev) {
		const date = new Date();
		date.setHours(date.getHours() + 1);
		setCookie(
			key,
			{
				profileImage: "https://avatars.githubusercontent.com/u/67730358?v=4",
				accessToken: process.env.REACT_APP_MASTERKEY,
			},
			{ path: "/", expires: date }
		);
		navigate("/");
	}
	if (token) navigate("/");

	const [searchParams] = useSearchParams();
	const code = searchParams.get(CODE);
	const { data: userData, isSuccess, isError } = useUsers({ code });

	useEffect(() => {
		if (!isSuccess) return;
		const { profileImage, accessToken } = userData;
		const date = new Date();
		date.setHours(date.getHours() + 1);
		setCookie(key, { profileImage, accessToken }, { path: "/", expires: date });
		navigate("/");
	}, [isSuccess]);

	useEffect(() => {
		if (isError) navigate("/login");
	}, [isError]);

	return (
		<StyledLoading>
			<StyledLoadingMention>{LOADING}</StyledLoadingMention>
			<StyledLoadingAnimation />
		</StyledLoading>
	);
};

export default Loading;
