import React from "react";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import {
	FaHome,
	FaInfoCircle,
	FaBriefcase,
	FaUser,
	FaBars,
} from "react-icons/fa";
import { useState } from "react";
import ShowMoreNav from "./ShowMoreNav";

const Navbar = () => {
	const [openShowMore, setOpenShowMore] = useState(false);
	const openMore = () => setOpenShowMore(true);
	const closeMore = () => setOpenShowMore(false);
	const activeLink = ({ isActive }) =>
		isActive
			? "activeNav px-4 py-1 text- text-decoration-none text-base"
			: "text-dark text-decoration-none text-base";
	return (
		<>
			<div
				className="fixed flex md:flex-row justify-evenly items-center bg-white w-full px-1 rounded-b-xl md:rounded-none lg:px-10 gap-5 shadow-2xl"
				style={{ height: "11vh", zIndex: 1000 }}>
				<img src={Logo} alt="" className="h-10 rounded-md lg:ml-7 mr-auto" />
				<nav className="flex-row items-center justify-center md:gap-12 hidden md:flex mt-1">
					<NavLink className={activeLink} to={"/"}>
						<FaHome className="text-base block mb-1 mx-auto" />
						<span className="text-base">Home</span>
					</NavLink>
					<NavLink className={activeLink} to={"/about"}>
						<FaInfoCircle className="text-base block mb-1 mx-auto" />
						<span className="text-base">About</span>
					</NavLink>
					<NavLink c className={activeLink} to={"/jobs"}>
						<FaBriefcase className="text-base block mb-1 mx-auto" />
						<span className="text-base">Find Jobs</span>
					</NavLink>
					<NavLink className={activeLink} to={"/profile"}>
						<FaUser className="text-base block mb-1 mx-auto" />
						<span className="relative text-base">Profile</span>
					</NavLink>
				</nav>
				<div className="flex flex-row gap-5 ms-auto">
					<button type="button" className="button1 px-2 md:px-4 py-2">
						Login / Sign Up
					</button>
					<button
						type="button"
						className="bg-blue-600 text-white lg:mr-5 px-5 md:px-10 rounded-md py-2">
						Add Job
					</button>
				</div>
				<FaBars className="mr-3 text-2xl hidden md:flex" onClick={openMore} />
			</div>

			{openShowMore && <ShowMoreNav closeMore={closeMore} />}
		</>
	);
};

export default Navbar;
