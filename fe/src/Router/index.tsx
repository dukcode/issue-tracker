import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "Pages/NotFound";
import Main from "Pages/Main";
import Home from "Pages/IssueList";
import Login from "Pages/Login";
import NewIssue from "Pages/NewIssue";
import Loading from "Pages/Loading";
import Labels from "Pages/Labels";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="login" element={<Login />} />
				<Route path="loading" element={<Loading />} />
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
					<Route path="new-issue" element={<NewIssue />} />
					<Route path="labels" element={<Labels />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
