import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = `${process.env.REACT_APP_API}/labels`;
const client = axios.create({ baseURL });
const labelsApi = {
	getLabels: async (token: string, isCount = false) => {
		const response = await client
			.get(`${isCount ? "count" : ""}`, {
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
	postLabel: async (
		token: string,
		name: string,
		description: string,
		labelColor: string,
		textColor: string
	) => {
		const response = await client
			.post(
				"",
				{ name, description, labelColor, textColor },
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
	deleteLabel: async (token: string, id: number) => {
		const response = await client
			.delete(`${id}`, {
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
	editLabel: async (
		token: string,
		id: number,
		name: string,
		description: string,
		labelColor: string,
		textColor: string
	) => {
		const response = await client
			.put(
				`${id}`,
				{ name, description, labelColor, textColor },
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

export default labelsApi;
