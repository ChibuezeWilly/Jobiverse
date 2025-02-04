import React from "react";
import { FaMapMarker, FaSearch, FaBriefcase } from "react-icons/fa";

const FindJob = () => {
	return (
		<div className="relative mt-5 md:-mt-32 mx-10 md:mx-20 h-auto px-1 py-3 space-y-3 bg-white z-20">
			{/* Form container */}
			<form
				action=""
				className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 items-center bg-transparent"
				style={{ zIndex: 1000 }}>
				{/* Work Type select */}
				<div className="relative w-full lg:w-80">
					<FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
					<select
						name="work-type"
						id="work-type"
						className="w-full lg:w-80 py-2 px-10 border rounded-md"
						style={{ border: "1px solid gray" }}>
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
					<FaMapMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
					<select
						name="location"
						id="location"
						className="w-full lg:w-80 py-2 px-10 border rounded-md"
						style={{ border: "1px solid gray" }}>
						<option value="">Select Location</option>
						<option value="on-site">On-site</option>
						<option value="hybrid">Hybrid</option>
						<option value="remote">Remote</option>
					</select>
				</div>

				{/* Job Title Input */}
				<div className="relative w-full lg:w-80">
					<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
					<input
						type="text"
						name="job-title"
						id="job-title"
						placeholder="Enter job title, skills,company"
						autoComplete="on"
						className="py-2 px-10 border rounded-md w-full"
						aria-label="Job title, skills, or company"
						style={{ border: "1px solid gray" }}
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
