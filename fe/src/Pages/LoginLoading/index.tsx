import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useUsers from "Hooks/useUsers";
import devImg from "Img/warning.png";
import useCookieUserInfo from "Hooks/useCookieUserInfo";
import {
	StyledLoginLoading,
	StyledLoginLoadingMention,
	StyledLoginLoadingAnimation,
} from "./LoginLoading.styled";

const LOADING = "LOADING";
const CODE = "code";

const LoginLoading = () => {
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
				profileImage: devImg,
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
		<StyledLoginLoading>
			<StyledLoginLoadingMention>{LOADING}</StyledLoginLoadingMention>
			<StyledLoginLoadingAnimation />
		</StyledLoginLoading>
	);
};

export default LoginLoading;
