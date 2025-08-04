import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useJobStore, useClicked, useSavedStore } from "../../Zustand";

const JobsCard = ({ job }) => {
	const { selectedJob, setSelectedJob } = useJobStore();
	const { setClicked } = useClicked();
	const { save } = useSavedStore();

	return (
		<div id={`job-${job.id}`}
			// check if job is true before checking for the id
			className={`${
				selectedJob?.id === job?.id ? "bg-gray-200" : "white"
			} w-full rounded-md h-36 border-gray-300 mb-3 px-4 py-2 pb-5`}
			// set the selectedJob to the job clicked
			onClick={() => {
				setSelectedJob(job);
				setClicked(true);
				
			}}
			style={{ borderTopWidth: "1px", borderBottomWidth: "1px" }}>
			<div className="flex flex-row justify-between items-center mb-2">
				<div className="flex items-center">
					<p className="font-semibold text-black text-sm">{job.company.name}</p>
					<FaStar className="ml-2 text-black" />
				</div>
				<CiBookmark
					className={`  hover:text-blue-800 cursor-pointer transition-all duration-200 text-xl`}
				/>
			</div>
			<p className="text-black text-base font-bold">{job.title}</p>
			<p className=" mt-1 text-sm bg-blue-600 h-5 w-20 rounded-md text-center text-white">
				{job.employment_type}
			</p>
			<p className="text-black mt-1">
				<MdOutlineAttachMoney className="inline-flex text-lg -mt-1" />
				{job.salary} / year.
				<span className="text-sm"> [Employer est.]</span>
			</p>
			<p className=" text-sm text-end">{job.date_posted}</p>
		</div>
	);
};

export default JobsCard;
