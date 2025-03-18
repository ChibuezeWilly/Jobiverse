import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ActivityNavbar = () => {
  const location = useLocation()
	return (
		<nav className="h-14 pb-3 flex flex-row justify-start items-center space-x-10 bg-gray-200">
			{/* Centering the NavLinks */}
			<NavLink
				to="/jobs/activity"
				className={`${
					location.pathname === "/jobs/activity" ? "activeJob" : ""
				} text-base ml-5 md:ml-10 lg:ml-20`}
				style={{ fontFamily: "Rubik" }}>
				Saved
			</NavLink>

			<NavLink
				to="/jobs/activity/applications" // Fixed the path
				className={`${location.pathname.endsWith(
					"activity/applications"
				) ? 'activeJob' : ''} text-base ml-5 md:ml-10`}
				style={{ fontFamily: "Rubik" }}>
				Applications
			</NavLink>
		</nav>
	);
};

export default ActivityNavbar;
