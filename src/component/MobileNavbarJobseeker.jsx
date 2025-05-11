import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
const MobileNavbarJobseeker = () => {

	const activeLink = ({ isActive }) =>
		isActive
			? "activeLink text-decoration-none "
			: "active text-decoration-none";
	return (
		<>
			<nav
				className="fixed bottom-0 z-50 bg-white flex md:hidden flex-row items-center justify-around w-full px-1"
				style={{ height: "11vh", borderTop: "1px solid gray" }}>
				<NavLink className={activeLink} to={"/"}>
					<FaHome className="text-lg block mx-auto mt-1" />
					<span className="text-sm">Home</span>
				</NavLink>
				<NavLink className={activeLink} to={"/about"}>
					<FaInfoCircle className="text-lg block mx-auto mt-1" />
					<span className="mt-5 text-sm">About</span>
				</NavLink>
				<NavLink className={activeLink} to={"/jobs"}>
					<FaBriefcase className="text-lg block mx-auto mt-1" />
					<span className="mt-5 text-sm">Find Jobs</span>
				</NavLink>
				<NavLink className={activeLink} to={"/candidates"}>
					<FaUserTie className="text-base block mb-1 mx-auto" />
					<span className="relative text-base">Candidates</span>
				</NavLink>
			</nav>
		</>
	);
};

export default MobileNavbarJobseeker;
