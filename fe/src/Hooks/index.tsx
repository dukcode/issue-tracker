import { useCookies } from "react-cookie";

const useCheckCookie = () => {
	const USER_INFO = "userInfo";

	const [cookies] = useCookies([USER_INFO]);
	const hasCookie = !(Object.keys(cookies).length === 0);
	if (!hasCookie) return null;

	const userInfoCookie = cookies[USER_INFO];
	return userInfoCookie;
};

export default useCheckCookie;
