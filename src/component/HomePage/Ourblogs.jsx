import React from 'react'
import Blog1 from '/assets/images/blog1.jpg'
import Blog2 from "/assets/images/blog2.jpg";
import Blog3 from "/assets/images/blog3.jpg";
import Blog4 from "/assets/images/blog4.jpg";
import Blog5 from "/assets/images/blog5.jpg";
import Blog6 from "/assets/images/blog6.jpg";

const Ourblogs = () => {
  return (
		<div
			className="mt-20 px-5 md:px-10 lg:px-16 pb-20"
			id='#blogs'
			style={{ backgroundColor: "rgb(243, 247, 253)" }}>
			<h1
				className="text-blue-700 mt-10 text-lg"
				style={{ fontFamily: "Poppins" }}>
				Latest Blog
			</h1>
			<h1
				className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mt-1 lg:mt-5"
				style={{ fontFamily: "Poppins" }}>
				Our Regular Updated <br className="hidden lg:block" /> Blog Post
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 place-items-center gap-7">
				<div className="h-96 w-full md:w-80 rounded-md px-5 mt-5 bg-white">
					<img
						src={Blog1}
						alt=""
						className="object-cover rounded-md h-60 w-full mt-4"
					/>
					<p className="text-gray-800 mt-2 text-sm">16-03-2024</p>
					<a
						href="https://web.dev/blog/generative-ai-best-practices?hl=en"
						target="_blanck"
						className="text-lg mt-5 font-semibold text-blue-700 hover:text-blue-800 block"
						style={{ fontFamily: "Poppins" }}>
						Build responsive web experiences with generative AI
					</a>
				</div>
				{/* end of the first one */}
				<div className="h-96 w-full md:w-80 rounded-md px-5 mt-5 bg-white">
					<img
						src={Blog2}
						alt=""
						className="object-cover rounded-md h-60 w-full mt-4"
					/>
					<p className="text-gray-800 mt-2 text-sm">16-03-2024</p>
					<a
						href="https://www.icslearn.co.uk/blog/career-development/5-ways-to-land-your-dream-job-advice-from-recruiters/"
						target="_blanck"
						className="text-lg mt-5 font-semibold text-blue-700 hover:text-blue-800 block"
						style={{ fontFamily: "Poppins" }}>
						5 Ways to Land Your Dream Job
					</a>
				</div>
				{/* end of the second one */}
				<div className="h-96 w-full md:w-80 rounded-md px-5 mt-5 bg-white">
					<img
						src={Blog3}
						alt=""
						className="object-cover rounded-md h-60 w-full mt-4"
					/>
					<p className="text-gray-800 mt-2 text-sm">16-03-2024</p>
					<a
						href="https://positivepsychology.com/burnout-prevention/"
						target="_blanck"
						className="text-lg mt-3 font-semibold text-blue-700 hover:text-blue-800 block"
						style={{ fontFamily: "Poppins" }}>
						How to Avoid Burnout at Work
					</a>
				</div>
				{/* end of first */}

				{/* end of second */}

				{/* end of third */}
				<div className="h-96 w-full md:w-80 rounded-md px-5 mt-5 bg-white">
					<img
						src={Blog4}
						alt=""
						className="object-cover rounded-md h-60 w-full mt-4"
					/>
					<p className="text-gray-800 mt-2 text-sm">16-03-2024</p>
					<a
						href="https://fourthrev.com/blog-the-top-10-most-in-demand-tech-careers-for-2025/"
						target="_blanck"
						className="text-lg mt-5 font-semibold text-blue-700 hover:text-blue-800 block"
						style={{ fontFamily: "Poppins" }}>
						Top In-Demand Tech Jobs in 2024
					</a>
				</div>
				{/* end of fourth */}
				<div className="h-96 w-full md:w-80 rounded-md px-5 mt-5 bg-white">
					<img
						src={Blog5}
						alt=""
						className="object-cover rounded-md h-60 w-full mt-4"
					/>
					<p className="text-gray-800 mt-2 text-sm">16-03-2024</p>
					<a
						href="https://www.nexford.edu/insights/how-will-ai-affect-jobs"
						target="_blanck"
						className="text-lg mt-5 font-semibold text-blue-700 hover:text-blue-800 block"
						style={{ fontFamily: "Poppins" }}>
						The Future of AI and Its Impact on the Job Market
					</a>
				</div>
				{/* end of fifth */}
				<div className="h-96 w-full md:w-80 rounded-md px-5 mt-5 bg-white">
					<img
						src={Blog6}
						alt=""
						className="object-cover rounded-md h-60 w-full mt-4"
					/>
					<p className="text-gray-800 mt-2 text-sm">16-03-2024</p>
					<a
						href="https://www.indeed.com/career-advice/resumes-cover-letters/winning-resumes"
						target="_blanck"
						className="text-lg mt-5 font-semibold text-blue-700 hover:text-blue-800 block"
						style={{ fontFamily: "Poppins" }}>
						How to Craft a Winning Resume in 2024
					</a>
				</div>
				{/* end of sixth */}
			</div>
		</div>
	);
}

export default Ourblogs
