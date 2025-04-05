import React from "react";
import { useState } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

const About = () => {
	const [about, setAbout] = useState("");
	const [click, setClick] = useState(false);
	const showModal = () => setClick(true);
	const closeModal = () => setClick(false);
	// const handleUpdatedAbout = () => {
	// use a patch request here and get the user id to update
	// }
	return (
		<div className="bg-white h-auto w-full px-3 md:px-7 mt-2 py-7 rounded-md">
			<div className="aboutModal">
				<div className="flex flex-row justify-between items-center">
					<h1 className="font-bold text-lg md:text-xl mb-3">About</h1>
					<div
						className="hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer ml-2"
						onClick={showModal}>
							<FaPencilAlt className="text-lg md:text-xl text-gray-700 ml-3" />
					</div>
				</div>
			</div>
			<div
				className={` ${
					click ? "block" : "hidden"
				} fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 w-full h-screen`}>
				<div
					className={`${
						click ? "block" : "hidden"
					} formModals fixed rounded-lg bg-white mx-2 z-50 py-3 px-7 md:px-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10 overflow-y-auto`}>
					<FaTimes
						className="text-2xl md:text-3xl float-end"
						onClick={closeModal}
					/>
					<h1
						className="font-bold text-2xl mt-5">
						About
					</h1>
					<div className="overflow-y-auto">
						<textarea
							name="about"
							value={about}
							onChange={(e) => setAbout(e.target.value)}
							className=" overflow-y-auto h-40 mt-3 pl-3 pt-1 w-full border-gray-800 rounded-md text-base text-gray-900"
							id="about"
							style={{ borderWidth: "1px" }}
							maxLength={2600}></textarea>
					</div>
					<div className="flex flex-row justify-end items-center gap-3 mt-5">
						<button
							className="text-red-600 border-red-600 h-10 w-44 rounded-md font-bold"
							style={{ borderWidth: "1px" }}>
							Remove from Profile
						</button>
						<button
							onClick={closeModal}
							onChange={(e) => setAbout(e.target.value)}
							className="text-white  h-10 w-20 rounded-md font-bold bg-[#00706C]"
							style={{ borderWidth: "1px" }}>
							Save
						</button>
					</div>
				</div>
			</div>

			<div
				name="about"
				value={about}
				onChange={(e) => setAbout(e.target.value)}
				className="h-64 mt-5 pl-3 pt-1 text-black w-full rounded-md"
				id="about"
				maxLength={2600}>
				{about}
			</div>
		</div>
	);
};

export default About;
