import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import "moment/locale/ko";
import { useRecoilState, useRecoilValue } from "recoil";

import atoms from "Atoms";
import icons from "Util/Icons";
import UserImg from "Component/UserImg";
import Label from "Component/Label";
import { TIssueData } from "Pages/IssueList/mockData";
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

type TIssueItem = {
	item: TIssueData;
};

const IssueCell = ({ item }: TIssueItem) => {
	const { id, title, author, createDate, milestone, labels: labelsInfo } = item;
	const [isCheckedAll, setIsCheckedAll] = useRecoilState(atoms.issueList.isCheckedAll);
	const [checkIssues, setCheckedIssues] = useRecoilState(atoms.issueList.checkedIssues);
	const listCount = useRecoilValue(atoms.issueList.listCount);
	const [checked, setChecked] = useState(false);
	const { loginName, profileImage } = author;
	const labels = labelsInfo
		? labelsInfo.map(({ id: lableId, name, labelColor, textColor }) => (
				<Label key={lableId} name={name} labelColor={labelColor} textColor={textColor} />
		  ))
		: [];
	const createDateMention = createDate ? moment(createDate).fromNow() : "0초 전";
	const createDateDesc = `이 이슈가 ${createDateMention}에 ${loginName}님에 의해 작성되었습니다`;
	const navigate = useNavigate();

	const handleClickIssueTitle = (event: React.MouseEvent) => {
		event.stopPropagation();
		navigate(`/issue/${id}`);
	};

	const changeChecked = () => {
		if (checked) {
			if (isCheckedAll) setIsCheckedAll(false);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.delete(id);
				return newCheckedIssues;
			});
		} else {
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.add(id);
				return newCheckedIssues;
			});

			if (listCount === checkIssues.size + 1) {
				setIsCheckedAll(true);
			}
		}
		setChecked(!checked);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		changeChecked();
	};

	const handleClickIssueCell = (event: React.MouseEvent) => {
		event.stopPropagation();
		changeChecked();
	};

	useEffect(() => {
		if (isCheckedAll) {
			setChecked(true);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.add(id);
				return newCheckedIssues;
			});
		}
		if (!isCheckedAll && listCount === checkIssues.size) {
			setChecked(false);
			setCheckedIssues((prevCheckedIssues) => {
				const newCheckedIssues = new Set(prevCheckedIssues);
				newCheckedIssues.delete(id);
				return newCheckedIssues;
			});
		}
	}, [isCheckedAll]);

	useEffect(() => {
		if (!checkIssues.has(id)) setChecked(false);
	}, [checkIssues]);

	return (
		<StyledIssueCell onClick={handleClickIssueCell}>
			<IssueCellLeft>
				<StyledCheckbox>
					<Checkbox size="small" color="default" checked={checked} onChange={handleChange} />
				</StyledCheckbox>
				<IssueInfo>
					<IssueInfoTop>
						<Title onClick={handleClickIssueTitle}>
							<ErrorOutline colorset="blue" size={18} />
							{title}
						</Title>
						<StyledLabelsWrapper>{labels}</StyledLabelsWrapper>
					</IssueInfoTop>
					<IssueInfoBottom>
						<IssueNumber>#{id}</IssueNumber>
						<AuthorTimeStamp>{createDateDesc}</AuthorTimeStamp>
						{milestone && (
							<MileStone>
								<EmojiFlags colorset="label" size={18} />
								{milestone.title}
							</MileStone>
						)}
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
