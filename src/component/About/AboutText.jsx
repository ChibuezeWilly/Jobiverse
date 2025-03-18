import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const AboutText = () => {
	return (
		<div
			className="mt-10 mx-7 py-3 px-5 md:mx-16 lg:mx-32 h-auto"
			style={{ backgroundColor: "#F5F5F5" }}>
			<p
				className="text-start font-bold text-xl md:text-3xl text-black"
				style={{ fontFamily: "Poppins" }}>
				World-class organisations post their jobs on
				<span className="text-blue-700"> Jobiverse</span>
			</p>
			<h3
				className="font-semibold mt-4 text-xl"
				style={{ fontFamily: "Rubik" }}>
				Our history
			</h3>
			<p className="mt-3" style={{ fontFamily: "Roboto" }}>
				Founded by Chibueze Williams, Jobiverse was created to bridge the gap
				between tech professionals and the companies that need them. The idea
				was born out of real conversations with clients, peers, and friends who
				struggled to find the right tech roles or hire the right professionals.
				Recognizing the challenges of job searching and talent acquisition
			</p>

			<h3
				className="font-semibold mt-4 text-xl"
				style={{ fontFamily: "Rubik" }}>
				Our Vision
			</h3>

			<p className="mt-3" style={{ fontFamily: "Roboto" }}>
				To be the leading platform for tech professionals and companies,
				fostering a diverse, inclusive, and dynamic job market where talent
				meets opportunity seamlessly. I envision Jobiverse as more than just a
				job board—but as a community where professionals can showcase their
				skills, grow their careers, and connect with companies that truly value
				them.
			</p>

			<h3
				className="font-semibold mt-4 text-xl"
				style={{ fontFamily: "Rubik" }}>
				Our Mission
			</h3>
			<p className="mt-3 relative" style={{ fontFamily: "Roboto" }}>
				<FaCheckSquare className="text-blue-700 absolute mt-1" />
				<span className="ml-5" style={{ fontFamily: "Roboto" }}>
					Empower tech professionals—whether seasoned experts or fresh
					graduates—to find roles that align with their skills, passion, and
					career goals.
				</span>
			</p>
			<p className="mt-2 relative" style={{ fontFamily: "Roboto" }}>
				<FaCheckSquare className="text-blue-700 absolute mt-1" />
				<span className="ml-5" style={{ fontFamily: "Roboto" }}>
					Support companies of all sizes in discovering and hiring the best tech
					talent with confidence
				</span>
			</p>
			<p className="mt-2 relative" style={{ fontFamily: "Roboto" }}>
				<FaCheckSquare className="text-blue-700 absolute mt-1" />
				<span className="ml-5" style={{ fontFamily: "Roboto" }}>
					Promote diversity and inclusion in the tech industry by providing
					equal opportunities to professionals from all backgrounds.
				</span>
			</p>
		</div>
	);
};

export default AboutText;
