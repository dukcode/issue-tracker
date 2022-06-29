import { useQuery } from "react-query";
import useFetch from "./useFetch";

type TUseMilestonesParams = {
	status?: "OPEN" | "CLOSED";
	enabled?: boolean;
};

const useMilestones = ({ status = "OPEN", enabled = true }: TUseMilestonesParams) => {
	const client = useFetch("milestones");

	const milestonesApi = async () => {
		const { data } = await client.get("", { params: { status } });
		return data;
	};

	const response = useQuery("milestones", milestonesApi, { enabled });

	return response;
};

export default useMilestones;
