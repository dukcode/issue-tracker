import icons from "Util/Icons";
import Popup, { TPopupContentProps } from "Component/Popup";

type listItem = {
	id: number;
	title: string;
	isLeft: boolean;
	popupContents: TPopupContentProps[];
};

const { KeyboardArrowDown } = icons;

const FilterCategory = ({ item }: { item: listItem }) => {
	return (
		<Popup isLeft={item.isLeft} contents={item.popupContents} title={`${item.title} 필터`}>
			<button key={item.id} type="button">
				<div>{item.title}</div>
				<KeyboardArrowDown colorset="label" size={18} />
			</button>
		</Popup>
	);
};

export default FilterCategory;
