import React from "react";
import { useExperienceStore } from "../../Zustand";
import { useState } from "react";
import { FaPlus, FaTimes, FaBars } from "react-icons/fa";

const ExperienceInput = ({
	closeEditModal,
	deleteExperience,
	addExperience,
}) => {
	const {
		workTitle,
		organization,
		startMonth,
		currentWork,
		endMonth,
		skill,
		description,
		workLocation,
		workLocationType,
		employmentType,
		setWorkTitle,
		setOrganization,
		setStartMonth,
		setEndMonth,
		setWorkLocation,
		setWorkLocationType,
		setEmploymentType,
		setCurrentWork,
		setDescription,
		setSkill,
		skillArray,
		setSkillArray,
		deleteSkill,
	} = useExperienceStore();

	const [click, setClick] = useState(null);

	const addSkills = (e) => {
		e.preventDefault();
		if (skill.trim() !== "") {
			setSkillArray(skill);
			setSkill("");
		}
	};
	const [showSkills, setShowSkills] = useState(null);

	const removeSkill = (skill) => {
		deleteSkill(skill)
		console.log(skill)
	};


	return (
		<div
			className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 w-full h-screen`}>
			<div
				className={` formModals fixed rounded-lg bg-white mx-2 z-50 py-3 px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10`}>
				<div className="relative overflow-y-auto h-full overflow-x-hidden">
					<div className="sticky top-0 w-full flex flex-row justify-between items-center bg-white py-1 overflow-x-hidden">
						<h1 className="font-semibold text-lg md:text-xl">Experience</h1>
						<FaTimes className="text-xl md:text-2xl" onClick={closeEditModal} />
					</div>
					<form
						action=""
						className="grid grid-cols-1 place-items-center
						gap-3 md:gap-5 mt-8">
						<label
							htmlFor="work title"
							className="text-base font-semibold w-full text-gray-700">
							Title
							<input
								type="text"
								value={workTitle}
								name="work-title"
								onChange={(e) => setWorkTitle(e.target.value)}
								id="work title"
								className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								autoComplete="on"
							/>
						</label>
						<label
							htmlFor="employment-type"
							className="text-base font-semibold w-full text-gray-700">
							Employment Type
							<select
								value={employmentType}
								onChange={(e) => setEmploymentType(e.target.value)}
								className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								name="employement-type"
								id="employment-type">
								<option value="select">Select Work Type</option>
								<option value="Full Time">Full-Time</option>
								<option value="Part Time">Part-Time</option>
								<option value="Self Employed">Self Employed</option>
								<option value="Freelance">Freelance</option>
								<option value="Contract">Contract</option>
								<option value="Internship">Internship</option>
								<option value="Apprenticeship">Apprenticeship</option>
							</select>
						</label>
						<label
							htmlFor="work title"
							className="text-base font-semibold w-full text-gray-700">
							Company or Organization
							<input
								type="text"
								value={organization}
								name="work-title"
								onChange={(e) => setOrganization(e.target.value)}
								id="work title"
								className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								autoComplete="on"
							/>
						</label>
						<label
							htmlFor="startDate"
							className="text-base font-semibold w-full text-gray-700">
							Start Date
							<input
								type="month"
								value={startMonth}
								onChange={(e) => setStartMonth(e.target.value)}
								name="startDate"
								id="startDate"
								className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
							/>
						</label>
						<label
							htmlFor="currentWork"
							className="text-base font-semibold w-full flex items-center gap-2 text-gray-700">
							<input
								type="checkbox"
								id="currentWork"
								value={currentWork}
								onChange={(e) => setCurrentWork('Current')}
								className="text-xl bg-gray-200 outline-blue-700 text-black"
								onClick={() => setClick(!click)}
							/>
							I am currently working in this role
						</label>
						<label
							htmlFor="endDate"
							className={`${
								click ? "hidden" : "block"
							} text-base font-semibold w-full text-gray-700`}>
							End Date
							<input
								type="month"
								value={endMonth}
								onChange={(e) => setEndMonth(e.target.value)}
								name="startDate"
								id="startDate"
								className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
							/>
						</label>
						<label
							htmlFor="work-location"
							className="text-base font-semibold w-full text-gray-700">
							Location
							<input
								type="text"
								value={workLocation}
								name="work-location"
								onChange={(e) => setWorkLocation(e.target.value)}
								id="work title"
								className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								autoComplete="on"
							/>
						</label>
						<label
							htmlFor="work-type"
							className="text-base font-semibold w-full text-gray-700">
							Location Type
							<select
								value={workLocationType}
								onChange={(e) => setWorkLocationType(e.target.value)}
								className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								name="employement-type"
								id="work-type">
								<option value="select">Select Work Location</option>
								<option value="Remote">Remote</option>
								<option value="Hybrid">Hybrid</option>
								<option value="Full Time">Full Time</option>
							</select>
						</label>
						<label
							htmlFor="description"
							className="text-base font-semibold w-full text-gray-700">
							Description
							<div className="overflow-y-auto">
								<textarea
									name="about"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className=" overflow-y-auto h-40 mt-3 pl-3 pt-1 w-full border-gray-800 rounded-md text-base text-gray-700"
									id="about"
									style={{ borderWidth: "1px" }}
									maxLength={2600}></textarea>
							</div>
						</label>
					</form>
					<h1 className="mt-5 font-semibold text-lg md:text-xl">Skills</h1>
					<p className="text-sm mt-1 font-medium text-gray-800">
						We recommend adding your top 5 used in this role. They’ll also
						appear in your Skills section.
					</p>
					<div
						className="h-8 w-28 mt-3 border-[#0A66c2] rounded-3xl flex items-center justify-evenly text-[#0A66c2] font-semibold"
						style={{ borderWidth: "1px" }}>
						<FaPlus />
						<button onClick={() => setShowSkills(true)}>Add Skill</button>
					</div>
					<form action="" className={`mt-5 ${showSkills ? "block" : "hidden"}`}>
						<div className="flex flex-row items-center">
							<input
								type="text"
								name="skill"
								id="skill"
								value={skill}
								onChange={(e) => setSkill(e.target.value)}
								placeholder="Skill (ex: Frontend Development)"
								className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								autoComplete="on"
							/>
							<FaPlus className="-ml-7 mt-1" onClick={addSkills} />
						</div>
					</form>
					<ul className="list-none mt-6">
						{skillArray.map((skill) => (
							<div className="" key={skill}>
								<li className="lists-item pe-3 ml-5">
									<div className="item-left">
										<FaTimes
											onClick={() => removeSkill(skill)}
											className="icon-close cursor-pointer"
											style={{ marginTop: "4px" }}
										/>
										<span className="item-text">{skill}</span>
									</div>
									<FaBars className="icon-menu" />
								</li>
							</div>
						))}
					</ul>
					<div className="flex flex-row justify-end items-center gap-3 mt-10">
						<button
							onClick={deleteExperience}
							className="text-red-600 border-red-600 h-10 w-44 rounded-md font-bold"
							style={{ borderWidth: "1px" }}>
							Remove from Profile
						</button>
						<button
							onClick={addExperience}
							className="text-white  h-10 w-20 rounded-md font-bold bg-[#00706C]"
							style={{ borderWidth: "1px" }}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceInput;
