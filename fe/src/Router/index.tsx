import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "Component/NotFound";
import Main from "Component/Main";
import Home from "Component/Home";
import Login from "Component/Login";
import NewIssue from "Component/NewIssue";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
					<Route path="new-issue" element={<NewIssue />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
