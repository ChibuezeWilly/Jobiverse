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
      
      {/* Upload Buttons Container */}
      <div className="flex flex-col space-y-3">
        {/* Local File Upload Button */}
        <button
          type="button"
          className="border border-blue-400 rounded-full py-2 text-blue-600 font-medium hover:bg-blue-50 transition">
          Attach
        </button>
        {/* Dropbox Integration Button */}
        <button
          type="button"
          className="border border-blue-400 rounded-full py-2 text-blue-600 font-medium hover:bg-blue-50 transition">
          Dropbox
        </button>
        {/* Google Drive Integration Button */}
        <button
          type="button"
          className="border border-blue-400 rounded-full py-2 text-blue-600 font-medium hover:bg-blue-50 transition">
          Google Drive
        </button>
      </div>
      
      {/* Accepted File Types Information */}
      <span className="text-xs text-gray-500 mt-2">
        Accepted file types: pdf, doc, docx, txt, rtf
      </span>
    </div>
  )
}

export default CoverLetter
