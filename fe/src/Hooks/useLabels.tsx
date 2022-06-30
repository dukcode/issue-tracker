import { useQuery } from "react-query";
import useFetch from "./useFetch";

type TUseLabelsParams = {
	enabled?: boolean;
	isCount?: boolean;
};

const useLabels = ({ enabled = true, isCount = false }: TUseLabelsParams) => {
	const client = useFetch("labels");

	const labelsApi = async (count: boolean) => {
		const option = count ? "count" : "";
		const { data } = await client.get(option);
		return data;
	};

	const response = useQuery(["labels", isCount], () => labelsApi(isCount), { enabled });

	return response;
};

export default useLabels;
