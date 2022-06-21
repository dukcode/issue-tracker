import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = `${process.env.REACT_APP_API}/issues`;
const client = axios.create({ baseURL });

const issueListApi = {
	getIssueList: async (token: string, q: string | null) => {
		const response = await client
			.get("", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				params: { q },
			})
			.catch((error: Error | AxiosError) => {
				if (axios.isAxiosError(error)) return error.response as AxiosResponse;
				return { data: error, status: null };
			});

		return response;
	},
};

export default issueListApi;
