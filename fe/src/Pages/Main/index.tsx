import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "Pages/Main/Header";
import StyledMain from "./Main.styled";

const USER_INFO = "userInfo";

const Loading = () => {
	return <div>로딩입니다</div>;
};

const Main = () => {
	const [outlet, setOutlet] = useState(<Loading />);
	const [cookies] = useCookies([USER_INFO]);
	const navigate = useNavigate();

	const checkCookies = async () => {
		const hasCookie = !(Object.keys(cookies).length === 0);
		if (!hasCookie) navigate("/login");

		// const token = cookies.userInfo.accessToken;
		const token = "dukcode";
		const baseURL = `${process.env.REACT_APP_API}`;
		const client = axios.create({
			baseURL,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		try {
			await client.get("/labels");
			setOutlet(<Outlet />);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const status = error.response?.status as number;
				if (status >= 300 || !status) navigate("/login");
			}
			console.error(error); // eslint-disable-line no-console
		}
	};

	useEffect(() => {
		checkCookies();
	}, []);

	return (
		<StyledMain>
			<Header />
			{outlet}
		</StyledMain>
	);
};

export default Main;
