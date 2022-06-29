import { atom } from "recoil";

type TNewIssueOption = {
	id: number;
	name: string;
	image?: string;
	imageType?: string;
	option?: { countOpen: number; countClosed: number };
};

const atoms = {
	newIssue: {
		title: atom({ key: "newIssueTitle", default: "" }),
		desc: atom({ key: "newIssueDesc", default: "" }),
		users: atom<TNewIssueOption[]>({ key: "newIssueManagers", default: [] }),
		labels: atom<TNewIssueOption[]>({ key: "newIssueLabels", default: [] }),
		milestones: atom<TNewIssueOption[]>({ key: "newIssueMilestones", default: [] }),
	},
};

export default atoms;
export type { TNewIssueOption };
