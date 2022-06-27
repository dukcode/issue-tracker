import { useEffect, useState } from "react";
import { labelsApi } from "Api";
import useCookieUserInfo from "Hooks";
import IssuesNotification from "Pages/IssueList/IssuesNotification";
import StyledContent from "Component/StyledContent";
import Cell from "Component/Cell";
import StyledLabelsHeader from "./Labels.styled";

type TLabelData = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

const Labels = () => {
	const { accessToken } = useCookieUserInfo();
	const [labelCount, setLabelCount] = useState(0);
	const [labelData, setLabelData] = useState<TLabelData[]>([]);
	const [cells, setCells] = useState([<IssuesNotification key="1" />]);

	const getLabelData = async () => {
		const labelCountResponse = await labelsApi.getLabels(accessToken, true);
		const labelListResponse = await labelsApi.getLabels(accessToken, false);

		const { data: labelCountData } = labelCountResponse;
		const {
			data: { data: labelListData },
		} = labelListResponse;

		setLabelCount(labelCountData);
		setLabelData(labelListData);
	};

	const getCellData = () => {
		return labelData.map((item) => (
			<Cell
				key={item.id}
				id={item.id}
				name={item.name}
				description={item.description}
				labelColor={item.labelColor}
				textColor={item.textColor}
			/>
		));
	};

	useEffect(() => {
		getLabelData();
	}, []);

	useEffect(() => {
		setCells(getCellData());
	}, [labelData]);

	const mention = `${labelCount}개의 레이블`;

	return (
		<StyledContent>
			<StyledLabelsHeader>{mention}</StyledLabelsHeader>
			{cells}
		</StyledContent>
	);
};

export default Labels;
