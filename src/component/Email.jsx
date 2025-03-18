import React from "react";

const Email = () => {
	return (
		<div className="pt-20 h-52 px-5 md:px-10 lg:px-16 pb-5">
			<div className="flex flex-col md:flex-row justify-between items-center gap-5">
				<p className=" text-xl w-full md:w-1/2" style={{ fontFamily: "Rubik" }}>
					Join our email subscription now to get updates on new jobs and
					notifications.
				</p>
				<form action="" className="w-full md:w-3/5 flex md:flex-row">
					<input
						type="text"
						name=""
						id=""
						className="h-12 lg:h-14 w-full rounded-s-md ps-5 outline-none placeholder:text-black"
						placeholder="Enter your email"
						style={{ backgroundColor: "rgb(209, 229, 255)" }}
					/>
					<button
						type="submit"
						className="h-12 lg:h-14 w-52 rounded-e-md bg-blue-700 text-white">
						Subscribe Now
					</button>
				</form>
			</div>
		</div>
	);
};

export default Email;
