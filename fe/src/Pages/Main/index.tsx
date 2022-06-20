import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios, { AxiosError } from "axios";
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
			const e = error as AxiosError;
			console.error(e); // eslint-disable-line no-console
			navigate("/login");
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
