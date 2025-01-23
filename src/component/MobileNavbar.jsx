import React from 'react'
import { NavLink } from 'react-router-dom';
import {
	FaHome,
	FaInfoCircle,
	FaBriefcase,
    FaUser
} from "react-icons/fa";
import ShowMore from './ShowMore';
import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
const MobileNavbar = () => {

	const [openShowMore, setOpenShowMore] = useState(false)
	const openMore = () => setOpenShowMore(true)
	const closeMore = () => setOpenShowMore(false)

	const activeLink = ({ isActive }) =>
		isActive ?"activeLink text-decoration-none" : "active text-decoration-none ";
  return (
		<>
			<nav
				className="fixed bottom-0 z-50 bg-white flex md:hidden flex-row items-center justify-between w-full px-1"
				style={{ height: "11vh", borderTop: "1px solid gray" }}>
				<NavLink className={activeLink} to={"/"}>
					<FaHome className="text-lg block mx-auto mt-1" />
					<span className="text-sm">Home</span>
				</NavLink>
				<NavLink className={activeLink} to={"/about"}>
					<FaInfoCircle className="text-lg block mx-auto mt-1" />
					<span className="mt-5 text-sm">About</span>
				</NavLink>
				<NavLink c className={activeLink} to={"/jobs"}>
					<FaBriefcase className="text-lg block mx-auto mt-1" />
					<span className="mt-5 text-sm">Find Jobs</span>
				</NavLink>
				<NavLink className={activeLink} to={"/profile"}>
					<FaUser className="text-lg block mx-auto mt-1" />
					<span className="relative mt-5 text-sm">Profile</span>
				</NavLink>
				<div>
					<div
						onClick={openMore}
						className="border mb-1 rounded-full"
						style={{ borderColor: "gray" }}>
						<FaEllipsisH className="text-lg block mx-auto" />
					</div>
					<span className="relative text-sm">More</span>
				</div>
			</nav>
			{openShowMore && <ShowMore closeMore={closeMore} />}
		</>
	);
}

export default MobileNavbar
