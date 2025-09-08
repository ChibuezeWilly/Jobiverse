import React from "react";
import { useJobStore, useClicked, useSavedStore } from "../../Zustand";
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
import { FaArrowLeft, FaFlag } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JobsDescription = ({ data }) => {
	const { selectedJob } = useJobStore();
	const { setClicked } = useClicked();

	const { save, setSaved } = useSavedStore();

	const [openReport, setReportOpen] = useState(false);

	const navigate = useNavigate();
	const toReport = () => navigate("/report");
	const toApply = () => {
		navigate("/apply");
	};

	return (
		<>
			<div className="mb-5 md:mb-0 mt-10 md:mt-0 md:hidden">
				<FaArrowLeft
					className="absolute text-blue-600"
					style={{ marginTop: "5px" }}
				/>
				<p
					className="relative ml-6 cursor-pointer text-blue-600 hover:text-blue-800"
					onClick={() => {
						setClicked(false);
					}}>
					Back to Jobs
				</p>
			</div>
			{!data ? (
				<div>
					<p className="text-center text-xl font-bold top-1/2">No Jobs found</p>
				</div>
			) : (
				<div id={selectedJob?.id} className="pb-20 md:pb-10 md:pt-0">
					<div className="flex flex-row items-center">
						<div className="flex items-center">
							<p className="font-semibold text-black text-sm">
								{selectedJob?.company.name}
							</p>
							<FaStar className="ml-2 text-black" />
						</div>
						<div className="flex flex-row items-center space-x-3 md:space-x-7 ml-auto">
							{openReport && (
								<div
									className="absolute bg-white h-10 w-24 flex items-center mt-24 -ml-3 shadow-[0px_0px_20px_rgba(0,0,0,0.5)] rounded-md hover:bg-red-100"
									onClick={toReport}>
									<FaFlag className="absolute mt-1 ml-3" />
									<span className="ml-8 text-red-600">Report </span>
								</div>
							)}
							<div
								className=" bg-gray-200 h-7 w-7 md:h-10 md:w-10 flex justify-center items-center rounded-md relative"
								onClick={() => setReportOpen(!openReport)}>
								<FaEllipsisH className="text-black text-base md:text-xl" />
							</div>

							<div
								className="bg-gray-200 h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-md"
								onClick={() => setSaved(true)}>
								<CiBookmark
									className={`${
										save ? "text-blue-700" : "border-blue-700"
									} text-xl`}
								/>
							</div>
							<div className="flex flex-row ">
								<button
									className="bg-blue-600 text-white h-9 w-20 md:h-10 md:w-28 rounded-md hover:bg-blue-800 transition-all text-base md:text-lg relative text-start pl-2 md:pl-6"
									onClick={() => {
										toApply();
									}}>
									Apply
								</button>
								<FaArrowRightFromBracket
									className="text-white absolute ml-14 md:ml-20 "
									style={{ marginTop: "12px" }}
								/>
							</div>
						</div>
					</div>
					<p
						className="font-bold text-3xl mt-5"
						style={{ fontFamily: "Rubik" }}>
						{selectedJob?.title}
					</p>

					<div className="flex justify-start items-start space-x-2 mt-1">
						<p>{selectedJob?.location}</p>.<p>{selectedJob?.date_posted}</p>.
					</div>
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
						At {selectedJob?.company.name} we'll give you the tools to feel
						healthy, happy and secure through
					</p>
					<ul className="list-disc ml-5 space-y-2 mt-3">
						{selectedJob?.bonus && <li>{selectedJob.bonus}</li>}
						{selectedJob?.benefits_package?.map((benefits, index) => (
							<li key={index}>{benefits}</li>
						))}
					</ul>

					<p className="font-bold mt-3">Sounds good? Join us now</p>
				</div>
			)}
		</>
	);
};

export default JobsDescription;
