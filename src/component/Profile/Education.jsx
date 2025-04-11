import React from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import EducationInput from "./EducationInput";
import { useEducationStore } from "../../Zustand";
import { useNavigate} from "react-router-dom";

const Education = () => {
	const [click, setClick] = useState(false);
	const openEducationModal = () => setClick(true);
	const closeEducationModal = () => setClick(false);
	const navigate = useNavigate();

	const toAllEducations = () => navigate("/profile/allEducations");

	const {
		school,
		degree,
		fieldOfStudy,
		startMonth,
		startYear,
		endMonth,
		endYear,
		activities,
		description,
		skills,
		education,
		setEducation,
		resetAllField,
	} = useEducationStore();

	const addEducation = (edu) => {
		setEducation({
			school,
			degree,
			fieldOfStudy,
			startMonth,
			startYear,
			endMonth,
			endYear,
			activities,
			description,
			skills,
		});
		closeEducationModal();
		resetAllField();
	};

	const deleteExperience = () => {};

	return (
		<>
			<div className="bg-white mt-2 h-auto py-7 px-3 md:px-7 pb-20">
				<div className="flex flex-row justify-between items-center">
					<h1
						className="font-bold text-lg md:text-xl mb-3"
						style={{ fontFamily: "Rubik" }}>
						Education
					</h1>
					<div className="flex flex-row items-center space-x-3">
						<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
							<FaPlus
								className="text-xl md:text-2xl text-gray-700"
								onClick={openEducationModal}
							/>
						</div>
						<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
							<FaPencilAlt
								className="text-lg md:text-xl text-gray-700"
								onClick={toAllEducations}
							/>
						</div>
					</div>
				</div>
				{education.map((edu) => (
					<div className="mt-3 ml-5">
						<h1
							className="font-bold 
						text-base">
							{edu.school}
						</h1>
						<p className="text-base">{edu.degree}</p>
						<div className="flex flex-row gap-3">
							<div className="flex flex-row gap-2">
								<p className="text-gray-700 text-base">{edu.startMonth}</p>
								<p className="text-gray-700 text-base">{edu.startYear}</p>
							</div>
							<div className="flex flex-row gap-2">
								<p className="text-gray-700 text-base">{edu.endMonth}</p>
								<p className="text-gray-700 text-base">{edu.endYear}</p>
							</div>
						</div>

						<div className="skills flex flex-row mt-5 gap-3">
							<p className="font-semibold space-x-5">Skills: </p>
							<ul className=" space-x-2 list-none">
								{edu.skills.map((eduSkills) => (
									<span className="font-bold">{eduSkills}</span>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			{click && (
				<EducationInput
					closeEducationModal={closeEducationModal}
					addEducation={addEducation}
				/>
			)}
		</>
	);
};

export default Education;
