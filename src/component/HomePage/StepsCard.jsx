import React from "react";
const StepsCard = ({
	children,
	icon: icon,
	color: color 
}) => {
	return (
		<div
			data-aos="flip-down"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			className={`${color} h-48 w-72 sm:w-56 lg:w-60 px-5 shadow-[0_0_20px_rgba(0,0,0,0.4)] relative rounded-md `}>
			{icon && <icon />}
			{children}
		</div>
	);
};

export default StepsCard;
