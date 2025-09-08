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
			<div className="flex flex-col justify-center items-center mx-auto mt-5">
				<h1
					className="font-bold text-3xl md:text-4xl text-white"
					style={{ fontFamily: "Poppins" }}>
					Welcome to <span className="text-blue-500">Jobiverse</span>
				</h1>
				{/* <nav className="mt-5 flex flex-row gap-5">
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
				</nav> */}
				<Outlet />
			</div>
		</div>
	);
};

export default MainLogin;
