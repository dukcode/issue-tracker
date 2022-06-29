import React, { ReactNode, useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { RecoilState } from "recoil";

import { TNewIssueOption } from "Atoms";
import LoadingAnimation from "Component/Loading";
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
	atom?: RecoilState<TNewIssueOption[]>;
	loading?: boolean;
};

const defaultPopupProps = {
	setOption: undefined,
	atom: undefined,
	loading: false,
};

const Popup = ({ children, isLeft, title, contents, setOption, atom, loading }: TPopupProps) => {
	const contentsList = contents.map(
		({
			id,
			name,
			image,
			imageType,
			clickEventHandler,
			isCheckBox,
			disabledOption,
			option,
			filterName,
		}) => (
			<PopupContent
				id={id}
				key={id}
				name={name}
				image={image}
				imageType={imageType}
				clickEventHandler={clickEventHandler}
				isCheckBox={isCheckBox}
				disabledOption={disabledOption}
				atom={atom}
				option={option}
				filterName={filterName}
			/>
		)
	);
	const popup = useRef<HTMLDivElement>(null);
	const button = useRef<HTMLDivElement>(null);
	const [isOpened, setIsOpened] = useState(false);

	const handleClickOutside = ({ target }: MouseEvent) => {
		const clickedTarget = target as Node;
		if (button.current?.contains(clickedTarget)) return; // handleClickButton과 중복 방지
		if (isOpened && !popup.current?.contains(clickedTarget)) {
			setIsOpened(false);
			if (setOption) setOption(false);
		}
	};

	const handleClickButton = () => {
		setIsOpened(!isOpened);
		if (setOption) setOption(!isOpened);
		if (popup.current && !isOpened) popup.current.style.display = "block";
	};

	const handleKeyupButton = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "f") handleClickButton();
	};

	const handleAnimationEnd = () => {
		if (popup.current && !isOpened) popup.current.style.display = "none";
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
			<StyledPopup
				ref={popup}
				isLeft={isLeft}
				isOpened={isOpened}
				onAnimationEnd={handleAnimationEnd}
			>
				<div>{title}</div>
				{!loading ? (
					contentsList
				) : (
					<div>
						<LoadingAnimation color="label" size={40} border={5} />
					</div>
				)}
			</StyledPopup>
		</StyledPopupWrapper>
	);
};

Popup.defaultProps = defaultPopupProps;

export default Popup;
export type { TPopupContentProps };
