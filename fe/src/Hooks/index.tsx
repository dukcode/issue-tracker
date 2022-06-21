import { useCookies } from "react-cookie";

const useCookieUserInfo = () => {
	type TUserInfoString = "userInfo";
	const USER_INFO: TUserInfoString = "userInfo";
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const cookieUserInfo = cookies[USER_INFO] ? cookies[USER_INFO] : {};

	cookieUserInfo.key = USER_INFO;
	cookieUserInfo.setCookie = setCookie;

	type TCookieUserInfo = {
		accessToken: string;
		profileImage: string;
		key: TUserInfoString;
		setCookie: typeof setCookie;
	};

	return cookieUserInfo as TCookieUserInfo;
};

export default useCookieUserInfo;
