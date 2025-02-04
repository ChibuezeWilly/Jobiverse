import React from "react";
import JobsCard from "../HomePage/JobsCard";
import Category1 from "../../assets/images/category1.png";
import Category2 from "../../assets/images/category2.png";
import Category3 from "../../assets/images/category3.png";
import Category4 from "../../assets/images/category4.png";
import Category5 from "../../assets/images/category5.png";
import Category6 from "../../assets/images/category6.png";
import Category7 from "../../assets/images/category7.png";
import Category8 from "../../assets/images/category8.png";
import Category9 from "../../assets/images/category9.png";
import Category10 from "../../assets/images/category10.png";
import Category11 from "../../assets/images/category11.png";
import Category12 from "../../assets/images/category12.png";
import Category13 from "../../assets/images/category13.png";
import Category14 from "../../assets/images/category14.png";
import Category15 from "../../assets/images/category15.png";

import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AllCategories = () => {
	return (
		<div className="pt-20">
			<h1
				className="text-center text-2xl font-medium md:text-5xl mt-5"
				style={{ fontFamily: "Poppins" }}>
				Choose Your Desired Category
			</h1>
			<div className="px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gr5 place-items-center gap-5">
				{/* first one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg">
						<img
							src={Category1}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white">
						Business Development
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/business"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>

				{/* end onf first one */}
				{/* 2 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category2}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white">
						Content Writer
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/content"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 2 first one */}
				{/* 3 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category3}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white ">
						Graphics Designer
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/graphics"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 3 first one */}
				{/* 4 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category4}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white">
						Health & Fitness
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/health"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>

				{/* end of 4 first one */}
				{/* 5 one */}

				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category5}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white ">
						Digital Marketing
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/marketing"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>

				{/* end of 5 first one */}
				{/* 6 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category6}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white">
						Sports & Media
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/sports"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>

				{/* end 6 first one */}
				{/* 7 one */}

				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category7}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white ">
						Video Editing
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/video"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>

				{/* end of 7 first one */}
				{/* 8 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category8}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white">
						Education
					</h1>
					<p className="text-center text-base mt-3">
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/education"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 8 one*/}
				{/*9 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category9}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5 group-hover:text-white ">
						Finance & Accounting
					</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/finance"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 9 one */}
				{/* 10 one */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category10}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5">Art & Design</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/design"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 10 one */}
				{/* start of 11 */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category11}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5">Programming & Tech</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/programming"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 11 */}
				{/* start of 12 */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category12}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5">Customer Service</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/customer"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 12 */}
				{/* start of 13 */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category13}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5">Marketing</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/marketing"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 13 */}
				{/* 14 start */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category14}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5">Project Management</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/project"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 14 */}
				{/* start of 15 */}
				<JobsCard color={"jobsCategory"}>
					<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
						<img
							src={Category15}
							alt=""
							className="h-12 rounded-md mx-auto mt-2"
						/>
					</div>
					<h1 className="text-center font-semibold mt-5">Engineering</h1>
					<p className="text-center text-base mt-3">
						{" "}
						<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
							100+
						</span>{" "}
						Posted new Jobs
					</p>
					{/* Arrow Icon */}
					<NavLink to={"/engineering"}>
						<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
							<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
						</div>
					</NavLink>
				</JobsCard>
				{/* end of 15 */}
			</div>
		</div>
	);
};

export default AllCategories;
