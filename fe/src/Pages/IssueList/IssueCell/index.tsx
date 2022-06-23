import Moment from "react-moment";
import "moment/locale/ko";

import icons from "Util/Icons";
import Checkbox from "@mui/material/Checkbox";
import UserImg from "Component/UserImg";
import Label from "Component/Label";
import {
	StyledIssueCell,
	IssueCellLeft,
	IssueInfo,
	IssueInfoTop,
	IssueInfoBottom,
	IssueCellRight,
	Title,
	IssueNumber,
	AuthorTimeStamp,
	MileStone,
	StyledCheckbox,
	StyledLabelsWrapper,
} from "./IssueCell.styled";

const { ErrorOutline, EmojiFlags } = icons;

type TLabel = {
	id: number;
	name: string;
	description: string;
	labelColor: string;
	textColor: string;
};

type TIssueItem = {
	id: number;
	title: string;
	author: string;
	timeStamp: string; // TODO: timestamp 형식
	mileStone: string;
	profileImage: string;
	labels: TLabel[];
};

const IssueCell = ({
	id,
	title,
	author,
	timeStamp,
	mileStone,
	profileImage,
	labels: labelsInfo,
}: TIssueItem) => {
	const labels = labelsInfo.map(({ id: lableId, name, labelColor }) => (
		<Label key={lableId} name={name} color={labelColor} />
	));
	const editedTime = <Moment fromNow>{timeStamp}</Moment>;

	return (
		<StyledIssueCell>
			<IssueCellLeft>
				<StyledCheckbox>
					<Checkbox size="small" color="default" />
				</StyledCheckbox>
				<IssueInfo>
					<IssueInfoTop>
						<Title>
							<ErrorOutline colorset="blue" size={18} />
							{title}
						</Title>
						<StyledLabelsWrapper>{labels}</StyledLabelsWrapper>
					</IssueInfoTop>
					<IssueInfoBottom>
						<IssueNumber>#{id}</IssueNumber>
						<AuthorTimeStamp>
							이 이슈가 {editedTime}, {author}님에 의해 작성되었습니다.
						</AuthorTimeStamp>
						<MileStone>
							<EmojiFlags colorset="label" size={18} />
							{mileStone}
						</MileStone>
					</IssueInfoBottom>
				</IssueInfo>
			</IssueCellLeft>
			<IssueCellRight>
				<UserImg img={profileImage} size="small" />
			</IssueCellRight>
		</StyledIssueCell>
	);
};

export default IssueCell;
