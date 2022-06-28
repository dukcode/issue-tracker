import axios from "axios";
import { useQuery, useMutation } from "react-query";
import useCookieUserInfo from "Hooks/useCookieUserInfo";

export type TIssuesInfo = {
	title: string;
	assigneeIds: number[];
	labelIds: number[];
	milestoneId: number;
	commentCreateRequest: {
		content: string;
	};
};

export const useIssuesGet = (id?: string) => {
	const { accessToken } = useCookieUserInfo();
	const baseURL = `${process.env.REACT_APP_API}/issues`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const detail = id ? `/${id}` : "";

	const issuesGetApi = async () => {
		const { data } = await client.get(detail);
		return data;
	};

	const result = id ? useQuery("issues", issuesGetApi) : useQuery("issue", issuesGetApi);

	return result;
};

export const useIssuesPost = () => {
	const { accessToken } = useCookieUserInfo();
	const baseURL = `${process.env.REACT_APP_API}/issues`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const issuesPostApi = async (newIssuesInfo: TIssuesInfo) => {
		const { data } = await client.post("", newIssuesInfo);
		return data;
	};
	const mutation = useMutation(issuesPostApi);
	return mutation;
};
