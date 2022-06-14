import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "Component/NotFound";
import Main from "Component/Main";
import Login from "Component/Main/Login";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Main />}>
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
