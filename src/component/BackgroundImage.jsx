import BackgroundText from "./HomePage/BackgroundText";
import Background from "/assets/images/mainBackground.jpg";
import FindJob from "./HomePage/FindJob";
import AllCounters from "./HomePage/AllCounters";
const BackgroundImage = () => {
	return (
		<div className="bg-gray-200 pb-7 h-auto lg:h-auto">
			<div className="pt-16 md:pt-20 flex flex-col-reverse md:flex-row justify-evenly gap-3 items-center px-5">
				<div className="bgText flex-1">
					<BackgroundText />
					<AllCounters />
				</div>
				<div className="w-full  h-64 md:w-2/5 md:h-1/2 overflow-hidden rounded-lg">
					<img src={Background} alt="" className=" w-full h-full object-cover"/>
				</div>
			</div>
			{/* <FindJob /> */}
		</div>
	);
};

export default BackgroundImage;
