import React from "react";
import { FaPencilAlt, FaPlus, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useAllSkills } from "../../Zustand";

const Skills = () => {
	const [click, setClick] = useState(false);
	const openSkillsModal = () => setClick(true);
	const closeSkillsModal = () => setClick(false);

	const { skill, setSkill, allSkills, setAllSkills, resetAllField } =
		useAllSkills();

	const addSkill = () => {
		if (skill.trim() !== "") {
			setAllSkills(skill)
			setSkill("");
		}
	};

	const removeSkill = (skill) => {
		deleteSkill(skill);
		console.log(skill);
	};
	return (
		<div className="bg-white mt-2 h-auto py-7 px-3 md:px-7 pb-20">
			<div className="flex flex-row justify-between items-center">
				<h1 className="font-bold text-lg md:text-xl mb-3" style={{fontFamily: 'Rubik'}}>Skills</h1>
				<div className="flex flex-row items-center space-x-3">
					<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
						<FaPlus
							className="text-xl md:text-2xl text-gray-700"
							onClick={openSkillsModal}
						/>
					</div>
					<div className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
						<FaPencilAlt className="text-lg md:text-xl text-gray-700" />
					</div>
				</div>
			</div>
			{click && (
				<div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 w-full h-screen">
					<div
						className={`formModals fixed rounded-lg bg-white mx-2 z-50 py-5 px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10`}>
						<div className="sticky top-0 w-full flex flex-row justify-between items-center bg-white py-1 overflow-x-hidden z-50">
							<h1 className="font-semibold text-lg md:text-xl">Add Skill</h1>
							<FaTimes
								className="text-xl md:text-2xl"
								onClick={closeSkillsModal}
							/>
						</div>
						<form action="" className="mt-5">
							<label
								htmlFor="skill"
								className="text-base font-semibold w-full text-gray-700 mt-3 block">
								Skills
							</label>
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
									onClick={addSkill}
								/>
							</div>
							<ul className="list-none mt-6">
								{allSkills.map((skill, index) => (
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
								<button
									onClick={addSkill}
									className="text-white  h-10 w-20 rounded-md font-bold bg-[#00706C]"
									style={{ borderWidth: "1px" }}>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
			<div className="mt-5 ml-3">
				{allSkills.map((skill) => (
					<div
						className="h-16 mb-5 border-gray-300"
						style={{ borderTopWidth: "1px", borderBottomWidth: "1px" }}>
						<p className="font-semibold text-lg block mt-4">{skill}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
