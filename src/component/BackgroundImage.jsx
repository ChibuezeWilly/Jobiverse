import BackgroundText from "./HomePage/BackgroundText";
import Background from '../assets/images/mainBackground.jpg'
import FindJob from "./HomePage/FindJob";
import AllCounters from "./HomePage/AllCounters";
const BackgroundImage = () => {
	return (
		<div className="bg-gray-200 pb-7 h-auto lg:h-screen">
			<div className="pt-32 flex flex-col md:flex-row justify-content-between align-items-center mx-5 md:mx-20">
				<div className="bgText flex-1">
					<BackgroundText />
				</div>
				<div className="hidden md:block md:w-64 lg:w-80 md:h-64 lg:h-80 overflow-hidden rounded-full">
					<img src={Background} alt="" className="object-cover w-full h-full" />
				</div>
			</div>
			<FindJob />
			<AllCounters />
		</div>
	);
};

export default BackgroundImage;
