import React from 'react'
import { FaMapMarker, FaSearch } from 'react-icons/fa';

const FindJob = () => {
  return (
		<div className="relative mt-5 md:-mt-32 mx-10 md:mx-20 h-auto px-5 py-3 space-y-3 bg-white md:gap-2 z-20">
			{/* Form container */}
			<form
				action=""
				className=" flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 items-center bg-transparent"
				style={{ zIndex: 1000 }}>
				{/* Location Input */}
				<div className="relative w-full lg:w-96">
					<FaMapMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
					<input
						type="text"
						name="location"
						id="location"
						placeholder="Enter Location"
						autoComplete="on"
						className="py-2 px-10 border rounded-md w-full text-start text-black"
						aria-label="Location"
						style={{ border: "1px solid gray" }}
					/>
				</div>

				{/* Job Title Input */}
				<div className="relative w-full lg:w-96">
					<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
					<input
						type="text"
						name="job-title"
						id="job-title"
						placeholder="Enter job title, skills, or company"
						autoComplete="on"
						className="py-2 px-10 border rounded-md w-full"
						aria-label="Job title, skills, or company"
						style={{ border: "1px solid gray" }}
					/>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="bg-blue-600 rounded-md text-white py-2 px-10 md:px-8 border-0 text-center mt-3 md:mt-0">
					Search Job
				</button>
			</form>
		</div>
	);
}

export default FindJob
