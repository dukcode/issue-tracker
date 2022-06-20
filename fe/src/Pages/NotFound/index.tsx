import { Link } from "react-router-dom";
import { StyledGoHome, StyledNotFound } from "./NotFound.styled";

const NotFound = () => {
	return (
		<StyledNotFound>
			<div>404</div>
			<Link to="/">
				<StyledGoHome>GO HOME</StyledGoHome>
			</Link>
		</StyledNotFound>
	);
};

export default NotFound;
