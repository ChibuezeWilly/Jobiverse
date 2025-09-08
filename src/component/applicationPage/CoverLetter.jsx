import React from 'react'

/**
 * Cover Letter Upload Component
 * Handles cover letter file upload with multiple options
 * Includes local file upload, Dropbox, and Google Drive integration
 */
const CoverLetter = () => {
  return (
		<div className="w-full sm:w-[35%] flex flex-col mb-5">
			{/* Cover Letter Label */}
			<label
				className="text-black font-bold text-sm mb-2"
				style={{ fontFamily: "Roboto" }}>
				Cover Letter <span className="text-red-600 ml-[1px]">*</span>
			</label>

			<div className="flex flex-col justify-center items-center space-y-3 h-10 w-60 border border-blue-600 rounded-full">
				{/* Local File Upload Button */}
				<input type="file" name="resume" id="" className="ml-24" />
				{/* Dropbox Integration Button */}
			</div>

			{/* Accepted File Types Information */}
			<span className="text-xs text-gray-500 mt-2">
				Accepted file types: pdf, doc, docx, txt, rtf
			</span>
		</div>
	);
}

export default CoverLetter
