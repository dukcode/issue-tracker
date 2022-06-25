import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = `${process.env.REACT_APP_API}/labels`;
const client = axios.create({ baseURL });

const labelsApi = {
	getLabels: async (token: string, isCount = false) => {
		const response = await client
			.get(`${isCount && "count"}`, {
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

export default labelsApi;
