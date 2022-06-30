import { useQuery } from "react-query";
import useFetch from "./useFetch";

const useUsers = () => {
	const client = useFetch("users");

	const usersApi = async () => {
		const { data } = await client.get("");
		return data;
	};

	const response = useQuery("users", usersApi);
	return response;
};

export default useUsers;
