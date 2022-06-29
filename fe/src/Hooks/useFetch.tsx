import axios from "axios";
import useCookieUserInfo from "Hooks/useCookieUserInfo";

const useFetch = (option: string) => {
	const { accessToken } = useCookieUserInfo();
	const baseURL = `${process.env.REACT_APP_API}/${option}`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});

	return client;
};

export default useFetch;
