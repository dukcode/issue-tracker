import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "Component/Header";
import StyledMain from "./Main.styled";

const USER_INFO = "userInfo";

const Main = () => {
	const [cookies] = useCookies([USER_INFO]);
	const hasCookie = !(Object.keys(cookies).length === 0 && cookies.constructor === Object);
	const outlet = hasCookie ? <Outlet /> : <Navigate to="login" />;

	return (
		<StyledMain>
			<Header />
			{outlet}
		</StyledMain>
	);
};

export default Main;
