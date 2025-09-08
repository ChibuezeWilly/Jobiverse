import React, { useState, useEffect } from "react";

const AddJobPage = () => {
	const [status, setStatus] = useState("");
	const [allFields, setAllFields] = useState(false);

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

		const requiredFields = [
			"title",
			"companyName",
			"companyEmail",
			"location",
			"description",
		];

		const filled = requiredFields.every(
			(field) => formData[field].trim() !== ""
		);

		if (!filled) {
			setAllFields(false);
			setStatus("❌ Please fill all required fields");
			return;
		}

		setAllFields(true);
		setStatus("✅ Your job has been added");
	};

	// Auto-hide status after 3 seconds
	useEffect(() => {
		if (status) {
			const timer = setTimeout(() => setStatus(""), 3000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	return (
		<div className="flex flex-center justify-center items-center mx-auto pt-20 py-5 px-2 md:px-5 bg-gray-200 rounded">
			{/* Status modal */}
			{status && (
				<div
					className={`fixed text-white ${
						allFields ? "bg-green-600" : "bg-red-600"
					} h-10 w-80 px-5 top-2 left-0 right-0 z-50 mx-auto shadow-xl rounded-md flex justify-center items-center text-base`}
					style={{ fontFamily: "Poppins" }}>
					{status}
				</div>
			)}

			<form
				onSubmit={handleSubmit}
				className="flex flex-col mx-auto p-6 bg-white rounded-md shadow-md space-y-4 w-full md:w-3/6 mt-5 mb-10">
				<h2 className="text-2xl text-center font-bold">Add New Job</h2>

				<input
					name="title"
					value={formData.title}
					onChange={handleChange}
					placeholder="Job Title"
					className={input}
				/>
				<input
					name="companyName"
					value={formData.companyName}
					onChange={handleChange}
					placeholder="Company Name"
					className={input}
				/>
				<input
					name="companyPhone"
					value={formData.companyPhone}
					onChange={handleChange}
					placeholder="Company Phone"
					className={input}
				/>
				<input
					name="companyEmail"
					value={formData.companyEmail}
					onChange={handleChange}
					placeholder="Company Email"
					className={input}
				/>
				<input
					name="companyRating"
					value={formData.companyRating}
					onChange={handleChange}
					placeholder="Company Rating"
					className={input}
				/>
				<input
					name="location"
					value={formData.location}
					onChange={handleChange}
					placeholder="Location"
					className={input}
				/>

				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Job Description"
					className={input}
				/>

				<input
					name="employmentType"
					value={formData.employmentType}
					onChange={handleChange}
					placeholder="Employment Type"
					className={input}
				/>
				<input
					name="salary"
					value={formData.salary}
					onChange={handleChange}
					placeholder="Salary"
					className={input}
				/>
				<input
					name="bonus"
					value={formData.bonus}
					onChange={handleChange}
					placeholder="Bonus"
					className={input}
				/>
				<input
					name="datePosted"
					value={formData.datePosted}
					onChange={handleChange}
					placeholder="Date Posted (e.g., 4d)"
					className={input}
				/>

				{/* Benefits */}
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
								className={input}
							/>
						))}
					</div>
					<button
						type="button"
						onClick={() => addArrayItem("benefitsPackage")}
						className={btn}>
						+ Add Benefit
					</button>
				</div>

				{/* Requirements */}
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
								className={input}
							/>
						))}
					</div>
					<button
						type="button"
						onClick={() => addArrayItem("requirements")}
						className={btn}>
						+ Add Requirement
					</button>
				</div>

				<textarea
					name="responsibilities"
					value={formData.responsibilities}
					onChange={handleChange}
					placeholder="Job Responsibilities"
					className={input}
				/>

				<button
					type="submit"
					className="bg-blue-600 w-44 h-10 rounded-md text-white flex justify-center items-center mx-auto mt-5">
					Submit Job
				</button>
			</form>
		</div>
	);
};

// Tailwind helpers
const input =
	"h-10 w-full mt-1 block bg-white outline-blue-700 text-black border-gray-800 pl-3 rounded-md";
const btn =
	"mt-3 inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors";

export default AddJobPage;
