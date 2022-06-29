import { useQuery, useMutation } from "react-query";
import useFetch from "./useFetch";

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
	const client = useFetch("issues");
	const detail = id ? `/${id}` : "";

	const issuesGetApi = async () => {
		const { data } = await client.get(detail);
		return data;
	};

	const result = id ? useQuery("issue", issuesGetApi) : useQuery("issues", issuesGetApi);

	return result;
};

export const useIssuesPost = () => {
	const client = useFetch("issues");

	const issuesPostApi = async (newIssuesInfo: TIssuesInfo) => {
		const { data } = await client.post("", newIssuesInfo);
		return data;
	};
	const mutation = useMutation(issuesPostApi);
	return mutation;
};
