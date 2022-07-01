import { useQuery, useMutation, useQueryClient } from "react-query";
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

type TCommentContent = {
	content: string;
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
		? useQuery("issue", () => issuesGetApi(null), { refetchInterval: 3000 })
		: useQuery(["issues", query], () => issuesGetApi(query), {
				enabled,
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

export const useIssuesCommentPost = ({ id = "NONE" }: { id?: string }) => {
	const client = useFetch("issues");
	const queryClient = useQueryClient();

	const issuesPostCommentApi = async (commentContent: TCommentContent) => {
		const { data } = await client.post(`${id}/comments`, commentContent);
		return data;
	};

	const mutation = useMutation(issuesPostCommentApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("issue");
		},
	});
	return mutation;
};

export const useIssuesPatch = () => {
	const client = useFetch("issues");
	const queryClient = useQueryClient();

	const issuesPatchApi = async (editedIssuesOptions: TEditedIssuesOptions) => {
		const { data } = await client.patch("", editedIssuesOptions);
		return data;
	};

	const mutation = useMutation(issuesPatchApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("issues");
		},
	});
	return mutation;
};

export const useIssuesDelete = (id?: string) => {
	const client = useFetch("issues");

	const issuesDeleteApi = async () => {
		const { data } = await client.delete(`${id}`);
		return data;
	};

	const mutation = useMutation(issuesDeleteApi);
	return mutation;
};
