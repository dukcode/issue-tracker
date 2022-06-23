import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = `${process.env.REACT_APP_API}/milestones`;
const client = axios.create({ baseURL });

const milestoneApi = {
	getMilestoneCount: async (token: string, isCount = false) => {
		const response = await client
			.get(`${isCount ? "count" : ""}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				params: {
					status: "OPEN",
				},
			})
			.catch((error: Error | AxiosError) => {
				if (axios.isAxiosError(error)) return error.response as AxiosResponse;
				return { data: error, status: null };
			});

		return response;
	},
};

export default milestoneApi;
