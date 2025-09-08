import React from "react";
import CountUp from "react-countup";

const AllCounters = () => {
	return (
		<div className="flex flex-wrap justify-center gap-5 md:justify-start mt-5 lg:mt-10 lg:gap-[75px] flex-row">
			<div className="text-center text-xl md:text-2xl text-gray-700">
				<CountUp end={10354}  duration={8} delay={1} />
				<p className="text-base md:text-lg lg:text-xl md:mt-3">Jobs</p>
			</div>
			<div className="text-center text-xl md:text-2xl text-gray-700">
				<CountUp end={5324} delay={1} duration={8} />
				<p className="text-base md:text-lg lg:text-xl md:mt-3">Resume</p>
			</div>
			<div className="text-center text-xl md:text-2xl text-gray-700">
				<CountUp end={7543} delay={1} duration={8} />
				<p className="text-base md:text-lg lg:text-xl md:mt-3">Members</p>
			</div>
			<div className="text-center text-xl md:text-2xl text-gray-700">
				<CountUp end={6245} delay={1} duration={8} />
				<p className="text-base md:text-lg lg:text-xl md:mt-3">Companies</p>
			</div>
		</div>
	);
};

export default AllCounters;
