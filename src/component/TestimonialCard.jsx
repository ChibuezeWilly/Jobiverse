import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "../assets/images/testimonial1.jpg";
import Testimonial2 from "../assets/images/testimonial2.jpg";
import Testimonial3 from "../assets/images/testimonial3.jpg";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
	return (
		<div>
			<div className="testimonialCard h-56 px-10 py-5 flex flex-col rounded-md ">
				<div className="flex flex-row justify-between px-20 w-full">
					<FaQuoteLeft className="text-blue-700 text-4xl" />
					<div className="flex flex-row gap-2">
						<FaStar className="text-yellow-500" />
						<FaStar className="text-yellow-500" />
						<FaStar className="text-yellow-500" />
						<FaStar className="text-yellow-500" />
						<FaStar className="text-yellow-500" />
					</div>
				</div>
				{/* end of first */}
				{/* start of second */}
				<div className="flex flex-row mt-5 justify-evenly ml">
					<img
						src={Testimonial1}
						alt=""
						className="h-14 w-14 rounded-full mt-3"
					/>
					<p className=" ml-6 italic">
						This platform helped me land my dream job <br /> in tech within a
						month! The easy application process made all the difference
					</p>
				</div>
				<p className=" ml-20 font-bold text-base mt-3">Sarah M</p>
				<p className="text-gray-800 ml-20">Digital Marketer</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
