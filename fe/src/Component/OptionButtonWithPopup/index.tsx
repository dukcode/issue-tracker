import { StyledComponent, DefaultTheme } from "styled-components";
import { RecoilState } from "recoil";

import { TNewIssueOption } from "Atoms";
import { TResultIcon } from "Util/Icons";
import Popup, { TPopupContentProps } from "Component/Popup";
import { useState } from "react";

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
	atom?: RecoilState<TNewIssueOption[]>;
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
	// const [isUpdated, setIsUpdated] = useState(false);
	// const { accessToken } = useCookieUserInfo();
	const showedIcon = getShowedIcon(icons, isDown);
	const { data, isLoading } = getData({ enabled: isMouseEnter });
	// console.log(milestonesData, isSuccess);

	const handleMouseEnter = async () => {
		// if (isUpdated) return;
		setIsMouseEnter(true);

		// const response = await getData(accessToken);
		// const { data } = response;
		const newContents = getPopupContents(data);

		setContents(newContents);
		console.log(isLoading);
		// setIsUpdated(!isUpdated);
	};

	return (
		<Popup
			isLeft={isLeft}
			contents={contents}
			title={`${title} 필터`}
			setOption={setIsDown}
			atom={atom}
			loading={isLoading}
		>
			<StyledButton key={id} type="button" onMouseEnter={handleMouseEnter}>
				<div>{title}</div>
				{showedIcon}
			</StyledButton>
		</Popup>
	);
};

export default OptionButtonWithPopup;
export type { TOptionButtonWithPopupItem };
