import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = `${process.env.REACT_APP_API}/users`;
const client = axios.create({ baseURL });

const usersApi = {
	getUsers: async (token: string) => {
		const response = await client
			.get("", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.catch((error: Error | AxiosError) => {
				if (axios.isAxiosError(error)) return error.response as AxiosResponse;
				return { data: error, status: null };
			});

		return response;
	},
};

export default usersApi;
