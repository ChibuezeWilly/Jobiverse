import React from "react";
import Logo from "/assets/images/logo.png";
import {
	FaCopyright,
	FaGithub,
	FaLinkedinIn,
	FaFolderOpen,
	FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer h-auto pb-14 px-6 lg:px-16 bg-black">
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 lg:pt-16 gap-2 lg:place-items-center border-gray-950 pb-5"
				style={{ borderBottom: "1px solid gray" }}>
				<div
					className="Jobiverse flex flex-col"
					style={{ fontFamily: "Rubik" }}>
					<img src={Logo} alt="logo" className="h-14 w-28 rounded-md" />
					<h1 className="mt-7 text-white">
						Where Talent Meets Opportunity. <br /> Explore Thousand of Jobs
						waiting for you
					</h1>
					<ul className="space-y-2 mt-5">
						<li className="text-base font-bold text-white">
							Address:
							<span className="font-normal ml-2 text-base text-white">
								Cotonou, Benin Republic
							</span>
						</li>
						<li className="text-white text-base font-bold">
							Email:
							<span className="text-base ml-2 font-normal text-white">
								pricelesswilliams1234@gmail.com
							</span>
						</li>
						<li className="text-base font-bold text-white">
							Call:
							<span className="font-normal ml-2 text-base text-white">
								+229 61975355
							</span>
						</li>
					</ul>
				</div>
				{/* end of first */}
				<div className="Candidate" style={{ fontFamily: "Rubik" }}>
					<h1 className="candidate  text-2xl text-blue-700">For Candidate</h1>
					<ul className="mt-10 space-y-3 text-white flex flex-col">
						<NavLink className={"text-white"} to={"/jobs"}>
							Find Jobs
						</NavLink>
						<NavLink className={"text-white"} to={"/profile"}>
							Profile
						</NavLink>
						
						<NavLink className={"text-white"} to={"/contact"}>
							Contact Us
						</NavLink>
					</ul>
				</div>
				{/* end of candidate */}
				<div className="Employer" style={{ fontFamily: "Rubik" }}>
					<h1 className="candidate  text-2xl text-blue-700">For Employer</h1>
					<ul className="mt-10 space-y-3 text-white flex flex-col">
						<NavLink className={"text-white"} to={"/addjob"}>
							Post Jobs
						</NavLink>
						<NavLink className={"text-white"} to={"/profile"}>
							Profile
						</NavLink>
					
						<NavLink className={"text-white"} to={"/contact"}>
							Contact Us
						</NavLink>
					</ul>
				</div>
			</div>
			<div
				className="copyright mt-10 flex flex-col md:flex-row justify-between text-white px-7"
				style={{ fontFamily: "Rubik" }}>
				<p>
					Copyright <FaCopyright className="inline-flex" /> 2025 by Chibueze
					Williams. All Rights Reserved
				</p>
				<ul className="links flex flex-row gap-7">
					<a
						target="_blanck"
						href={"http://www.linkedin.com/in/chibueze-obodo-27496a2b9"}
						className={"text-white"}>
						<FaLinkedinIn className="text-2xl" />
					</a>
					<a
						target="_blanck"
						href={"https://github.com/ChibuezeWilly"}
						className={"text-white"}>
						<FaGithub className="text-2xl" />
					</a>
					<a
						target="_blanck"
						href={"https://my-portfolio-ffs1.vercel.app/"}
						className={"text-white"}>
						<FaFolderOpen className="text-2xl" />
					</a>
					<a
						target="_blanck"
						href="mailto:pricelesswilliams1234@gmail.com"
						className={"text-white"}>
						<FaEnvelope className="text-2xl" />
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
