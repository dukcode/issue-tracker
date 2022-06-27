import { atom } from "recoil";

const atoms = {
	newIssue: {
		title: atom({ key: "newIssueTitle", default: "" }),
		desc: atom({ key: "newIssueDesc", default: "" }),
		managers: atom({ key: "newIssueManagers", default: [] }),
		labels: atom({ key: "newIssueLabels", default: [] }),
		milestones: atom({ key: "newIssueMilestones", default: [] }),
	},
};

export default atoms;
