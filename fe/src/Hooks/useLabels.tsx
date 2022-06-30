import { useQuery, useMutation, useQueryClient } from "react-query";
import useFetch from "./useFetch";

type TUseLabelsParams = {
	enabled?: boolean;
	isCount?: boolean;
};

export type TNewLabelInfo = {
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

export type TEditedLabelsInfo = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

type TUseLabelsPatch = {
	id: number;
};

export const useLabels = ({ enabled = true, isCount = false }: TUseLabelsParams) => {
	const client = useFetch("labels");

	const labelsApi = async (count: boolean) => {
		const option = count ? "count" : "";
		const { data } = await client.get(option);
		return data;
	};

	const response = useQuery(["labels", isCount], () => labelsApi(isCount), { enabled });

	return response;
};

export const useLabelsPost = () => {
	const client = useFetch("labels");
	const queryClient = useQueryClient();

	const labelsPostApi = async (newLabelInfo: TNewLabelInfo) => {
		const { data } = await client.post("", newLabelInfo);
		return data;
	};

	const mutation = useMutation(labelsPostApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("labels");
		},
	});
	return mutation;
};

export const useLabelsPut = ({ id }: TUseLabelsPatch) => {
	const client = useFetch("labels");
	const queryClient = useQueryClient();

	const labelsPutApi = async (editedLabelsOptions: TEditedLabelsInfo) => {
		const { data } = await client.put(`${id}`, editedLabelsOptions);
		return data;
	};

	const mutation = useMutation(labelsPutApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("labels");
		},
	});
	return mutation;
};
