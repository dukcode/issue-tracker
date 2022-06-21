import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = process.env.REACT_APP_LOGIN_SERVER;
const client = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

const tokenApi = {
	getTokenResponse: async (code: string | null) => {
		const response = await client
			.get("", { params: { code } })
			.catch((error: Error | AxiosError) => {
				if (axios.isAxiosError(error)) return error.response as AxiosResponse;
				return { data: error, status: null };
			});

		return response;
	},
};

export default tokenApi;
