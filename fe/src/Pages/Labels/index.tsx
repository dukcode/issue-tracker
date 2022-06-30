import { useEffect, useState } from "react";
import useLabels from "Hooks/useLabels";
import IssuesNotification from "Pages/IssueList/IssuesNotification";
import StyledContent from "Component/StyledContent";
import Cell from "Component/Cell";
import OptionTabs from "Component/OptionTabs";
import LabelForm from "Component/Label/LabelForm";
import StyledLabelsHeader from "./Labels.styled";

type TLabelData = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

const Labels = () => {
	const [labelCount, setLabelCount] = useState(0);
	const [labelData, setLabelData] = useState<TLabelData[]>([]);
	const [cells, setCells] = useState([<IssuesNotification key="1" />]);
	const [labelFormIsClicked, setLabelFormIsClicked] = useState(false);

	const { data: labelCountData, isSuccess: isLabelCountData } = useLabels({ isCount: true });

	const { data: labelListData, isSuccess: isLabelListData } = useLabels({ isCount: false }); // 여기 구조분해할당 갑자기 안 됨 why ..?

	const getLabelData = () => {
		setLabelCount(labelCountData);
		setLabelData(labelListData.data);
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
		if (!isLabelListData || !isLabelCountData) return;
		getLabelData();
	}, [isLabelListData, isLabelCountData]);

	useEffect(() => {
		setCells(getCellData());
	}, [labelData]);

	const mention = `${labelCount}개의 레이블`;

	return (
		<>
			<OptionTabs
				labelFormIsClicked={labelFormIsClicked}
				setLabelFormIsClicked={setLabelFormIsClicked}
			/>
			{labelFormIsClicked && (
				<LabelForm
					isEditing={false}
					curName=""
					curDescription=""
					curLabelColor=""
					curTextColor=""
				/>
			)}

			<StyledContent>
				<StyledLabelsHeader>{mention}</StyledLabelsHeader>
				{cells}
			</StyledContent>
		</>
	);
};

export default Labels;
