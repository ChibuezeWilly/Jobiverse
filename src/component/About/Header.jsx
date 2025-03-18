import React from 'react'
import CountUp from "react-countup";

const Header = () => {
  return (
		<div className="pt-24 background h-auto pb-14 px-1 pb-">
			<h1
				className="text-center font-bold text-3xl lg:text-5xl text-white lg:mt-5"
				style={{ fontFamily: "Poppins" }}>
				About Us
			</h1>
			<p
				className="text-center text-lg text-wrap mt-5 text-white"
				style={{ fontFamily: "Rubik" }}>
				At <span className="text-blue-600">Jobiverse</span> we screen every job
				personally. <br /> We help job seekers find the right roles and
				employers connect with the best candidates
			</p>

			<ul className="list-none flex flex-col lg:flex-row justify-evenly items-center mt-5 lg:mt-10">
				<li className="text-white text-base md:mt-0">
					<span className="text-gray-400 block text-3xl md:text-5xl font-bold md:mb-3 text-center">
						<CountUp end={10597} duration={8} delay={1} />
					</span>
					Over 10 Thousand active daily users
				</li>
				<li className="text-white text-base mt-5 md:mt-0">
					<span className="text-gray-400 block text-3xl md:text-5xl font-bold md:mb-3 text-center">
						<CountUp end={12535} duration={8} delay={1} />
					</span>
					Over 12k open job positions
				</li>
				<li className="text-white text-base mt-5 md:mt-0">
					<span className="text-gray-400 block text-3xl md:text-5xl font-bold md:mb-3 text-center">
						<CountUp end={20858} duration={8} delay={1} />
					</span>
					Over 20 millions stories shared
				</li>
			</ul>
		</div>
	);
}

export default Header
