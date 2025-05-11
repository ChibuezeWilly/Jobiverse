import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import FeaturedJobList from "./FeaturedJobList";
import jobs from "../jobs.json";
const FeaturedJobs = () => {
	const data = JobData.joblistings;
	console.log(data);

	useEffect(() => {
		if (data?.length > 0) {
			setSelectedJob(data[0]);
			console.log(data);
		}
	}, []);
	// button to jobs
	const navigate = useNavigate();
	const toJobs = () => navigate("/jobs");

	return (
		<div className="pt-5 pb-5 px-5 lg:px-10 mt-20 bg-slate-200">
			<h1
				className="text-xl text-blue-600 text-center md:text-start"
				style={{ fontFamily: "Rubik" }}>
				Featured Jobs
			</h1>
			<h1
				className="text-2xl sm:text-3xl  lg:text-5xl mt-5 font-bold text-center md:text-start"
				style={{ fontFamily: "Rubik" }}>
				Unlock Your Dream Career <br />
				Tailored Just for You!
			</h1>
			<div className="bg-slate-200">
				{isLoading ? (
					<Spinner />
				) : error ? (
					<p className="text-red-700 text-center text-2xl">{error}</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-10 pb-10">
						{data.map((job) => (
							<FeaturedJobList job={job} key={job.id} />
						))}
					</div>
				)}
			</div>

			<div className="flex justify-center items-center" onClick={toJobs}>
				<button className="bg-blue-600 text-white h-10 md:h-16 w-48 rounded-md text-center font-semibold text-lg">
					Browse Featured Jobs
				</button>
			</div>
		</div>
	);
};

export default FeaturedJobs;
