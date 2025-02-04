import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { FaMapMarker } from "react-icons/fa";

const FeaturedJobs = ({job}) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showdescription, setShowDescription] = useState(false)
	const url = "http://localhost:4000/joblistings?_limit=1";
	// const description = job.description

	// if (!setShowDescription) {
	// 	description = description.substring(0,120) + '...'
	// }

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setJobs(data);
			} catch (error) {
				console.log("Error fetching data", error);
			} finally {
				setLoading(false);
			}
		};
		fetchJobs();
	});
	return (
		<div className="mx-5 lg:md:mx-16 mt-20">
			<h1
				className="text-xl text-blue-600 text-center md:text-start"
				style={{ fontFamily: "Rubik" }}>
				All Jobs
			</h1>
			<h1
				className="text-2xl sm:text-3xl  lg:text-5xl mt-5 font-bold text-center md:text-start"
				style={{ fontFamily: "Rubik" }}>
				Unlock Your Dream Career <br />
				Tailored Just for You!
			</h1>
			<div className="flex justify-center items-center md:justify-end">
				<button className="bg-blue-600 text-white h-10 w-40 md:h-16 md:w-48 rounded-md text-center mt-10 md:-mt-20 font-bold text-lg">
					Browse All Jobs
				</button>
			</div>

			{loading ? (
				<Spinner />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-10 pb-20">
					<div
						className="w-full md:w-96 bg-slate-300 rounded-md relative px-5"
						style={{ backgroundColor: "rgb(243, 248, 249)", height: "350px" }}>
						{jobs.map((job) => (
							<div>
								<h1 className=" mt-5 text-base bg-blue-600 h-7 w-20 rounded-md text-center text-white">
									{job.employment_type}
								</h1>
								<h1
									className="text-gray-900 mt-3 text-2xl font-bold"
									style={{ fontFamily: "Poppins" }}>
									{job.title}
								</h1>
								<h1 className="mt-4 text-lg">{job.description}</h1>
								<p>More</p>
								<p className=" mt-5 font-semibold text-blue-600">
									${job.salary} / Year
								</p>
								<FaMapMarker className="text-red-700 absolute mt-6" />
								<p className="relative text-red-700 ml-7 mt-5">
									{job.location}
								</p>
								<div
									className=" bg-gray-300 w-full mt-3"
									style={{ height: 1 }}></div>
								<button className="float-end bg-blue-700 text-white h-10 w-32 rounded-md mt-3 hover:bg-white hover:text-blue-600 duration-500 ease-linear">
									Read More
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default FeaturedJobs;
