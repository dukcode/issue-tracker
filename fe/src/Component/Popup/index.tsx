import { ReactNode, useState, ChangeEvent, useRef, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { StyledPopup, StyledPopupWrapper, StyledContent } from "./Popup.styled";

const title = "이슈 필터";
const contentsData = [
	{ id: 1, name: "열린 이슈" },
	{ id: 2, name: "내가 작성한 이슈" },
	{ id: 3, name: "나에게 할당된 이슈" },
	{ id: 4, name: "내가 댓글을 남긴 이슈" },
	{ id: 5, name: "닫힌 이슈" },
];

type TContentProps = {
	name: string;
};

const Content = ({ name }: TContentProps) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<StyledContent checked={checked}>
			{name}
			<Checkbox checked={checked} onChange={handleChange} size="small" color="default" />
		</StyledContent>
	);
};

const contents = contentsData.map(({ id, name }) => <Content key={id} name={name} />);

const Popup = ({ children, isLeft = true }: { children: ReactNode; isLeft: boolean }) => {
	const popup = useRef<HTMLDivElement>(null);
	const button = useRef<HTMLDivElement>(null);
	const [isOpened, setIsOpened] = useState(false);

	const handleClickOutside = ({ target }: MouseEvent) => {
		const clickedTarget = target as Node;

		if (button.current?.contains(clickedTarget)) return;
		if (isOpened && !popup.current?.contains(clickedTarget)) setIsOpened(false);
	};

	const handleClickButton = () => {
		setIsOpened(!isOpened);
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

export default Popup;
