import { useQuery } from "react-query";
import useFetch from "./useFetch";

type TUseLabelsParams = {
	enabled?: boolean;
};

const useLabels = ({ enabled = true }: TUseLabelsParams) => {
	const client = useFetch("labels");

	const labelsApi = async () => {
		const { data } = await client.get("");
		return data;
	};

	const response = useQuery("labels", labelsApi, { enabled });

	return response;
};

export default useLabels;
