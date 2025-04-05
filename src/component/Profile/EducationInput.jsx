import React from "react";
import { useState } from "react";
import { FaPlus, FaTimes, FaBars } from "react-icons/fa";
import { useEducationStore } from "../../Zustand";
const EducationInput = ({
	closeEducationModal,
	addEducation,
	deleteExperience,
}) => {
	const {
		school,
		degree,
		fieldOfStudy,
		startMonth,
		startYear,
		endMonth,
		endYear,
		grade,
		activities,
		description,
		skills,
		skill,
		setSchool,
		setSkill,
		setDegree,
		setField,
		setStartMonth,
		setStartYear,
		setEndMonth,
		setEndYear,
		setGrade,
		setActivities,
		setDescription,
		setSkills,
		deleteSkill,
	} = useEducationStore();

	const addSkills = (e) => {
		e.preventDefault();
		if (skill.trim() !== "") {
			setSkills(skill);
			setSkill("");
		}
	};

	const removeSkill = (skill) => {
		deleteSkill(skill);
		console.log(skill);
	};

	const [showSkills, setShowSkills] = useState(false);
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 w-full h-screen">
			<div
				className={`formModals fixed rounded-lg bg-white mx-2 z-50 py-5 px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10`}>
				<div className="relative overflow-y-auto h-full overflow-x-hidden">
					<div className="sticky top-0 w-full flex flex-row justify-between items-center bg-white py-1 overflow-x-hidden z-50">
						<h1 className="font-semibold text-lg md:text-xl">Add Education</h1>
						<FaTimes
							className="text-xl md:text-2xl"
							onClick={closeEducationModal}
						/>
					</div>
					<form className="mt-5">
						{/* School */}
						<label
							htmlFor="school"
							className="text-base font-semibold w-full text-gray-700">
							School
						</label>
						<input
							type="text"
							name="school"
							id="school"
							placeholder="School"
							value={school}
							onChange={(e) => setSchool(e.target.value)}
							className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
						/>

						{/* Degree */}
						<label
							htmlFor="degree"
							className="text-base font-semibold w-full text-gray-700 mt-3 block">
							Degree
						</label>
						<input
							type="text"
							name="degree"
							id="degree"
							placeholder="Degree"
							value={degree}
							onChange={(e) => setDegree(e.target.value)}
							className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
						/>

						{/* Field of Study */}
						<label
							htmlFor="fieldOfStudy"
							className="text-base font-semibold w-full text-gray-700 mt-3 block">
							Field of Study
						</label>
						<input
							type="text"
							name="fieldOfStudy"
							id="fieldOfStudy"
							placeholder="Field of Study"
							value={fieldOfStudy}
							onChange={(e) => setField(e.target.value)}
							className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
						/>

						{/* Start Date */}
						<label className="text-base font-semibold w-full text-gray-700 mt-3 block">
							Start Date
						</label>
						<div className="flex gap-4">
							<select
								name="startMonth"
								value={startMonth}
								onChange={(e) => setStartMonth(e.target.value)}
								className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal">
								<option value="">Month</option>
								{[
									"Jan",
									"Feb",
									"Mar",
									"Apr",
									"May",
									"Jun",
									"Jul",
									"Aug",
									"Sep",
									"Oct",
									"Nov",
									"Dec",
								].map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>
							<input
								type="number"
								name="startYear"
								placeholder="Year"
								value={startYear}
								onChange={(e) => setStartYear(e.target.value)}
								className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
							/>
						</div>

						{/* End Date */}
						<label className="text-base font-semibold w-full text-gray-700 mt-3 block">
							End Date
						</label>
						<div className="flex gap-4">
							<select
								name="endMonth"
								value={endMonth}
								onChange={(e) => setEndMonth(e.target.value)}
								className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal">
								<option value="">Month</option>
								{[
									"Jan",
									"Feb",
									"Mar",
									"Apr",
									"May",
									"Jun",
									"Jul",
									"Aug",
									"Sep",
									"Oct",
									"Nov",
									"Dec",
								].map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>
							<input
								type="number"
								name="endYear"
								placeholder="Year"
								value={endYear}
								onChange={(e) => setEndYear(e.target.value)}
								className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
							/>
						</div>

						{/* Grade */}
						<label
							htmlFor="grade"
							className="text-base font-semibold w-full text-gray-700 mt-3 block">
							Grade
						</label>
						<input
							type="text"
							name="grade"
							id="grade"
							placeholder="Grade"
							value={grade}
							onChange={(e) => setGrade(e.target.value)}
							className="h-10 w-full mt-1 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
						/>

						{/* Activities and Societies */}
						<label
							htmlFor="activities"
							className="text-base font-semibold w-full text-gray-700 mt-3 block">
							Activities and Societies
						</label>
						<textarea
							name="activities"
							id="activities"
							placeholder="Activities and Societies"
							value={activities}
							onChange={(e) => setActivities(e.target.value)}
							className="overflow-y-auto h-28 mt-3 pl-3 pt-1 w-full border-gray-800 rounded-md text-base text-gray-700 border-b-gray-800"
							style={{ borderWidth: "1px" }}
						/>

						{/* Description */}
						<label
							htmlFor="description"
							className="text-base font-semibold w-full text-gray-700 mt-3 block">
							Description
						</label>
						<textarea
							name="description"
							id="description"
							placeholder="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="overflow-y-auto h-28 mt-3 pl-3 pt-1 w-full border-gray-800 rounded-md text-base text-gray-700 border-b-gray-800"
							style={{ borderWidth: "1px" }}
						/>
					</form>
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
							<FaPlus
								className="-ml-7 mt-1 cursor-pointer"
								onClick={addSkills}
							/>
						</div>
					</form>
					<ul className="list-none mt-6">
						{skills.map((skill, index) => (
							<div className="" key={index}>
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
							className="text-red-600 border-red-600 h-10 w-44 rounded-md font-bold"
							style={{ borderWidth: "1px" }}>
							Remove from Profile
						</button>
						<button onClick={addEducation}
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

export default EducationInput;
