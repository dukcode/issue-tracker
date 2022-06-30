const mockData = {
	id: 8,
	status: "CLOSED",
	title: "FE 포함 무중단 자동 배포 구성",
	author: {
		id: 1,
		loginName: "dukcode",
		name: "Deok Yun Kim",
		email: null,
		profileImage: "https://avatars.githubusercontent.com/u/59705184?v=4",
	},
	assignees: [
		{
			id: 3,
			loginName: "Serin-Kim",
			name: "Serin Kim ",
			email: null,
			profileImage: "https://avatars.githubusercontent.com/u/68533016?v=4",
		},
	],
	labels: [
		{
			id: 5,
			name: "build",
			description: "build 관련",
			labelColor: "#fef2c0",
			textColor: "DARK",
		},
	],
	milestone: {
		id: 3,
		title: "issue-tracker Week 2",
		description: "JWT refresh token 기능 제공",
		dueDate: "2022-06-30",
		status: "OPEN",
		countOpen: 3,
		countClosed: 3,
	},
	createDate: "2022-06-27T09:37:24",
	modifiedDate: "2022-06-27T15:01:35",
	comments: {
		count: 2,
		data: [
			{
				id: 78,
				systemMessage: true,
				author: {
					id: 1,
					loginName: "dukcode",
					name: "Deok Yun Kim",
					email: null,
					profileImage: "https://avatars.githubusercontent.com/u/59705184?v=4",
				},
				content: "이슈가 닫혔습니다.",
				reactions: {},
				createDate: "2022-06-27T15:01:35",
				modifiedDate: "2022-06-27T15:01:35",
			},
		],
	},
	statusChangedAt: "2022-06-27T15:01:35",
	statusChangeUser: {
		id: 1,
		loginName: "dukcode",
		name: "Deok Yun Kim",
		email: null,
		profileImage: "https://avatars.githubusercontent.com/u/59705184?v=4",
	},
};

type TIssueDetail = typeof mockData;

export type { TIssueDetail };
