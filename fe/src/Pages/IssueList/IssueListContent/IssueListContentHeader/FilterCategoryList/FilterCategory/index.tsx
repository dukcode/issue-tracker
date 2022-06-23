import { AxiosResponse } from "axios";

import icons from "Util/Icons";
import Popup, { TPopupContentProps } from "Component/Popup";
import { useState } from "react";
import useCookieUserInfo from "Hooks";
import StyledFilterCategory from "./FilterCategory.styled";

type listItem = {
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
};

const { KeyboardArrowDown } = icons;

const FilterCategory = ({ item }: { item: listItem }) => {
	const [popupContents, setPopupContents] = useState(item.popupContents);
	const [isUpdated, setIsUpdated] = useState(false);
	const { accessToken } = useCookieUserInfo();

	const handleMouseEnter = async () => {
		if (isUpdated) return;

		const response = await item.getData(accessToken);
		const { data } = response;
		const newPopupContents = item.getPopupContents(data);

		setPopupContents(newPopupContents);
		setIsUpdated(!isUpdated);
	};

	return (
		<Popup isLeft={item.isLeft} contents={popupContents} title={`${item.title} 필터`}>
			<StyledFilterCategory key={item.id} type="button" onMouseEnter={handleMouseEnter}>
				<div>{item.title}</div>
				<KeyboardArrowDown colorset="label" size={18} />
			</StyledFilterCategory>
		</Popup>
	);
};

export default FilterCategory;
