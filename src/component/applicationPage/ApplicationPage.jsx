
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import ApplicationText from "./ApplicationText";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter";

const ApplicationPage = () => {
	const navigate = useNavigate()

	const backToPreviousPage = () => {
		navigate(-1)
	}
	return (
		<div className="py-10 px-5 md:px-10 ">
			<div className="w-full sm:w-[70%] flex flex-col justify-center items-start mx-auto">
				<div className="underline decoration-blue-700" onClick={backToPreviousPage}>
					<FaArrowLeft
						className="absolute text-blue-600"
						style={{ marginTop: "5px" }}
					/>
					<p
						className="relative ml-6 cursor-pointer text-blue-600 hover:text-blue-600"
						onClick={() => {
							setClicked(false);
						}}>
						Back to Jobs
					</p>
				</div>

				<ApplicationText />
				<form
					action=""
					method="post"
					className="mt-10 w-full space-y-4 border-t border-b border-gray-400 py-7">
					<h1 className="text-xl mt-3" style={{ fontFamily: "Roboto" }}>
						Apply for this job
					</h1>

					{/* Existing form fields below */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						{/* first name of the form */}
						<label
							htmlFor="firstName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							First Name
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="firstName"
							id="FN"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>
					{/* first name of the form */}

					{/* last name of the form */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="lastName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Last Name
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="lastName"
							id="LN"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>
					{/* last name of the form */}

					{/* email of the form */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="firstName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Email
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="email"
							id="email"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>
					{/* email of the form */}

					{/* phone of the form */}
					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						<label
							htmlFor="phone"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Phone
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>
					{/* phone of the form */}

					<Resume />
					<CoverLetter />

					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						{/* first name of the form */}
						<label
							htmlFor="firstName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							LinkedIn URL
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="firstName"
							id="FN"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						{/* first name of the form */}
						<label
							htmlFor="firstName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							Where are you based?
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="firstName"
							id="FN"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>

					<div className="border border-gray-400 w-full sm:w-[60%] px-2 h-auto py-1 flex flex-col rounded-md">
						{/* first name of the form */}
						<label
							htmlFor="firstName"
							className="text-black font-bold text-sm"
							style={{ fontFamily: "Roboto" }}>
							How did you hear about
							<span class="text-red-600 ml-[1px]">*</span>
						</label>
						<input
							type="text"
							name="firstName"
							id="FN"
							className="bg-transparent mt-1 border-none outline-none ring-0 focus:ring-0"
							style={{ fontFamily: "Roboto" }}
						/>
					</div>
				</form>
				<button
					style={{ fontFamily: "Poppins" }}
					type="button"
					className="bg-black rounded-full py-2 text-white text-base px-4 mx-auto mt-4">
					Submit Application
				</button>
			</div>

			<p
				className="text-center text-lg mx-auto mt-7"
				style={{ fontFamily: "Poppins" }}>
				Powered by <span className="text-blue-600">Jobiverse</span>{" "}
			</p>
		</div>
	);
};

export default ApplicationPage;
