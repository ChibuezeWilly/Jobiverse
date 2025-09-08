import React from "react";
import JobsCard from "../HomePage/JobsCard";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

// ✅ Categories data
const categories = [
	{
		name: "Business Development",
		path: "/business",
		image: "/assets/images/category1.png",
	},
	{
		name: "Content Writer",
		path: "/content",
		image: "/assets/images/category2.png",
	},
	{
		name: "Graphics Designer",
		path: "/graphics",
		image: "/assets/images/category3.png",
	},
	{
		name: "Health & Fitness",
		path: "/health",
		image: "/assets/images/category4.png",
	},
	{
		name: "Digital Marketing",
		path: "/digital",
		image: "/assets/images/category5.png",
	},
	{
		name: "Sports & Media",
		path: "/sports",
		image: "/assets/images/category6.png",
	},
	{
		name: "Video Editing",
		path: "/video",
		image: "/assets/images/category7.png",
	},
	{
		name: "Education",
		path: "/education",
		image: "/assets/images/category8.png",
	},
	{ name: "Finance", path: "/finance", image: "/assets/images/category9.png" },
	{ name: "Art", path: "/art", image: "/assets/images/category10.png" },
	{ name: "Tech", path: "/tech", image: "/assets/images/category11.png" },
	{
		name: "Customer",
		path: "/customer",
		image: "/assets/images/category12.png",
	},
	{
		name: "Marketing",
		path: "/marketing",
		image: "/assets/images/category13.png",
	},
];

const AllCategories = () => {
	return (
		<div className="mt-8 mx-auto">
			<h1
				className="text-center text-blue-600 text-xl md:text-2xl font-meduim"
				style={{ fontFamily: "Rubik" }}>
				Jobs by Categories
			</h1>
			<h1
				className="text-center text-2xl font-medium md:text-5xl mt-5"
				style={{ fontFamily: "Poppins" }}>
				Choose Your Desired Category
			</h1>

			<div className="px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gr5 place-items-center mt-10 gap-5">
				{categories.map((category, index) => (
					<JobsCard color={"jobsCategory"} key={index}>
						<div className="bg-blue-600 h-16 w-16 rounded-lg flex justify-center items-center">
							<img
								src={category.image}
								alt={category.name}
								className="h-12 rounded-md mx-auto mt-2"
							/>
						</div>
						<h1 className="text-center font-semibold mt-5 group-hover:text-white">
							{category.name}
						</h1>
						<p className="text-center text-base mt-3">
							<span className="text-blue-600 group-hover:text-white hover:transition duration-500 ease-out">
								100+
							</span>{" "}
							Posted new Jobs
						</p>
						<NavLink to={category.path}>
							<div className="h-10 rounded-full border-2 w-10 mt-5 border-blue-600 group-hover:text-white group-hover:bg-white">
								<MdArrowOutward className="text-center text-lg mx-auto mt-2 text-blue-600" />
							</div>
						</NavLink>
					</JobsCard>
				))}
			</div>
		</div>
	);
};

export default AllCategories;
