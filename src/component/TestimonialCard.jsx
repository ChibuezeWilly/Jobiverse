import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "/assets/images/testimonial1.jpg";
import Testimonial2 from "/assets/images/testimonial2.jpg";
import Testimonial3 from "/assets/images/testimonial3.jpg";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 3 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1 },
			},
		],
	};


	return (
		<div className="rounded-md mx-auto">
			<Slider {...settings} className="px-10">
				{/* first */}
				<div
					className="testimonialCard h-80 md:h-56 px-5 lg:px-10 py-2 flex flex-col rounded-md -mt-5 mx-auto"
					style={{ zIndex: "1000px" }}>
					<div className="flex flex-col-reverse md:flex-col mt-2">
						<div className="hidden md:flex flex-row justify-between lg:px-20 w-full mt-5">
							<FaQuoteLeft className="text-blue-700 text-4xl" />
							<div className="flex flex-row gap-2">
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
							</div>
						</div>
						{/* end of first */}
						{/* start of second */}
						<div className="flex flex-col justify-center items-center md:flex-row lg:mt-2 md:justify-evenly">
							<img
								src={Testimonial1}
								alt=""
								className="h-14 w-14 rounded-full mt-5"
							/>
							<div className="flex flex-row justify-between px-5 lg:px-20 w-full mt-2 md:hidden">
								<FaQuoteLeft className="text-blue-700 text-4xl" />
								<div className="flex flex-row gap-2 mt-2">
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
								</div>
							</div>
							<p className="ml-6 italic mt-3 text-gray-700">
								This platform helped me land my dream job{" "}
								<br className="hidden lg:block" /> in tech within a month! The
								easy application process made all the difference
							</p>
						</div>
					</div>
					<p className="ml-6 lg:ml-20 font-bold text-base mt-3">Sarah M</p>
					<p className="text-gray-800 ml-6 lg:ml-20">Digital Marketer</p>
				</div>
				{/* end of first */}
				<div
					className="testimonialCard h-80 md:h-56 px-5 lg:px-10 py-2 flex flex-col rounded-md -mt-5 mx-auto"
					style={{ zIndex: "1000px" }}>
					<div className="flex flex-col-reverse md:flex-col">
						<div className="hidden md:flex flex-row justify-between lg:px-20 w-full mt-3">
							<FaQuoteLeft className="text-blue-700 text-4xl" />
							<div className="flex flex-row gap-2">
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
							</div>
						</div>
						{/* end of first */}
						{/* start of second */}
						<div className="flex flex-col justify-center items-center md:flex-row lg:mt-2 md:justify-evenly">
							<img
								src={Testimonial2}
								alt=""
								className="h-14 w-14 rounded-full mt-5"
							/>
							<div className="flex flex-row justify-between px-5 lg:px-20 w-full mt-2 md:hidden">
								<FaQuoteLeft className="text-blue-700 text-4xl" />
								<div className="flex flex-row gap-2 mt-2">
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
								</div>
							</div>
							<p className="ml-6 italic mt-3 text-gray-700">
								I landed my dream job in data within a month!
								<br className="hidden lg:block" /> The platform's personalized
								job matches made all the difference.
							</p>
						</div>
					</div>
					<p className="ml-6 lg:ml-20 font-bold text-base mt-3">Williams C</p>
					<p className="text-gray-800 ml-6 lg:ml-20">Marketing Manager</p>
				</div>
				{/* end of second */}
				<div
					className="testimonialCard h-80 md:h-56 px-5 lg:px-10 py-2 flex flex-col rounded-md -mt-5 mx-auto "
					style={{ zIndex: "1000px" }}>
					<div className="flex flex-col-reverse md:flex-col">
						<div className="hidden md:flex flex-row justify-between lg:px-20 w-full mt-3">
							<FaQuoteLeft className="text-blue-700 text-4xl" />
							<div className="flex flex-row gap-2">
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
							</div>
						</div>
						{/* end of first */}
						{/* start of second */}
						<div className="flex flex-col justify-center items-center md:flex-row lg:mt-2 md:justify-evenly">
							<img
								src={Testimonial3}
								alt=""
								className="h-14 w-14 rounded-full mt-5"
							/>
							<div className="flex flex-row justify-between px-5 lg:px-20 w-full mt-2 md:hidden">
								<FaQuoteLeft className="text-blue-700 text-4xl" />
								<div className="flex flex-row gap-2 mt-2">
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
									<FaStar className="text-yellow-400" />
								</div>
							</div>
							<p className="ml-6 italic mt-3 text-gray-700">
								I never imagined getting hired so quickly
								<br className="hidden lg:block" />
								The seamless experience and job matches were exactly what I
								needed
							</p>
						</div>
					</div>
					<p className="ml-6 lg:ml-20 font-bold text-base mt-3">Michael T</p>
					<p className="text-gray-800 ml-6 lg:ml-20">Project Management</p>
				</div>
			</Slider>
		</div>
	);
};

export default TestimonialCard;
