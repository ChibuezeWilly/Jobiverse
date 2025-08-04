import React from 'react'
import companies from '/assets/images/companies.png'
const buttons = [
	{
		id: 1,
		text: "Work/life Balance",
	},
	{
		id: 2,
		text: "Diversity & inclusions",
	},
	{
		id: 3,
		text: "Compensations & Benefits",
	},
];
const AllCompanies = () => {
	
  return (
		<div className="bg-blue-50 min-h-screen h-auto w-full flex justify-center items-center py-10">
			<div className="w-full flex justify-center items-center flex-col lg:flex-row pt-10">
				<img
					src={companies}
					alt=""
					srcset=""
					className="w-full sm:max-w-[90%] lg:max-w-[50%] block h-full sm:max-h-[450px] lg:max-h-[500px]"
				/>
				<div className="w-full lg:w-[55%] px-3 sm:px-5 lg:px-0">
					<h1
						className="text-gray-700 text-3xl font-bold "
						style={{ fontFamily: "Poppins" }}>
						Find a workplace that works for you{" "}
						<span className="bg-blue-300 h-auto text-xs py-1 px-1 rounded-sm absolute ml-2 mt-1">
							NEW
						</span>
					</h1>
					<p
						className="text-gray-700 text-sm mt-5"
						style={{ fontFamily: "Poppins" }}>
						Discover what an employer is really like before you make your next
						move.
					</p>
					<p
						className="text-gray-700 text-sm"
						style={{ fontFamily: "Poppins" }}>
						Search reviews and ratings, and filter companies based on the
						qualities <br className="hidden lg:block" /> that matter most to
						your job search.
					</p>
					<div className="flex flex-row gap-2 sm:gap-3 mt-5 flex-wrap w-full lg:w-[80%]">
						{buttons.map((button) => (
							<button
								className="h-10 px-3 sm:px-5 text-center bg-black rounded-md text-white hover:bg-blue-600"
								key={button.id}>
								{button.text}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllCompanies
