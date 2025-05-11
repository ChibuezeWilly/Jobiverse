import React, { useState } from "react";

const AddJobPage = () => {
	const [formData, setFormData] = useState({
		title: "",
		companyName: "",
		companyPhone: "",
		companyEmail: "",
		companyRating: "",
		location: "",
		description: "",
		employmentType: "",
		salary: "",
		bonus: "",
		benefitsPackage: [""],
		datePosted: "",
		requirements: [""],
		responsibilities: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleArrayChange = (field, index, value) => {
		const updatedArray = [...formData[field]];
		updatedArray[index] = value;
		setFormData((prev) => ({ ...prev, [field]: updatedArray }));
	};

	const addArrayItem = (field) => {
		setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Job submitted:", formData);
		// submit logic here
	};

	return (
		<div className="flex flex-center justify-center items-center mx-auto pt-20 py-5 px-2 md:px-5 bg-gray-200 rounded">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col mx-auto p-6 bg-white rounded-md shadow-md space-y-4 w-full md:w-3/6 mt-5 mb-10">
				<h2 className="text-2xl text-center font-bold">Add New Job</h2>
				<input
					name="title"
					value={formData.title}
					onChange={handleChange}
					placeholder="Job Title"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>

				<input
					name="companyName"
					value={formData.companyName}
					onChange={handleChange}
					placeholder="Company Name"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<input
					name="companyPhone"
					value={formData.companyPhone}
					onChange={handleChange}
					placeholder="Company Phone"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<input
					name="companyEmail"
					value={formData.companyEmail}
					onChange={handleChange}
					placeholder="Company Email"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<input
					name="companyRating"
					value={formData.companyRating}
					onChange={handleChange}
					placeholder="Company Rating"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>

				<input
					name="location"
					value={formData.location}
					onChange={handleChange}
					placeholder="Location"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Job Description"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>

				<input
					name="employmentType"
					value={formData.employmentType}
					onChange={handleChange}
					placeholder="Employment Type"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<input
					name="salary"
					value={formData.salary}
					onChange={handleChange}
					placeholder="Salary"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<input
					name="bonus"
					value={formData.bonus}
					onChange={handleChange}
					placeholder="Bonus"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>
				<input
					name="datePosted"
					value={formData.datePosted}
					onChange={handleChange}
					placeholder="Date Posted (e.g., 4d)"
					className="h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 font-normal placeholder:text-gray-700 rounded-md"
					style={{ borderWidth: "1px" }}
				/>

				<div className="mb-3">
					<label className="block font-semibold text-lg mb-2">
						Benefits Package
					</label>

					<div className="space-y-2">
						{formData.benefitsPackage.map((item, idx) => (
							<input
								key={idx}
								value={item}
								onChange={(e) =>
									handleArrayChange("benefitsPackage", idx, e.target.value)
								}
								placeholder={`Benefit ${idx + 1}`}
								className="w-full px-4 py-2 rounded-lg  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						))}
					</div>

					<button
						type="button"
						onClick={() => addArrayItem("benefitsPackage")}
						className="mt-3 inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
						+ Add Benefit
					</button>
				</div>

				<div className="mb-6">
					<label className="block font-semibold text-lg mb-2">
						Requirements
					</label>

					<div className="space-y-2">
						{formData.requirements.map((item, idx) => (
							<input
								key={idx}
								value={item}
								onChange={(e) =>
									handleArrayChange("requirements", idx, e.target.value)
								}
								placeholder={`Requirement ${idx + 1}`}
								className="w-full px-2 py-2 rounded-lg bg-white text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
							/>
						))}
					</div>

					<button
						type="button"
						onClick={() => addArrayItem("requirements")}
						className="mt-3 flex justify-center items-center px-2 py-2 bg-blue-600 text-white font-medium rounded hover:bg-yellow-700 transition-colors">
						+ Add Requirement
					</button>
				</div>

				<button
					type="submit"
					className="bg-blue-600 w-44 h-10 rounded-md text-white flex justify-center items-center mx-auto mt-5">
					Submit Job
				</button>
			</form>
		</div>
	);
};

export default AddJobPage;
