import React from "react";
import AOS from "aos";
import { ReactTyped } from "react-typed";

const BackgroundText = () => {
	AOS.init();
	return (
		<div className="text-center lg:text-start">
			<p
				className="text-black text-2xl lg:text-4xl font-bold"
				style={{ fontFamily: "Poppins" }}>
				<ReactTyped
					strings={[`Welcome to Jobiverse where Talent Meet Opportunity`]}
					typeSpeed={80}
				/>
			</p>
			<p
				data-aos="fade-up"
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				className="text-dark font-semi-bold text-xl mt-3"
				style={{ fontFamily: "Poppins" }}>
				Explore Thousands of Job Opportunities Waiting for You
			</p>
			<p
				data-aos="fade-up"
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
				className="text-dark text-base mt-3"
				style={{ fontFamily: "Heebo" }}>
				Find Jobs, Employment & Career Opportunities
			</p>
		</div>
	);
};

export default BackgroundText;
