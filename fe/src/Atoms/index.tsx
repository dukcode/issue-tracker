import { Dispatch, SetStateAction } from "react";
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
	issueList: {
		isCheckedAll: atom({ key: "isCheckedAll", default: false }),
		checkedIssues: atom<Set<number>>({ key: "checkedIssues", default: new Set() }),
		filterValue: atom({ key: "filterValue", default: "is:open " }),
		submitFilterValue: atom<Dispatch<SetStateAction<string>>>({
			key: "submitFilterValue",
			default: () => {},
		}),
		counts: atom({ key: "issueStateCounts", default: { openCount: 0, closedCount: 0 } }),
		listCount: atom({ key: "issueListCount", default: 0 }),
	},
};

export default atoms;
export type { TNewIssueOption };
