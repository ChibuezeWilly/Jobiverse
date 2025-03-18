import React from "react";
import { FaMapMarker, FaSearch, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import { useLocation } from "react-router-dom";
// import {useJobsStore} from "../../Zustand";

const FindJob = () => {
	AOS.init();

	const location = useLocation()
	const isHome = location.pathname === '/'

	// const [workType, workLocation, setWorkLocation, setWork, title, setTitle] = useJobsStore()


	return (
		<div
			className={` relative mt-5 ${
				isHome ? "md:-mt-28 lg:-mt-36" : "lg:mt-12"
			}  mx-10 md:mx-20 h-auto px-2 py-5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-md`}>
			{/* Form container */}
			<form
				data-aos="fade-up"
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				action=""
				className="flex flex-col lg:flex-row md:space-x-1 gap-3 items-center bg-transparent">
				{/* Work Type select */}
				<div className="relative w-full lg:w-80">
					<FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 shadow-[0_0_20px_rgba(0,0,0,0.2)] text-gray-800" />
					<select
						name="work-type"
						id="work-type"
						// value={workType}
						// onChange={(e) => setWork(e.target.value)}
						className="w-full lg:w-80 py-2 px-10 border rounded-md ml-1 text-gray-800">
						<option value="">Select Work Type</option>
						<option value="full-time">Full Time</option>
						<option value="contract">Contract</option>
						<option value="freelance">Freelance</option>
						<option value="part-time">Part Time</option>
						<option value="internship">Internship</option>
					</select>
				</div>

				{/* Location select */}
				<div className="relative w-full lg:w-80">
					<FaMapMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 shadow-[0_0_20px_rgba(0,0,0,0.2)] text-gray-800" />
					<select
						name="location"
						id="location"
						// value={workLocation}
						// onChange={(e) => setWorkLocation(e.target.value)}
						className="w-full lg:w-80 py-2 px-10 border rounded-md text-gray-800">
						<option value="">Select Location</option>
						<option value="on-site">On-site</option>
						<option value="hybrid">Hybrid</option>
						<option value="remote">Remote</option>
					</select>
				</div>

				{/* Job Title Input */}
				<div className="relative w-full lg:w-80">
					<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 shadow-[0_0_20px_rgba(0,0,0,0.2)] " />
					<input
						type="text"
						name="job-title"
						id="job-title"
						placeholder="job title, skills,company"
						// value={title}
						// onChange={(e) => setTitle(e.target.value)}
						autoComplete="on"
						className="py-2 px-10 border rounded-md w-full"
						aria-label="Job title, skills, or company"
					/>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="bg-blue-600 rounded-md text-white py-2 w-36 border-0 text-center mt-3 md:mt-0">
					Search Job
				</button>
			</form>
		</div>
	);
};

export default FindJob;
