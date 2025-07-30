import React from "react";
import JobsNavbar from "../component/Jobs/JobsNavbar";
import FindJob from "../component/HomePage/FindJob";
import { Outlet } from "react-router-dom";
const JobPage = () => {
	return (
		<div className="pt-10 pb-10">
			<h1 className="text-center font-bold text-xl md:text-3xl mt-14">Find the Right Job for you</h1>
			{/* <FindJob /> */}
			<JobsNavbar />
			<Outlet />
		</div>
	);
};

export default JobPage;
