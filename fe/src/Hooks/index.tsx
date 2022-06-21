import { useCookies } from "react-cookie";

const useCookieUserInfo = () => {
	const USER_INFO = "userInfo";
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const hasCookie = !(Object.keys(cookies).length === 0);

	if (!hasCookie) return null;

	const cookieUserInfo = cookies[USER_INFO];
	cookieUserInfo.key = USER_INFO;
	cookieUserInfo.setCookie = setCookie;

	type TCookieUserInfo = {
		accessToken: string;
		profileImage: string;
		key: "userInfo";
		setCookie: typeof setCookie;
	};

	return cookieUserInfo as TCookieUserInfo;
};

export default useCookieUserInfo;
