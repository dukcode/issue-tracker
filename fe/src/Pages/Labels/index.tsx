import { useEffect, useState } from "react";
import { useLabelsGet } from "Hooks/useLabels";
import IssuesNotification from "Pages/IssueList/IssuesNotification";
import StyledContent from "Component/StyledContent";
import LabelCell from "Component/LabelCell";
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

	const { data: labelCountData, isSuccess: isLabelCountDataSuccess } = useLabelsGet({
		isCount: true,
	});
	const { data: labelListData, isSuccess: isLabelListDataSuccess } = useLabelsGet({
		isCount: false,
	});

	const getLabelData = () => {
		setLabelCount(labelCountData);
		setLabelData(labelListData.data);
	};

	const getCellData = () => {
		return labelData.map((item) => (
			<LabelCell
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
		if (!isLabelListDataSuccess || !isLabelCountDataSuccess) return;
		getLabelData();
	}, [isLabelListDataSuccess, isLabelCountDataSuccess]);

	useEffect(() => {
		setCells(getCellData());
	}, [labelData]);

	const caption = `${labelCount}개의 레이블`;

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
				<StyledLabelsHeader>{caption}</StyledLabelsHeader>
				{cells}
			</StyledContent>
		</>
	);
};

export default Labels;
