import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { useState } from "react";

import MainLogin from "./component/Login/MainLogin";
import JobSeeker from "./component/Login/JobSeeker";
import SignIn from "./component/Login/SignIn";
import Employer from "./component/Login/Employer";
import "./styles.css";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import JobPage from "./Pages/JobPage";
import Jobs from "../src/component/Jobs/Jobs";
import Business from "./component/Jobs/Business";
import Content from "./component/Jobs/content/Content";
import Art from "./component/Jobs/art/Art";
import Digital from "./component/Jobs/digital/Digital";
import Education from "./component/Jobs/education/Education";
import Finance from "./component/Jobs/finance/Finance";
import Graphics from "./component/Jobs/graphics/Graphics";
import Health from "./component/Jobs/health/Health";
import Marketing from "./component/Jobs/marketing/Marketing";
import Sport from "./component/Jobs/sports/Sport";
import Tech from "./component/Jobs/tech/Tech";
import Video from "./component/Jobs/videoJobs/Video";
import Search from "./component/Jobs/Search";
import FeaturedJobs from "./component/Jobs/FeaturedJobs";
import ProfilePage from "./Pages/ProfilePage";
import { useAuthenticatedStore } from "./Zustand";

const App = () => {
	const { authenticated } = useAuthenticatedStore();
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				{authenticated ? (
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="jobs" element={<JobPage />}>
							<Route index element={<Search />} />
							<Route path="featured" element={<FeaturedJobs />} />
						</Route>
						<Route path="mainJobs" element={<Jobs />} />
						<Route path="business" element={<Business />} />
						<Route path="content" element={<Content />} />
						<Route path="art" element={<Art />} />
						<Route path="digital" element={<Digital />} />
						<Route path="education" element={<Education />} />
						<Route path="finance" element={<Finance />} />
						<Route path="graphics" element={<Graphics />} />
						<Route path="health" element={<Health />} />
						<Route path="marketing" element={<Marketing />} />
						<Route path="sports" element={<Sport />} />
						<Route path="tech" element={<Tech />} />
						<Route path="video" element={<Video />} />
						<Route path="profile" element={<ProfilePage />} />
					</Route>
				) : (
					<Route path="/" element={<MainLogin />}>
						<Route index element={<JobSeeker />} />
						<Route path="employer" element={<Employer />} />
					</Route>
				)}

				<Route path="/signIn" element={<SignIn />} />
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
