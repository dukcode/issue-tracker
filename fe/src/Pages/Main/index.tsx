import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import labelsApi from "Api/labelsApi";
import Header from "Pages/Main/Header";
import useCookieUserInfo from "Hooks";
import StyledMain from "./Main.styled";
import MainLoading from "./MainLoading";

const Main = () => {
	const [outlet, setOutlet] = useState(<MainLoading />);
	const navigate = useNavigate();
	const cookieUserInfo = useCookieUserInfo();

	const checkLabels = async () => {
		const { accessToken } = cookieUserInfo;
		if (!accessToken) {
			navigate("/login");
			return;
		}

		const labelsResponse = await labelsApi.getLabels(accessToken);
		const { data, status } = labelsResponse;

		if (status !== 200) {
			navigate("/login");
		} else {
			console.log(data);
			setOutlet(<Outlet />);
		}
	};

	useEffect(() => {
		checkLabels();
	}, []);

	return (
		<StyledMain>
			<Header />
			{outlet}
		</StyledMain>
	);
};

export default Main;
