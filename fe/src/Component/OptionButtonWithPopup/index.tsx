import { StyledComponent, DefaultTheme } from "styled-components";
import { RecoilState } from "recoil";

import { TIssueOption } from "Atoms";
import { TResultIcon } from "Util/Icons";
import Popup, { TPopupContentProps } from "Component/Popup";
import { useEffect, useState } from "react";

type TIcons = { DownIcon?: TResultIcon; UpIcon?: TResultIcon } | undefined;

type TOptionButtonWithPopupItem = {
	id: number;
	title: "담당자" | "레이블" | "마일스톤" | "작성자";
	isLeft: boolean;
	popupContents: TPopupContentProps[];
	getData: any;
	getPopupContents: (data: any) => TPopupContentProps[];
	StyledButton: StyledComponent<"button", DefaultTheme, {}, never>;
	icons?: TIcons;
	atom?: RecoilState<TIssueOption[]>;
};

type TOptionButtonWithPopupProps = {
	item: TOptionButtonWithPopupItem;
};

const getShowedIcon = (icons: TIcons, isDown: boolean) => {
	if (!icons || !(icons.UpIcon && icons.DownIcon)) return null;

	const { UpIcon, DownIcon } = icons;
	const showedIcon = isDown ? (
		<DownIcon colorset="label" size={18} />
	) : (
		<UpIcon colorset="label" size={18} />
	);

	return showedIcon;
};

const OptionButtonWithPopup = ({
	item: { id, title, isLeft, popupContents, getData, getPopupContents, icons, StyledButton, atom },
}: TOptionButtonWithPopupProps) => {
	const [contents, setContents] = useState(popupContents);
	const [isDown, setIsDown] = useState(false);
	const [isMouseEnter, setIsMouseEnter] = useState(false);
	const showedIcon = getShowedIcon(icons, isDown);
	const { data, isSuccess } = getData({ enabled: isMouseEnter });

	const handleMouseEnter = () => {
		setIsMouseEnter(true);
	};

	const handleMouseLeave = () => {
		setIsMouseEnter(false);
	};

	useEffect(() => {
		if (!isSuccess) return;
		const newContents = getPopupContents(data);
		setContents(newContents);
	}, [isSuccess]);

	return (
		<Popup
			isLeft={isLeft}
			contents={contents}
			title={`${title} 필터`}
			setOption={setIsDown}
			atom={atom}
			loading={!isSuccess}
		>
			<StyledButton
				key={id}
				type="button"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div>{title}</div>
				{showedIcon}
			</StyledButton>
		</Popup>
	);
};

export default OptionButtonWithPopup;
export type { TOptionButtonWithPopupItem };
