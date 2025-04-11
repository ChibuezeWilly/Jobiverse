import React from "react";
import Logo from "/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import {
	FaHome,
	FaInfoCircle,
	FaBriefcase,
	FaUser,
	FaBars,
} from "react-icons/fa";
import { FaPlus, FaRightToBracket } from "react-icons/fa6";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";
import ShowMoreNav from "./ShowMoreNav";
import SignIn from "./Login/SignIn";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

	const navigate = useNavigate()
	const toSignIn = () => navigate('/signIn')

	const [openShowMore, setOpenShowMore] = useState(false);
	const openMore = () => setOpenShowMore(true);
	const closeMore = () => setOpenShowMore(false);

	// const [login, setLogin] = useState(false)
	// const openLogin = () => {
	// 	toSignIn()
	// }
	// const closeLogin = () => setLogin(false)

	const activeLink = ({ isActive }) =>
		isActive
			? "activeNav px-4 py-1 text- text-decoration-none text-base"
			: "text-dark text-decoration-none text-base";
	return (
		<>
			<div
				className="fixed flex lg:flex-row justify-evenly items-center bg-white w-full px-1 rounded-b-xl md:rounded-none lg:px-10 gap-5 shadow-2xl"
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
						<span className="text-base"> Jobs</span>
					</NavLink>
					<NavLink className={activeLink} to={"/profile"}>
						<FaUser className="text-base block mb-1 mx-auto" />
						<span className="relative text-base">Profile</span>
					</NavLink>
					<NavLink className={activeLink} to={"/employers"}>
						<PiBuildingApartmentDuotone className="text-base block mb-1 mx-auto" />
						<span className="relative text-base">Employers</span>
					</NavLink>
					<NavLink className={activeLink} to={"/candidates"}>
						<FaUserTie className="text-base block mb-1 mx-auto" />
						<span className="relative text-base">Candidates</span>
					</NavLink>
				</nav>
				<div className="flex flex-row gap-5 ms-auto items-center">
					<div>
						<FaRightToBracket
							className=" text-base md:text-lg absolute z-50 m-2 md:ml-3"
							style={{ marginTop: "17px" }}
						/>
						<button
							type="button"
							className="button1 w-36 md:w-40 lg:w-44 h-12 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-blue-700 	hover:text-white transition-colors duration-300 relative text-end pr-2 md:pr-2 text-sm md:text-base lg:text-lg"
							onClick={toSignIn}>
							Login / Sign Up
						</button>
					</div>
					<div>
						<FaPlus className="text-lg absolute z-50 mt-3 md:mt-4 ml-5 text-white" />
						<button
							type="button"
							className="bg-blue-600 text-white lg:mr-5 w-28 lg:w-32 rounded-md h-10 md:h-12 relative text-end pr-2 text-sm md:text-lg mr-5 md:mr-0">
							Add Job
						</button>
					</div>
				</div>
				<FaBars
					className="mr-2 text-xl lg:text-2xl hidden md:flex"
					onClick={openMore}
				/>
			</div>

			{openShowMore && <ShowMoreNav closeMore={closeMore} />}

		</>
	);
};

export default Navbar;

// for employers
// import { PiBuildingApartmentDuotone } from "react-icons/pi";
// import {FaUsers} from 'react-icons/fa