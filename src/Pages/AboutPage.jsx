import React from "react";
import Header from "../component/About/Header";
import AboutText from "../component/About/AboutText";
import Steps from "../component/HomePage/Steps";
import AllLogo from "../component/HomePage/LogoSlider";
import Whychoose from "../component/About/Whychoose";
import Testimonials from "../component/Testimonial";
import Email from  '../component/Email'

const AboutPage = () => {
	return (
		<div className="pb-5">
			<Header />
			<AboutText />
			<Whychoose />
			<Steps />
			<AllLogo />
			<Testimonials />
			<Email />
		</div>
	);
};

export default AboutPage;
