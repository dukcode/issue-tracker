import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "Component/NotFound";
import Main from "Component/Main";
import Login from "Component/Login";
import Home from "Component/Home";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
