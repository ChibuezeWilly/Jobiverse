import React from "react";
import ContentJobs from "./ContentJobs";
import { FaArrowLeft } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FindJob from "../../HomePage/FindJob";
import CustomerJobs from "./CustomerJobs";

const Customer = () => {
	const navigate = useNavigate();
	const backToJobs = () => navigate("/jobs");

	return (
		<div className="pt-20 pb-10">
			<div className="mb-5 md:mb-0 mt-10 md:mt-5 ml-5" onClick={backToJobs}>
				<FaArrowLeft
					className="absolute text-blue-600"
					style={{ marginTop: "5px" }}
				/>
				<p className="relative ml-6 cursor-pointer text-blue-600 hover:text-blue-800">
					Back to Jobs Categories
				</p>
			</div>
			<h1 className="font-bold text-center text-xl md:text-3xl mt-5">
				Deliver Outstanding Customer Experiences
			</h1>
			{/* <FindJob /> */}
			<button
				className="float-end mt-7 h-8 w-36 relative hover:bg-gray-600 hover:text-white hover:h-10 hover:rounded-md"
				style={{ fontFamily: "Rubik", fontSize: "15px" }}>
				<FaBell className="absolute mt-1 text-lg" />
				<span className="ml-5">Create Job Alert</span>
			</button>
			<CustomerJobs />
		</div>
	);
};

export default Customer;
