import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const JobsNavbar = () => {
	const location = useLocation();
	return (
		<>
			<nav
				className="ml-5 md:ml-0 border-gray-400 flex flex-row justify-between md:justify-center items-center mt-20 md:mt-10 pb-3 space-x-3 md:space-x-10"
				style={{ borderBottomWidth: "1px" }}>
				{/* Centering the NavLinks */}
				<NavLink
					to="/jobs"
					className={`text-base font-bold ${
						location.pathname === "/jobs" ? "activeJob" : ""
					} `}
					style={{ fontFamily: "Rubik" }}>
					Featured Jobs
				</NavLink>

				<NavLink
					to="/jobs/featured" // Fixed the path
					className={`text-base font-bold ${
						location.pathname === "/jobs/featured" ? "activeJob" : ""
					}`}
					style={{ fontFamily: "Rubik" }}>
					Jobs by Category
				</NavLink>
			</nav>
			
		</>
	);
};

export default JobsNavbar;
