const IssueMockData = {
	id: 2,
	status: "OPEN",
	title: "FE 포함 무중단 자동 배포 구성",
	author: {
		id: 1,
		loginName: "dukcode",
		name: "Deok Yun Kim",
		email: null,
		profileImage: "https://avatars.githubusercontent.com/u/59705184?v=4",
	},
	labels: [
		{
			id: 1,
			name: "BE",
			description: "백엔드 라벨",
			labelColor: "#A5478A",
			textColor: "LIGHT",
		},
		{
			id: 5,
			name: "build",
			description: "build 관련",
			labelColor: "#fef2c0",
			textColor: "DARK",
		},
	],
	milestone: {
		id: 1,
		title: "[BE] issue-tracker Week 1",
		description: "Issue 관련 API 제공",
		dueDate: "2022-06-26",
		status: "OPEN",
		countOpen: 2,
		countClosed: 1,
	},
	createDate: "2022-06-19T11:16:39",
	modifiedDate: "2022-06-19T11:16:39",
};

const LabelMockData = {
	id: 1,
	name: "BE",
	description: "백엔드 라벨",
	labelColor: "#A5478A",
	textColor: "LIGHT",
};

type TIssueData = typeof IssueMockData;
type TLabelData = typeof LabelMockData;

export type { TIssueData, TLabelData };
