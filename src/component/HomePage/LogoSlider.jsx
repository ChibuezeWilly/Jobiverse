import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "/assets/images/logo1.jpeg";
import logo2 from "/assets/images/logo2.jpeg";
import logo3 from "/assets/images/logo3.jpeg";
import logo4 from "/assets/images/logo4.jpeg";
import logo5 from "/assets/images/logo5.jpeg";
import logo6 from "/assets/images/logo6.jpeg";
import logo7 from "/assets/images/logo7.jpeg";
import logo8 from "/assets/images/logo8.jpeg";

const LogoSlider = () => {
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	return (
		<div className="overflow-x-hidden mt-5  h-28">
			<Slider {...settings}>
				<div>
					<img
						src={logo1}
						alt="Microsoft Logo"
						className="h-16 mx-auto rounded-md mt-2"
					/>
				</div>
				<div>
					<img
						src={logo2}
						alt="Google Logo"
						className="h-16 mx-auto rounded-md mt-2"
					/>
				</div>
				<div>
					<img
						src={logo3}
						alt="Amazon Logo"
						className="h-16 mx-auto rounded-md mt-2"
					/>
				</div>
				<div>
					<img
						src={logo4}
						alt="Samsung Logo"
						className="h-16 mx-auto rounded-md mt-2"
					/>
				</div>
				<div>
					<img
						src={logo5}
						alt="Meta Logo"
						className=" mx-auto rounded-md"
						style={{ height: "95px" }}
					/>
				</div>
				<div>
					<img
						src={logo6}
						alt="Huawei Logo"
						className="mx-auto rounded-md"
						style={{ height: "95px" }}
					/>
				</div>
				<div>
					<img
						src={logo7}
						alt="Apple Logo"
						className="h-16 mx-auto rounded-md mt-2"
					/>
				</div>
				<div>
					<img
						src={logo8}
						alt="Xiaomi Logo"
						className="h-16 mx-auto rounded-md mt-2"
					/>
				</div>
			</Slider>
		</div>
	);
};

export default LogoSlider;
