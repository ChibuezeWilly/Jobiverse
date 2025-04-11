import React from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import { useFormStore } from "../../Zustand";
import ProfilePicture from "/assets/images/profileUpload.jpg";

const Information = ({
	headerClick,
	closeHeaderModal,
	uploadedprofilePicture,
	handlePhotoUpload,
}) => {
	const {
		name,
		phone,
		gender,
		email,
		dob,
		exp,
		qualifications,
		jobTitle,
		salary,
		heading,
		locations,
		link,
		linkText,
		city,
	setName,
	setPhone,
	setGender,
	setEmail,
	setDob,
	setExp,
	setQualifications,
	setJobTitle,
	setSalary,
	setHeading,
	setLocations,
	setCity,
	setLink,
	setLinkText
	} = useFormStore();

	const options = useMemo(() => countryList().getData(), []);

	return (
		<div className="" style={{ fontFamily: "Poppins" }}>
			{/* headerInputs */}
			<div
				className={` ${
					headerClick ? "block" : "hidden"
				} fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 w-full h-screen`}
				style={{ fontFamily: "Poppins", zIndex: 1050 }}>
				<div
					className={`${
						headerClick ? "block" : "hidden"
					} formModals fixed rounded-lg bg-white mx-2 z-50 py-3 px-7 md:px-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] mt-10`}
					style={{ zIndex: 1050 }}>
					<div className="relative overflow-y-auto h-full">
						<FaTimes
							className="text-2xl md:text-3xl float-end"
							onClick={closeHeaderModal}
						/>
						<h1 className="font-bold text-lg md:text-3xl mb-3 mt-5">
							Information
						</h1>

						<div className=" flex flex-row w-full items-center space-x-2 mb-4">
							<div
								className="mt-10 h-24 w-24 md:h-36 md:w-36 rounded-full border-gray-400"
								style={{ borderWidth: "3px" }}>
								<img
									src={uploadedprofilePicture || ProfilePicture}
									alt="Profile Photo"
									className="h-full object-cover w-full rounded-full "
								/>
							</div>
							<div className="flex flex-col mt-5 w-2/3">
								<p className="text-sm font-semibold mb-3 mt-5">
									Upload a new Profile Photo
								</p>
								<div className="border border-gray-200 h-10 w-full">
									<input
										type="file"
										className="h-8 text-base rounded-sm border-none outline-none mt-1 overflow-hidden w-full"
										style={{ fontFamily: "Rubik" }}
										onChange={handlePhotoUpload}
									/>
								</div>
							</div>
						</div>

						<label
							htmlFor="full-name"
							className="text-base font-semibold w-full">
							Profile Summary
							<textarea
								name="heading"
								value={heading}
								id="heading"
								className=" overflow-y-auto h-28 mt-3 pl-3 pt-1 text-black w-full border-gray-800 rounded-md"
								style={{ borderWidth: "1px" }}
								maxLength={300}
								onChange={(e) => setHeading(e.target.value)}></textarea>
						</label>

						<form
							action=""
							className="grid grid-cols-1  place-items-center mt-7 gap-3 md:gap-6">
							<label
								htmlFor="full-name"
								className="text-base font-semibold w-full">
								Full Name
								<input
									type="text"
									value={name}
									name="full-name"
									onChange={(e) => setName(e.target.value)}
									id="full name"
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
									autoComplete="on"
								/>
							</label>
							<label
								htmlFor="full-name"
								className="text-base font-semibold w-full">
								Phone Number
								<input
									type="tel"
									name="phone-number"
									id="phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									pattern="[\+]?[0-9\-\(\)\s]{6,15}"
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>
							<h2 className="font-bold text-black text-2xl md:text-4xl w-full">
								Location
							</h2>
							<label
								htmlFor="locations"
								className="text-base font-semibold w-full">
								Country/Region
								<input
									type="text"
									name="locations"
									id="locations"
									value={locations}
									onChange={(e) =>setLocations(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>
							<label htmlFor="city" className="text-base font-semibold w-full">
								City or State
								<input
									type="text"
									value={city}
									name="full-name"
									onChange={(e) => setCity(e.target.value)}
									id="city"
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>
							<label
								htmlFor="gender"
								className="text-base font-semibold w-full">
								Gender
								<select
									name="gender"
									id="gender"
									value={gender}
									onChange={(e) => setGender(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal">
									<option value="">Select Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</label>

							<label htmlFor="email" className="text-base font-semibold w-full">
								Email
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>

							<label htmlFor="dob" className="text-base font-semibold w-full">
								Date of Birth
								<input
									type="date"
									name="dob"
									id="dob"
									value={dob}
									onChange={(e) => setDob(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>

							<label htmlFor="exp" className="text-base font-semibold w-full">
								Experience
								<select
									name="exp"
									id="exp"
									value={exp}
									onChange={(e) => setExp(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal">
									<option value="">Select Experience</option>
									<option value="1">1 year</option>
									<option value="2">2 years</option>
									<option value="3">3 years</option>
									<option value="4">4 years</option>
									<option value="5">5 years</option>
									<option value="6">6 years</option>
									<option value="7">7 years</option>
									<option value="9">9 years</option>
									<option value="10+">10+ years</option>
								</select>
							</label>

							<label
								htmlFor="qualifications"
								className="text-base font-semibold w-full">
								Qualifications
								<select
									name="qualifications"
									id="qualifications"
									value={qualifications}
									onChange={(e) => setQualifications(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal">
									<option value="">Select Qualification</option>
									<option value="highschool">
										High School Diploma / Certificate
									</option>
									<option value="diploma">Diploma</option>
									<option value="bachelor">Bachelor’s Degree</option>
									<option value="master">Master’s Degree</option>
									<option value="phd">Doctor of Philosophy (PhD)</option>
								</select>
							</label>

							<label
								htmlFor="job-title"
								className="text-base font-semibold w-full">
								Job Title
								<input
									type="text"
									name="job-title"
									id="job-title"
									value={jobTitle}
									onChange={(e) => setJobTitle(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>

							<label
								htmlFor="salary"
								className="text-base font-semibold w-full">
								Salary Type
								<select
									name="salary"
									id="salary"
									value={salary}
									onChange={(e) => setSalary(e.target.value)}
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal">
									<option value="">Select Salary Type</option>
									<option value="hourly">Per Hour</option>
									<option value="daily">Per Day</option>
									<option value="monthly">1 month</option>
									<option value="quarterly">3 months</option>
									<option value="semiannually">6 months</option>
									<option value="annually">Per Year</option>
								</select>
							</label>

							<label
								htmlFor="profile"
								className="text-base font-semibold w-full block">
								Show my Profile
								<div className="flex items-center gap-4 mt-2 font-normal">
									<label className="flex items-center gap-1">
										<input
											type="radio"
											name="profile"
											value="yes"
											className="relative"
										/>
										Yes
									</label>
									<label className="flex items-center gap-1">
										<input
											type="radio"
											name="profile"
											value="no"
											className="relative"
										/>
										No
									</label>
								</div>
							</label>

							<h2 className="font-bold text-black text-2xl md:text-4xl w-full">
								Website
							</h2>
							<p className="text-black text-base w-full">
								Add a link that will appear at the top of your profile
							</p>

							<label htmlFor="link" className="text-base font-semibold w-full">
								Link text
								<input
									type="text"
									name="link"
									value={link}
									onChange={(e) => setLink(e.target.value)}
									id="link"
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>
							<label
								htmlFor="linktext"
								className="text-base font-semibold w-full">
								Link 
								<input
									type="text"
									name="linktext"
									value={linkText}
									onChange={(e) => setLinkText(e.target.value)}
									id="linktext"
									className="h-10 w-full mt-2 block bg-gray-200 outline-blue-700 text-black pl-3 font-normal"
								/>
							</label>
						</form>
						<div className="flex flex-row justify-end items-center gap-3 mt-10 pb-5">
							<button
								className="text-red-600 border-red-600 h-10 w-44 rounded-md font-bold"
								style={{ borderWidth: "1px" }}>
								Remove from Profile
							</button>
							<button
								onClick={closeHeaderModal}
								onChange={(e) => setAbout(e.target.value)}
								className="text-white  h-10 w-20 rounded-md font-bold bg-[#00706C]"
								style={{ borderWidth: "1px" }}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Information;
