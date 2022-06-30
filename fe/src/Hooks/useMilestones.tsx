import { useQuery } from "react-query";
import useFetch from "./useFetch";

type TUseMilestonesParams = {
	status?: "OPEN" | "CLOSED";
	enabled?: boolean;
	isCount?: boolean;
};

const useMilestones = ({
	status = "OPEN",
	enabled = true,
	isCount = false,
}: TUseMilestonesParams) => {
	const client = useFetch("milestones");

	const milestonesApi = async (count: boolean, apiStatus: string) => {
		const option = count ? "count" : "";
		const { data } = await client.get(option, { params: { status: apiStatus } });
		return data;
	};

	const response = useQuery(["milestones", isCount, status], () => milestonesApi(isCount, status), {
		enabled,
	});

	return response;
};

export default useMilestones;
