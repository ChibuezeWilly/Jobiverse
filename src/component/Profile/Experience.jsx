import React from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import ExperienceInput from "./ExperienceInput";
import { useState } from "react";
import { useExperienceStore } from "../../Zustand";
import { useLocation } from "react-router-dom";

const Experience = () => {
	const {
		workTitle,
		organization,
		startMonth,
		currentWork,
		endMonth,
		skillArray,
		description,
		workLocation,
		workLocationType,
		employmentType,
		experiences,
		setSkillArray,
		setExperience,
		resetAllFields,
	} = useExperienceStore();

	const [click, setClick] = useState(null);
	const openEditModal = () => setClick(true);
	const closeEditModal = () => {
		setClick(false);
	};

	const addExperience = () => {
		setClick(false);
		setExperience({
			workTitle,
			organization,
			startMonth,
			currentWork,
			endMonth,
			skillArray,
			description,
			workLocation,
			workLocationType,
			employmentType,
		});
		setSkillArray([]);
		resetAllFields();
	};

	const deleteExperience = (experienceObject) => {
		experiences.filter((experience) => experience !== experienceObject);
	};

	const location = useLocation();
	const editExperience = () => location.pathname === "/profile/experience";

	return (
		<>
			<div className=" bg-white mt-2 py-7 px-3 md:px-7 h-auto pb-20">
				<div className="flex flex-row justify-between items-center">
					<h1
						className="font-bold text-lg md:text-xl mb-3"
						style={{ fontFamily: "Rubik" }}>
						Experience
					</h1>
					<div className="flex flex-row items-center space-x-3">
						<div
							className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
							onClick={openEditModal}>
							<FaPlus className="text-xl md:text-2xl text-gray-700" />
						</div>
						<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
							<FaPencilAlt className="text-lg md:text-xl text-gray-700" />
						</div>
					</div>
				</div>

				<div className="experience w-full h-auto mt-5">
					<div className="w-full h-auto mt-5 mb-5 ml-5">
						{experiences.map((exp) => (
							<div className="w-full h-auto mt-5 mb-5 ml-5" key={exp.workTitle}>
								<h3 className="font-bold text-xl">{exp.workTitle}</h3>
								<p className="text-base">
									{exp.organization} - {exp.employmentType}
								</p>
								<p className="text-gray-700">
									{`${exp.startMonth} - `} {exp.endMonth} {exp.currentWork}
								</p>
								<p className="text-gray-700">
									{`${exp.workLocation} - `} {exp.workLocationType}
								</p>
								<p className="mt-5">{exp.description}</p>
								<div className="skills flex flex-row mt-5 gap-3"> <h1 className="font-bold text-base">Skills</h1>
									<ul className=" space-x-2 list-none">
										{skillArray.map((skill) => (
											<span className="font-bold">{skill}</span>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{click && (
				<ExperienceInput
					closeEditModal={closeEditModal}
					addExperience={addExperience}
					deleteExperience={deleteExperience}
				/>
			)}
		</>
	);
};

export default Experience;
{
}
