import { useQuery } from "react-query";
import useFetch from "./useFetch";

type TUseUsersParams = {
	code?: string | null;
	enabled?: boolean;
};

const useUsers = ({ code, enabled }: TUseUsersParams) => {
	const client = useFetch("users");

	const usersTokenApi = async () => {
		const { data } = await client.get("login/oauth2/redirect", { params: { code } });
		return data;
	};

	const usersApi = async () => {
		const { data } = await client.get("");
		return data;
	};

	const response = !code
		? useQuery("users", usersApi, { enabled })
		: useQuery("token", usersTokenApi, { staleTime: Infinity });
	return response;
};

export default useUsers;
