import { useCookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

type TUserInfoString = "userInfo";
type TCookieUserInfo = {
	accessToken: string;
	profileImage: string;
	key: TUserInfoString;
	setCookie: (name: TUserInfoString, value: any, options?: CookieSetOptions | undefined) => void;
};

const useCookieUserInfo = () => {
	const USER_INFO: TUserInfoString = "userInfo";
	const [cookies, setCookie] = useCookies([USER_INFO]);
	const cookieUserInfo = cookies[USER_INFO] ? { ...cookies[USER_INFO] } : {};

	cookieUserInfo.key = USER_INFO;
	cookieUserInfo.setCookie = setCookie;

	return cookieUserInfo as TCookieUserInfo;
};

export default useCookieUserInfo;
