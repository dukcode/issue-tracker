import IssueCell from "../IssueCell/IssueCell";

type TIssueItem = {
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
};

type TIssueItems = {
	issueItems: TIssueItem[];
};

const IssueCells = ({ issueItems }: TIssueItems) => {
	return (
		<>
			{issueItems
				.slice(0)
				.reverse()
				.map((item: TIssueItem) => (
					<IssueCell
						key={item.id}
						id={item.id}
						title={item.title}
						author={item.author}
						timeStamp={item.timeStamp}
						mileStone={item.mileStone}
					/>
				))}
		</>
	);
};

export type { TIssueItem };
export default IssueCells;
