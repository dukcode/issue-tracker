import { Outlet } from "react-router-dom";
import Header from "Pages/Main/Header";
import StyledMain from "./Main.styled";

const Main = () => {
	return (
		<StyledMain>
			<Header />
			<Outlet />
		</StyledMain>
	);
};

export default Main;
