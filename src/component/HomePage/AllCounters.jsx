import React from "react";
import CountUp from "react-countup";

const AllCounters = () => {
	return (
		<div className="flex flex-wrap justify-center gap-5 md:justify-start md:ml-20 md:gap-20 mt-5 flex-row md:mt-20">
			<div className="text-center text-xl md:text-4xl text-gray-700">
				<CountUp end={10354}  duration={8} delay={1} />
				<p className="text-base md:text-lg lg:text-2xl md:mt-5">Jobs</p>
			</div>
			<div className="text-center text-xl md:text-4xl text-gray-700">
				<CountUp end={5324} delay={1} duration={8} />
				<p className="text-base md:text-lg lg:text-2xl md:mt-5">Resume</p>
			</div>
			<div className="text-center text-xl md:text-4xl text-gray-700">
				<CountUp end={7543} delay={1} duration={8} />
				<p className="text-base md:text-lg lg:text-2xl md:mt-5">Members</p>
			</div>
			<div className="text-center text-xl md:text-4xl text-gray-700">
				<CountUp end={6245} delay={1} duration={8} />
				<p className="text-base md:text-lg lg:text-2xl md:mt-5">Companies</p>
			</div>
		</div>
	);
};

export default AllCounters;
