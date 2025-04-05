import React from "react";
import ProfilePicture from "/assets/images/profileUpload.jpg";
import { useState } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useFormStore } from "../../Zustand";
import Information from "./Information";
import School from '/assets/images/school.jpg'
import Company from '/assets/images/company.jpg'
import { FaArrowUpFromBracket } from "react-icons/fa6";

const ProfilePhoto = () => {
	// for headerImage
	const [backgroundPicture, setBackgroundPicture] = useState(null);
	const [click, setClick] = useState(false);
	const showModal = () => setClick(true);
	const closeModal = () => setClick(false);

	const handleBackgroundImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setBackgroundPicture(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	// end of HeaderImage

	// for headerAbout
	const [uploadedprofilePicture, setUploadedProfilePicture] = useState(null);
	const [headerClick, setheaderClick] = useState(false);
	const showHeaderModal = () => setheaderClick(true);
	const closeHeaderModal = () => setheaderClick(false);

	const handlePhotoUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setUploadedProfilePicture(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	// end of header About

	// FOR ZUSTAND 
	const {name, heading, locations, city, companyName, school, link, linkText} = useFormStore()
	// 

	return (
		<>
			<div className="profilePhoto bg-white rounded-lg">
				<div className="relative z-0">
					{/* EDIT BUTTON */}
					<div className="headerModal h-40 md:h-64 w-full py-2 relative object-cover object-center">
						<div className="flex flex-row justify-end items-center h-full -z-50">
							<div
								className="flex h-7 md:h-10 w-7 md:w-10 justify-evenly items-center rounded-full mr-2 z-50 -mt-24 md:-mt-48 relative"
								onClick={showModal}
								style={{ fontFamily: "Poppins" }}>
								<FaPencilAlt className="text-lg md:text-xl text-gray-700" />
							</div>
							{backgroundPicture ? (
								<img
									src={backgroundPicture}
									alt="Background Iamge"
									className=" w-full h-full absolute object-cover object-center rounded-t-md"
								/>
							) : (
								<div className="bg-gray-400 h-full w-full absolute"></div>
							)}
						</div>
					</div>
					{/* edit button */}

					{/* header inputs */}
					<div
						className={` ${
							click ? "block" : "hidden"
						} fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 w-full h-screen`}
						style={{ zIndex: 1050 }} // Ensures modal appears over everything
					>
						<div
							className={`${
								click ? "block" : "hidden"
							} fixed rounded-lg bg-white mx-2 py-3 px-7 md:px-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10 overflow-y-auto`}
							style={{ zIndex: 1050 }}>
							<FaTimes
								className="text-2xl md:text-3xl float-end"
								onClick={closeModal}
							/>
							{/* header */}
							<div className="relative mt-5 w-full" style={{ zIndex: 1050 }}>
								<div className="flex items-center flex-row pl-2 md:pl-5 space-x-3 md:space-x-5 overflow-hidden mb-5">
									<div
										className="h-24 w-24 md:h-36 md:w-36 rounded-full border-gray-400"
										style={{ borderWidth: "3px" }}>
										<img
											src={backgroundPicture || ProfilePicture}
											alt="Profile Photo"
											className="h-full object-cover w-full rounded-full"
										/>
									</div>

									<div
										className="relative flex flex-col w-56 overflow-hidden"
										style={{ zIndex: 1050 }}>
										<p className="text-sm font-semibold mb-3 mt-5">
											Upload a new Profile Photo
										</p>
										<div className="border border-gray-200 h-10 w-full">
											<input
												type="file"
												className="h-8 text-base rounded-sm border-none outline-none mt-1 overflow-hidden w-full"
												style={{ fontFamily: "Rubik" }}
												onChange={handleBackgroundImageUpload}
											/>
										</div>
									</div>
								</div>
							</div>

							{/* end of header */}
							<div className="flex flex-row justify-end items-center gap-3 mt-5">
								<button
									onClick={closeModal}
									onChange={(e) => setAbout(e.target.value)}
									className="text-white h-10 w-20 rounded-md font-bold bg-[#00706C]"
									style={{ borderWidth: "1px" }}>
									Save
								</button>
							</div>
						</div>
					</div>
					{/* END OF HEADER INPUT INFORMATION */}

					{/* Second Header */}
					<div
						className="mt-5 pl-3 px-2 md:pl-5 md:px-2 relative"
						style={{ zIndex: 1000 }}>
						<div
							className="ml-auto flex items-center justify-center h-7 md:h-10 w-7 md:w-10 rounded-full"
							onClick={showHeaderModal}
							style={{
								fontFamily: "Poppins",
								zIndex: 1000,
							}}>
							<FaPencilAlt className="text-lg md:text-xl text-gray-700" />
						</div>
						<div
							className="-z-0 absolute h-24 w-24 md:h-36 md:w-36 rounded-full border-white -mt-24 md:-mt-36"
							style={{ borderWidth: "5px" }}>
							<img
								src={uploadedprofilePicture || ProfilePicture}
								alt="Profile Photo"
								className="h-full object-cover w-full rounded-full"
							/>
						</div>
					</div>

					{/* HEADER INFORMATION */}
					<div className="flex flex-col md:flex-row justify-between gap-3">
						<div
							className="mt-3 mx-5"
							style={{
								fontFamily: "Roboto",
							}}>
							<p className="font-semibold text-xl md:text-3xl text-black text-opacity-90">
								{name}
							</p>
							<p className="w-2/3 text-gray-800 mt-1">{heading}</p>
							<div className="flex flex-row items-center gap-1 mt-1 text-sm">
								<p className="text-gray-700">{city}</p>
								<p className="text-gray-700">{locations}</p>
							</div>
							<div
								className="flex flex-row  space-x-2 mt-3"
								style={{ color: "#0A66C2" }}>
								<a
									href={linkText}
									target="_blanck"
									className="text-sm font-bold ">
									{link}
								</a>
								{link && (
									<FaArrowUpFromBracket
										className="rotate-45 text-sm"
										style={{ marginTop: "1px" }}
									/>
								)}
							</div>
						</div>
						<aside className="mr-5 hidden md:block">
							{school && (
								<div className="flex flex-row gap-3 items-center">
									<div className="bg-gray-200 h-10 w-16 flex justify-center items-center rounded-lg">
										<img
											src={School}
											alt=""
											className="h-5 w-5 object-contain"
										/>
									</div>
									<p className="font-semibold text-gray-800">{school}</p>
								</div>
							)}

							{companyName && (
								<div className="flex flex-row gap-3 items-center mt-3">
									<div className="bg-gray-200 h-10 w-10 flex justify-center items-center rounded-lg">
										<img
											src={Company}
											alt=""
											className="h-5 w-5 object-contain"
										/>
									</div>
									<p className="font-semibold text-gray-800">{companyName}</p>
								</div>
							)}
						</aside>
					</div>
				</div>
			</div>
			{headerClick && (
				<Information
					headerClick={headerClick}
					closeHeaderModal={closeHeaderModal}
					uploadedprofilePicture={uploadedprofilePicture}
					handlePhotoUpload={handlePhotoUpload}
				/>
			)}
		</>
	);
};

export default ProfilePhoto;

// make profilePhoto Global
