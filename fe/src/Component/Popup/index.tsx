import { ReactNode, useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { StyledPopup, StyledPopupWrapper } from "./Popup.styled";
import PopupContent, { TContentProps } from "./PopupContent";

type TPopupContentProps = TContentProps & {
	id: number;
};

type TPopupProps = {
	children: ReactNode;
	isLeft: boolean;
	title: string;
	contents: TPopupContentProps[];
	setOption?: Dispatch<SetStateAction<boolean>>;
};

const defaultPopupProps = {
	setOption: undefined,
};

const Popup = ({ children, isLeft, title, contents: contentsData, setOption }: TPopupProps) => {
	const contents = contentsData.map(({ id, name, image, imageType }) => (
		<PopupContent key={id} name={name} image={image} imageType={imageType} />
	));
	const popup = useRef<HTMLDivElement>(null);
	const button = useRef<HTMLDivElement>(null);
	const [isOpened, setIsOpened] = useState(false);

	const handleClickOutside = ({ target }: MouseEvent) => {
		const clickedTarget = target as Node;

		if (button.current?.contains(clickedTarget)) return;
		if (isOpened && !popup.current?.contains(clickedTarget)) {
			setIsOpened(false);
			if (setOption) setOption(false);
		}
	};

	const handleClickButton = () => {
		setIsOpened(!isOpened);
		if (setOption) setOption(!isOpened);
	};

	const handleKeyupButton = ({ key }: { key: string }) => {
		if (key === "f") handleClickButton();
	};

	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		return () => window.removeEventListener("click", handleClickOutside);
	}, [isOpened]);

	return (
		<StyledPopupWrapper>
			<div
				ref={button}
				onClick={handleClickButton}
				onKeyUp={handleKeyupButton}
				role="button"
				tabIndex={0}
			>
				{children}
			</div>
			{isOpened && (
				<StyledPopup ref={popup} isLeft={isLeft}>
					<div>{title}</div>
					{contents}
				</StyledPopup>
			)}
		</StyledPopupWrapper>
	);
};

Popup.defaultProps = defaultPopupProps;

export default Popup;
export type { TPopupContentProps };
