import { StyledComponent, DefaultTheme } from "styled-components";
import { AxiosResponse } from "axios";

import { TResultIcon } from "Util/Icons";
import Popup, { TPopupContentProps } from "Component/Popup";
import { useState } from "react";
import useCookieUserInfo from "Hooks/useCookieUserInfo";

type TIcons = { DownIcon?: TResultIcon; UpIcon?: TResultIcon } | undefined;

type TOptionButtonWithPopupItem = {
	id: number;
	title: string;
	isLeft: boolean;
	popupContents: TPopupContentProps[];
	getData: (token: string) => Promise<
		| AxiosResponse<any, any>
		| {
				data: Error;
				status: null;
		  }
	>;
	getPopupContents: (data: any) => TPopupContentProps[];
	StyledButton: StyledComponent<"button", DefaultTheme, {}, never>;
	icons?: TIcons;
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
	item: { id, title, isLeft, popupContents, getData, getPopupContents, icons, StyledButton },
}: TOptionButtonWithPopupProps) => {
	const [contents, setContents] = useState(popupContents);
	const [isDown, setIsDown] = useState(false);
	const [isUpdated, setIsUpdated] = useState(false);
	const { accessToken } = useCookieUserInfo();
	const showedIcon = getShowedIcon(icons, isDown);

	const handleMouseEnter = async () => {
		if (isUpdated) return;

		const response = await getData(accessToken);
		const { data } = response;
		const newContents = getPopupContents(data);

		setContents(newContents);
		setIsUpdated(!isUpdated);
	};

	return (
		<Popup isLeft={isLeft} contents={contents} title={`${title} 필터`} setOption={setIsDown}>
			<StyledButton key={id} type="button" onMouseEnter={handleMouseEnter}>
				<div>{title}</div>
				{showedIcon}
			</StyledButton>
		</Popup>
	);
};

export default OptionButtonWithPopup;
export type { TOptionButtonWithPopupItem };
