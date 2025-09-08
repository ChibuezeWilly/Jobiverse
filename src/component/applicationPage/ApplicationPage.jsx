
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

import ApplicationText from "./ApplicationText";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter";
import Modal from "./Modal";

const ApplicationPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		resume: null,
		coverLetter: null,
		linkedinUrl: "",
		location: "",
		hearAbout: ""
	});
	const [modal, setModal] = useState({
		isVisible: false,
		message: "",
		type: "success"
	});

	const backToPreviousPage = () => {
		navigate(-1);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleFileChange = (e, field) => {
		const file = e.target.files[0];
		setFormData(prev => ({
			...prev,
			[field]: file
		}));
	};

	const validateForm = () => {
		const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'linkedinUrl', 'location', 'hearAbout'];
		const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
		
		if (!formData.resume) {
			missingFields.push('resume');
		}
		if (!formData.coverLetter) {
			missingFields.push('coverLetter');
		}

		return missingFields;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		const missingFields = validateForm();
		
		if (missingFields.length > 0) {
			setModal({
				isVisible: true,
				message: "Please fill in all required fields",
				type: "error"
			});
			return;
		}

		// If validation passes, show success message
		setModal({
			isVisible: true,
			message: "Application submitted successfully!",
			type: "success"
		});

		// Navigate back after a short delay
		setTimeout(() => {
			navigate(-1);
		}, 2000);
	};

	const closeModal = () => {
		setModal(prev => ({ ...prev, isVisible: false }));
	};

	return (
		<div className="py-10 px-5 md:px-10 ">
			<div className="w-full sm:w-[70%] flex flex-col justify-center items-start mx-auto">
				<div className="underline decoration-blue-700" onClick={backToPreviousPage}>
					<FaArrowLeft
						className="absolute text-blue-600"
						style={{ marginTop: "5px" }}
					/>
					<p
						className="relative ml-6 cursor-pointer text-blue-600 hover:text-blue-600">
						Back to Jobs
					</p>
				</div>

				<ApplicationText />
				<form
					onSubmit={handleSubmit}
					className="mt-10 w-full space-y-4 border-t border-b border-gray-400 py-7">
					<h1 className="text-xl mt-3" style={{ fontFamily: "Roboto" }}>
						Apply for this job
					</h1>

					{/* First Name */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="firstName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							First Name
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={formData.firstName}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					{/* Last Name */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="lastName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Last Name
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={formData.lastName}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					{/* Email */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="email"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Email
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					{/* Phone */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="phone"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Phone
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={formData.phone}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					{/* Resume and Cover Letter */}
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="w-full sm:w-[35%] flex flex-col mb-4">
							<label
								className="text-black font-bold text-sm mb-2"
								style={{ fontFamily: "Roboto" }}>
								Resume/CV <span className="text-red-600 ml-[1px]">*</span>
							</label>
							<input 
								type="file" 
								name="resume" 
								onChange={(e) => handleFileChange(e, 'resume')}
								accept=".pdf,.doc,.docx,.txt,.rtf"
								className="border border-blue-600 rounded-md p-2"
							/>
							<span className="text-xs text-gray-500 mt-2">
								Accepted file types: pdf, doc, docx, txt, rtf
							</span>
						</div>

						<div className="w-full sm:w-[35%] flex flex-col mb-5">
							<label
								className="text-black font-bold text-sm mb-2"
								style={{ fontFamily: "Roboto" }}>
								Cover Letter <span className="text-red-600 ml-[1px]">*</span>
							</label>
							<input 
								type="file" 
								name="coverLetter" 
								onChange={(e) => handleFileChange(e, 'coverLetter')}
								accept=".pdf,.doc,.docx,.txt,.rtf"
								className="border border-blue-600 rounded-md p-2"
							/>
							<span className="text-xs text-gray-500 mt-2">
								Accepted file types: pdf, doc, docx, txt, rtf
							</span>
						</div>
					</div>

					{/* LinkedIn URL */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="linkedinUrl"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							LinkedIn URL
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="url"
							name="linkedinUrl"
							id="linkedinUrl"
							value={formData.linkedinUrl}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					{/* Location */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="location"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Where are you based?
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="location"
							id="location"
							value={formData.location}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					{/* How did you hear about */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="hearAbout"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							How did you hear about us?
							<span className="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="hearAbout"
							id="hearAbout"
							value={formData.hearAbout}
							onChange={handleInputChange}
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>
				
					<button
						style={{ fontFamily: "Poppins" }}
						type="submit"
						className="bg-black rounded-full py-2 text-white text-base px-4 mx-auto mt-4 hover:bg-gray-800 transition-colors">
						Submit Application
					</button>
				</form>

				<p
					className="text-center text-lg mx-auto mt-7"
					style={{ fontFamily: "Poppins" }}>
					Powered by <span className="text-blue-600">Jobiverse</span>{" "}
				</p>
			</div>

			{/* Modal */}
			<Modal
				isVisible={modal.isVisible}
				message={modal.message}
				type={modal.type}
				onClose={closeModal}
			/>
		</div>
	);
};

export default ApplicationPage;
