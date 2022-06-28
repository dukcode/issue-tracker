import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "Pages/NotFound";
import Main from "Pages/Main";
import Home from "Pages/IssueList";
import Login from "Pages/Login";
import NewIssue from "Pages/NewIssue";
import Loading from "Pages/Loading";
<<<<<<< HEAD
import Labels from "Pages/Labels";
=======
import IssueDetail from "Pages/IssueDetail";
>>>>>>> 4ffe420 (feat: issue detail 페이지 생성 및 라우터 설정, list에서 클릭 시 이동 설정)

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
<<<<<<< HEAD
					<Route path="labels" element={<Labels />} />
=======
					<Route path="issue/:id" element={<IssueDetail />} />
>>>>>>> 4ffe420 (feat: issue detail 페이지 생성 및 라우터 설정, list에서 클릭 시 이동 설정)
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
