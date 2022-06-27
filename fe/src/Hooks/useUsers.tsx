import axios from "axios";
import { useQuery } from "react-query";
import useCookieUserInfo from "Hooks/useCookieUserInfo";

const useUsers = () => {
	const { accessToken } = useCookieUserInfo();
	const baseURL = `${process.env.REACT_APP_API}/users`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const usersApi = () => {
		const data = client.get("").then((res) => res.data);
		return data;
	};

	const response = useQuery("users", usersApi);
	return response;
};

export default useUsers;
