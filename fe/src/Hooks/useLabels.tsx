import { useQuery, useMutation } from "react-query";
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

	const labelsPostApi = async (newLabelInfo: TNewLabelInfo) => {
		const { data } = await client.post("", newLabelInfo);
		return data;
	};

	const mutation = useMutation(labelsPostApi);
	return mutation;
};
