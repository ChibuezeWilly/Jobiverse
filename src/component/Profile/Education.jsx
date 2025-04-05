import React from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import EducationInput from "./EducationInput";
import { useEducationStore } from "../../Zustand";

const Education = () => {
	const [click, setClick] = useState(false);
	const openEducationModal = () => setClick(true);
	const closeEducationModal = () => setClick(false);

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
		media,
		education,
		setEducation,
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
			grade,
			activities,
			description,
			skills,
			media,
		});
	};

	const deleteExperience = () => {
		
	}

	return (
		<>
			<div className="bg-white mt-2 h-screen py-7 px-3 md:px-7 pb-20">
				<div className="flex flex-row justify-between items-center">
					<h1 className="text-xl md:text-3xl font-bold">Education</h1>
					<div className="flex flex-row items-center space-x-3">
						<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
							<FaPlus
								className="text-xl md:text-2xl text-gray-700"
								onClick={openEducationModal}
							/>
						</div>
						<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
							<FaPencilAlt className="text-lg md:text-xl text-gray-700" />
						</div>
					</div>
				</div>
				<div className="mt-3 ml-5">
					<h1 className="font-bold text-base">
						Solid Foundation Internation School
					</h1>
					<p className="text-base">High Scholl Diploma</p>
					<p className="text-gray-700 text-base">Jan 2014 - Jan 2020</p>

					<div className="skills flex flex-row mt-5 gap-3">
						<p className="font-semibold space-x-5">Skills: </p>
						<ul className=" space-x-2 list-none">
							<span className="font-bold" >
								
							</span>
						</ul>
					</div>
				</div>
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
