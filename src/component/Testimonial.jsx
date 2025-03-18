import React from "react";
import TestimonialDot from "/assets/images/testimonialDot.png";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
	return (
		<div className="px-5 md:px-10 lg:px-20 flex flex-col lg:flex-row md:justify-start md:items-start lg:between lg:items-center gap-5 slider mt-10 lg:mt-0 lg:h-screen">
			<div className="left w-full lg:w-1/2 relative">
				<p
					className="text-blue-600 text-xl text-start"
					style={{ fontFamily: "Rubik" }}>
					Testimonials
				</p>
				<h1
					className="text-black text-2xl md:text-5xl text-start mt-7 font-semibold"
					style={{ fontFamily: "Rubik" }}>
					We’ve Helped Thousands Find Their Perfect Job
				</h1>
				<p
					className="text-gray-800 text-base text-start mt-8"
					style={{ fontFamily: "Rubik" }}>
					You need to create an account to find the best and preferred job. Your
					Next Career Move Starts Here Hear from People Who Found Their Dream
					Jobs
				</p>
			</div>
			<div className="w-full md:w-3/5 relative right overflow-hidden">
				<img src={TestimonialDot} alt="" className="h-20 lg:-ml-2" />
				<TestimonialCard />
			</div>
		</div>
	);
};

export default Testimonial;
