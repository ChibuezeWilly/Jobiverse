import React from "react";
import { useJobStore } from "../../Zustand";

const ApplicationText = () => {
    const {selectedJob} = useJobStore()
	return (
		<div className="mt-5">
			<p className="font-bold text-3xl mt-5" style={{ fontFamily: "Rubik" }}>
				{selectedJob?.title}
			</p>

			<div className="flex flex-row justify-start items-start space-x-2">
				<p className=" mt-2 text-sm bg-blue-600 h-5 w-20 rounded-md text-center text-white">
					{selectedJob?.employment_type}
				</p>
				<p className="mt-1">Remote</p>
			</div>

			<h1
				className="mt-7 font-bold text-xl"
				style={{ fontFamily: "Sans-serif" }}>
				About the Job
			</h1>

			<h4 className="font-bold text-base mt-5">Description</h4>
			<p className="mt-2 text-wrap" style={{ fontFamily: "Sans-serif" }}>
				{selectedJob?.description}
			</p>

			<h4 className="font-bold text-base mt-5">Requirements</h4>

			<ul className="list-disc ml-5 space-y-2 mt-3">
				<li>{selectedJob?.requirements[0]}</li>
				<li>{selectedJob?.requirements[1]}</li>
				<li>{selectedJob?.requirements[2]}</li>
			</ul>

			<p className="font-bold mt-3">
				At {selectedJob?.company.name} we'll give you the tools to feel healthy,
				happy and secure through
			</p>

			<ul className="list-disc ml-5 space-y-2 mt-3">
				<li>{selectedJob?.bonus}</li>
				<li>{selectedJob?.benefits_package[0]}</li>
				<li>{selectedJob?.benefits_package[1]}</li>
				<li>{selectedJob?.benefits_package[2]}</li>
				<li>{selectedJob?.benefits_package[3]}</li>
			</ul>

			<p className="font-bold mt-3">Sounds good? Join us now</p>
		</div>
	);
};

export default ApplicationText;
