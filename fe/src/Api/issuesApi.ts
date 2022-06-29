import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = `${process.env.REACT_APP_API}/issues`;
const client = axios.create({ baseURL });

const issuesApi = {
	getIssues: async (token: string, q: string | null) => {
		const response = await client
			.get("", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				params: { q, page: 0 },
			})
			.catch((error: Error | AxiosError) => {
				if (axios.isAxiosError(error)) return error.response as AxiosResponse;
				return { data: error, status: null };
			});

		return response;
	},
	patchIssues: async (token: string, issueIds: number[], status: "OPEN" | "CLOSED") => {
		const response = await client
			.patch(
				"",
				{ issueIds, status },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.catch((error: Error | AxiosError) => {
				if (axios.isAxiosError(error)) return error.response as AxiosResponse;
				return { data: error, status: null };
			});

		return response;
	},
};

export default issuesApi;
