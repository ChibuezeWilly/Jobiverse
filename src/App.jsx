import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import "./styles.css";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import JobPage from "./Pages/JobPage";
import Categories from "./Pages/Categories";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/jobs" element={<JobPage />} />
				<Route path="/categories" element={<Categories />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
	
};

export default App;

// work on the showmore navbar of the large screen