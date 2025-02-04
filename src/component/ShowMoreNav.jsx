import React from "react";
import { FaBell, FaCog, FaGreaterThan } from "react-icons/fa";

const ShowMoreNav = ({ closeMore }) => {
	return (
		<div
			className="ml-auto mr-5 rounded-md px-4 hidden lg:flex flex-col"
			style={{
				width: "300px",
				height: "48vh",
				zIndex: "1000",
				backgroundColor: "white",
				boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
				marginTop: "60px",
				float: "right",
				cursor: "pointer",
				zIndex: 1000
			}}>
			<p className="text-4xl text-black font-bold mt-5">Setting</p>
			<div className="px-2 mt-5">
				<li className="list-none w-full list-unstyled">
					<FaBell className="text-base absolute mt-2" />
					<span
						className="ml-7"
						style={{ fontSize: "20px", fontFamily: "Heebo" }}>
						Notification
					</span>
					<FaGreaterThan className="float-end fs-5 text-xl mt-2" />
				</li>
				<li className="list-none w-full list-unstyled mt-5">
					<FaCog className="text-base absolute mt-2" />
					<span
						className="ml-7 mt-2"
						style={{ fontSize: "20px", fontFamily: "Heebo" }}>
						Account Setting
					</span>
					<FaGreaterThan className="float-end text-xl mt-2" />
				</li>
			</div>
			<button
				className="mt-7 relative w-full text-black px-16 rounded-md py-2"
				style={{ border: "1px solid black" }}>
				LOG OUT
			</button>
			<p
				className="text-center mt-3 fw-bold fs-6"
				style={{ cursor: "pointer" }}
				onClick={closeMore}>
				Close
			</p>
		</div>
	);
};

export default ShowMoreNav;
