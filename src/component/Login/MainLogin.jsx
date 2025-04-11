import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const MainLogin = () => {
    const activeLink = ({ isActive }) =>
			isActive
				? "font-semibold h-10 w-auto px-3 rounded-2xl border-white bg-gray-600 border-0 flex justify-center items-center"
				: "font-semibold h-10 w-auto px-3 rounded-2xl border-white bg-transparent border-0 flex justify-center items-center";
	return (
		<div className="login h-auto pb-20 overflow-y-auto relative w-full">
			<div className="flex flex-col justify-center items-center mx-auto mt-20 md:mt-5">
				<h1
					className="font-bold text-3xl md:text-4xl text-white"
					style={{ fontFamily: "Poppins" }}>
					Welcome to <span className="text-blue-500">Jobiverse</span>
				</h1>
				<nav className="mt-5 flex flex-row gap-5">
					<NavLink
						to={"/"}
						className={activeLink}
						style={{ borderWidth: "1px" }}>
						<span className="text-sm text-white">Job Seeker</span>
					</NavLink>
					<NavLink
						to={"employer"}
						className={activeLink}
						style={{ borderWidth: "1px" }}>
						<span className="text-sm text-white">Employer</span>
					</NavLink>
				</nav>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLogin;

























{
	/**<Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/jobs" element={<JobPage />}>
                    <Route index element={<Search />} />
                    <Route path="/jobs/featured" element={<FeaturedJobs />} />
                </Route>
                <Route path="/mainJobs" element={<Jobs />} />
                <Route path="/business" element={<Business />} />
                <Route path="/content" element={<Content />} />
                <Route path="/art" element={<Art />} />
                <Route path="/digital" element={<Digital />} />
                <Route path="/education" element={<Education />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/graphics" element={<Graphics />} />
                <Route path="/health" element={<Health />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/sports" element={<Sport />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/video" element={<Video />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route> */
}
