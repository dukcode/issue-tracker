import { atom } from "recoil";

const atoms = {
	newIssue: {
		title: atom({ key: "newIssueTitle", default: "" }),
		desc: atom({ key: "newIssueDesc", default: "" }),
		users: atom<string[]>({ key: "newIssueManagers", default: [] }),
		labels: atom<string[]>({ key: "newIssueLabels", default: [] }),
		milestones: atom<string[]>({ key: "newIssueMilestones", default: [] }),
	},
};

export default atoms;
