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

type TUseIssuessMethod = "GET" | "POST";

const useIssues = (method: TUseIssuessMethod) => {
	const { accessToken } = useCookieUserInfo();
	const baseURL = `${process.env.REACT_APP_API}/issues`;
	const client = axios.create({
		baseURL,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	});

	const issuesGetApi = async () => {
		const { data } = await client.get("");
		return data;
	};

	const issuesPostApi = async (newIssuesInfo: TIssuesInfo) => {
		const { data } = await client.post("", newIssuesInfo);
		return data;
	};

	const queryOptions = {
		GET: useQuery("issues", issuesGetApi),
		POST: useMutation(issuesPostApi),
	};

	const result = queryOptions[method];
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

export default useIssues;
