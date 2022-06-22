import { Container, Header, HeaderLeft, HeaderRight, Content } from "./ContentContainer.styled";

type TContentContainer = {
	// eslint-disable-next-line no-undef
	headerLeftComponents: JSX.Element;
	// eslint-disable-next-line no-undef
	headerRightComponents: JSX.Element;
	// eslint-disable-next-line no-undef
	content: JSX.Element;
};

const ContentContainer = ({
	headerLeftComponents,
	headerRightComponents,
	content,
}: TContentContainer) => {
	return (
		<Container>
			<Header>
				<HeaderLeft>{headerLeftComponents}</HeaderLeft>
				<HeaderRight>{headerRightComponents}</HeaderRight>
			</Header>
			<Content>{content}</Content>
		</Container>
	);
};

export default ContentContainer;
