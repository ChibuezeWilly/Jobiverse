import React from "react";

const JobsCard = ({ children, color: color, img: img }) => {
	return (
		<div
			data-aos="flip-down"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			className={`${color} h-60 w-full sm:w-60 px-5 rounded-lg flex flex-col justify-center items-center hover:text-white group`}>
			{img}
			{children}
		</div>
	);
};

export default JobsCard;
