import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserPlus, FaSearch, FaCloudUploadAlt } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Steps = () => {
		AOS.init();
	
	return (
		<div className="mt-14 px-5 lg:px-20 flex flex-col lg:flex-row md:justify-start md:items-start lg:between lg:items-center space-x-5">
			{/* the left part of the steps */}
			<div className="stepsLeft left w-full lg:w-2/5">
				<p
					className="text-blue-600 font-semibold text-2xl"
					style={{ fontFamily: "Poppins" }}>
					How it Works
				</p>
				<h1
					className="text-black font-bold text-xl md:text-5xl"
					style={{ fontFamily: "Poppins" }}>
					Follow our steps we will help you
				</h1>
				<ul className="space-y-2 mt-3">
					{/* 1 */}
					<li className="flex flex-row space-x-5 items-center">
						<div className="bg-blue-600 h-7 w-7 rounded-full flex justify-center items-center">
							<FaCheckCircle className="text-white text-xl text-center " />
						</div>
						<span className="font-semibold text-gray-900 text-base">
							Trusted & Quaclity Job
						</span>
					</li>
					{/* 2 */}
					<li className="flex flex-row space-x-5 items-center">
						<div className="bg-blue-600 h-7 w-7 rounded-full flex justify-center items-center">
							<FaCheckCircle className="text-white text-xl text-center" />
						</div>
						<span className="font-semibold text-gray-900 text-base">
							International Jobs
						</span>
					</li>
					{/* 3 */}
					<li className="flex flex-row space-x-5 items-center">
						<div className="bg-blue-600 h-7 w-7 rounded-full flex justify-center items-center">
							<FaCheckCircle className="text-white text-xl text-center " />
						</div>
						<span className="font-semibold text-gray-900 text-base">
							No Extra Charge
						</span>
					</li>
					{/* 4 */}
					<li className="flex flex-row space-x-5 items-center">
						<div className="bg-blue-600 h-7 w-7 rounded-full flex justify-center items-center">
							<FaCheckCircle className="text-white text-xl text-center " />
						</div>
						<span className="font-semibold text-gray-900 text-base">
							Top companies
						</span>
					</li>
				</ul>
			</div>
			{/* ending of the left part */}

			{/* the right part of the steps */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center gap-5 w-full lg:w-3/5 mt-10 lg:mt-0 mx-auto">
				{/* first */}
				<div
					className={`firstCard h-48 w-72 sm:w-56 lg:w-60 px-5 shadow-[0_0_20px_rgba(0,0,0,0.4)] relative rounded-md`}
					data-aos="flip-right"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false">
					<FaUserPlus className="text-4xl -ml-10 lg:text-5xl absolute" />
					<p
						className="float-end text-6xl  font-bold"
						style={{ color: "rgb(56, 152, 226)" }}>
						01
					</p>
					<p
						className="mt-16 ml-10 font-bold text-lg"
						style={{ fontFamily: "Poppins" }}>
						Register <br /> Your Account
					</p>
					<p className="mt-3 text-sm">
						You need to create an account to find the best job.
					</p>
				</div>
				{/* first end */}
				{/* second */}
				<div
					className={`secondCard h-48 w-72 sm:w-56 lg:w-60 px-5 shadow-[0_0_20px_rgba(0,0,0,0.4)] relative rounded-md`}
					data-aos="flip-left"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false">
					<FaSearch className="text-4xl -ml-10 lg:text-5xl absolute mt-1" />
					<p
						className="float-end text-6xl  font-bold relative"
						style={{ color: "rgb(226, 180, 56)" }}>
						02
					</p>
					<p
						className="mt-16 ml-10 font-bold text-lg block"
						style={{ fontFamily: "Poppins" }}>
						Search Job
					</p>
					<p className="mt-3 text-sm">
						Discover exciting opportunities tailored to your unique skills and
						expertise.
					</p>
				</div>
				{/* second end */}
				{/* third */}
				<div
					className={`thirdCard h-48 w-72 sm:w-56 lg:w-60 px-5 shadow-[0_0_20px_rgba(0,0,0,0.4)] relative rounded-md`}
					data-aos="flip-right"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false">
					<FaFilePen className="text-4xl -ml-10 lg:text-5xl absolute mt-1" />
					<p
						className="float-end text-6xl  font-bold"
						style={{ color: "rgb(188, 132, 202)" }}>
						03
					</p>
					<p
						className="mt-16 ml-10 font-bold text-lg"
						style={{ fontFamily: "Poppins" }}>
						Apply <br /> For Dream Job
					</p>
					<p className="mt-3 text-sm">
						Submit your application for your dream job
					</p>
				</div>
				{/* third end */}
				{/* fourth */}
				<div
					className={`fourthCard h-48 w-72 sm:w-56 lg:w-60 px-5 shadow-[0_0_20px_rgba(0,0,0,0.4)] relative rounded-md`}
					color={"firstCard"}
					data-aos="flip-left"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true">
					<FaCloudUploadAlt className="text-4xl -ml-10 lg:text-5xl absolute" />
					<p
						className="float-end text-6xl font-bold"
						style={{ color: "rgb(86, 216, 177)" }}>
						04
					</p>
					<p
						className="mt-16 ml-10 font-bold text-lg"
						style={{ fontFamily: "Poppins" }}>
						Upload <br /> Your Resume
					</p>
					<p className="mt-3 text-sm">
						Share your resume to get noticed by employers.
					</p>
				</div>
				{/* fourth end */}
			</div>
			{/* ending of the right seteps */}
		</div>
	);
};

export default Steps;
