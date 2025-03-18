import React from "react";
import { FaCheckSquare } from "react-icons/fa"

const Whychoose = () => {
	return (
		<div className="mt-16 mx-10">
			<h1
				className="font-bold text-4xl text-center"
				style={{ fontFamily: "Rubik" }}>
				Why Choose Us
			</h1>
			<p
				className=" text-base mt-3 text-center"
				style={{ fontFamily: "Rubik" }}>
				Finding the right tech job or top-tier talent shouldn't be difficult. At
				<span className="text-blue-700"> Jobiverse </span>, we personally screen
				every job,
				<br /> ensuring only the best opportunities for tech professionals while
				helping companies connect with the perfect candidates.
			</p>
			<div className="flex flex-col lg:flex-row justify-evenly items-center mt-5">
				<div className="flex flex-col lg:flex-row justify-evenly items-center space-y-6 lg:space-y-0 lg:space-x-6">
					{/* Job Seekers Card */}
					<div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-lg p-6 w-full max-w-lg">
						<h1 className="text-xl font-semibold text-gray-900 mb-4">
							Job Seekers
						</h1>
						<ul className="space-y-4">
							{/* Item 1 */}
							<li className="flex items-start space-x-3">
								<FaCheckSquare className="text-blue-700 mt-2 shrink-0" />
								<span className="text-gray-900 text-base">
									<span className="font-semibold text-lg">
										Handpicked Tech Jobs
									</span>{" "}
									- We personally screen every job to ensure quality
									opportunities.
								</span>
							</li>

							{/* Item 2 */}
							<li className="flex items-start space-x-3">
								<FaCheckSquare className="text-blue-700 mt-2 shrink-0" />
								<span className="text-gray-900 text-base">
									<span className="font-semibold text-lg">
										Opportunities for All Levels
									</span>{" "}
									- Whether you're a seasoned pro or a fresh graduate, we
									support your career growth.
								</span>
							</li>

							{/* Item 3 */}
							<li className="flex items-start space-x-3">
								<FaCheckSquare className="text-blue-700 mt-2 shrink-0" />
								<span className="text-gray-900 text-base">
									<span className="font-semibold text-lg">
										Transparent Job Listings
									</span>{" "}
									- No vague descriptions! We provide clear salary details, job
									requirements, and expectations.
								</span>
							</li>
						</ul>
					</div>

					{/* Employers Card */}
					<div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-lg p-6 w-full max-w-lg ">
						<h1 className="text-xl font-semibold text-gray-900 mb-4 pt-5">
							Employers
						</h1>
						<ul className="space-y-4">
							{/* Item 1 */}
							<li className="flex items-start space-x-3">
								<FaCheckSquare className="text-blue-700 mt-2 shrink-0" />
								<span className="text-gray-900 text-base">
									<span className="font-semibold text-lg">
										Find Verified Tech Talent
									</span>{" "}
									- Our platform connects you with skilled professionals across
									different tech fields.
								</span>
							</li>

							{/* Item 2 */}
							<li className="flex items-start space-x-3">
								<FaCheckSquare className="text-blue-700 mt-2 shrink-0" />
								<span className="text-gray-900 text-base">
									<span className="font-semibold text-lg">
										Easy Job Posting & Management
									</span>{" "}
									– Post jobs, manage applications, and hire seamlessly.
								</span>
							</li>

							{/* Item 3 */}
							<li className="flex items-start space-x-3">
								<FaCheckSquare className="text-blue-700 mt-2 shrink-0" />
								<span className="text-gray-900 text-base">
									<span className="font-semibold text-lg">
										Targeted Candidate Matching
									</span>{" "}
									- Get applicants who truly fit your role based on skills and
									experience.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Whychoose;
