import { useQuery, useMutation } from "react-query";
import useFetch from "./useFetch";

type TUseIssuesGetParams = {
	id?: string;
	enabled?: boolean;
	query?: string | null;
};

type TEditedIssuesOptions = {
	issueIds: number[];
	status: "OPEN" | "CLOSED";
};

export type TIssuesInfo = {
	title: string;
	assigneeIds: number[];
	labelIds: number[];
	milestoneId: number;
	commentCreateRequest: {
		content: string;
	};
};

export const useIssuesGet = ({
	id = undefined,
	enabled = true,
	query = null,
}: TUseIssuesGetParams) => {
	const client = useFetch("issues");
	const detail = id ? `/${id}` : "";

	const issuesGetApi = async (q: string | null) => {
		const { data } = await client.get(detail, { params: { q } });
		return data;
	};

	const result = id
		? useQuery("issue", () => issuesGetApi(null))
		: useQuery(["issues", query], () => issuesGetApi(query), {
				enabled,
				refetchOnWindowFocus: false,
				refetchInterval: 3000,
				retry: 1,
		  });

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

export const useIssuesPatch = () => {
	const client = useFetch("issues");

	const issuesPatchApi = async (editedIssuesOptions: TEditedIssuesOptions) => {
		const { data } = await client.patch("", editedIssuesOptions);
		return data;
	};

	const mutation = useMutation(issuesPatchApi);
	return mutation;
};
