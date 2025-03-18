import React from "react";
import { FaMapMarker } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const FeaturedJobList = ({ job }) => {
	AOS.init();
	const [showdescription, setShowDescription] = useState(false);
	let description = job.description;

	if (!showdescription) {
		description = description.substring(0, 117) + "  ..... ";
	}
	const navigate = useNavigate();
	const toJobPage = () => navigate(`/jobs/:id`);
	return (
		<div
			className="w-full bg-white md:w-96 rounded-md relative px-5"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="false"
			style={{ height: "380px" }}>
			<div className="flex flex-row justify-between items-center pb-3">
				<p className=" mt-5 text-base bg-blue-600 h-7 w-20 rounded-md text-center text-white">
					{job.employment_type}
				</p>
				<h1 className="mt-5">{job.date_posted}</h1>
			</div>

			<h1
				className="text-gray-900 mt-3 text-2xl font-bold"
				style={{ fontFamily: "Poppins" }}>
				{job.title}
			</h1>
			<p className="mt-2" style={{ fontFamily: "Rubik" }}>
				{description}
			</p>
			<h1
				className="mt-3 text-base text-blue-600 cursor-pointer"
				onClick={() => setShowDescription(!showdescription)}>
				{showdescription ? "Less" : "More"}
			</h1>
			<div className="flex justify-between">
				<p className=" mt-3 font-semibold text-blue-600">
					${job.salary} / Year
				</p>
				<div>
					<FaMapMarker className="text-red-700 absolute mt-4" />
					<p className="relative text-red-700 ml-6 mt-3">{job.location}</p>
				</div>
			</div>
			<div className=" bg-gray-400 w-full mt-4" style={{ height: 1 }}></div>
			<button
				className="float-end bg-blue-700 text-white h-10 w-32 rounded-md mt-3 hover:bg-white hover:text-blue-600 duration-500 ease-linear"
				onClick={toJobPage}>
				Read More
			</button>
		</div>
	);
};

export default FeaturedJobList;
