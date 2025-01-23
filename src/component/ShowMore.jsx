import React from "react";
import { FaBell, FaCog, FaGreaterThan } from "react-icons/fa";

const ShowMore = ({ closeMore }) => {
	return (
		<div
			className="fixed w-full rounded-t-3xl bg-white bottom-0 lg:flex px-4"
			style={{
				height: "55vh",
				zIndex: 1000,
				boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
			}}>
			<p
				className="text-4xl text-dark mt-3 font-bold"
				style={{ fontFamily: "Heebo" }}>
				Setting
			</p>
			<div className="px-2 mt-5">
				<li className="list-none w-full list-unstyled">
					<FaBell className="text-base absolute mt-2" />
					<span
						className="ml-7"
						style={{ fontSize: "20px", fontFamily: "Heebo" }}>
						Notification
					</span>
					<FaGreaterThan className="float-end fs-5 text-xl mt-4" />
				</li>
				<li className="list-none w-full list-unstyled mt-5">
					<FaCog className="text-base absolute mt-1" />
					<span
						className="ml-7 mt-2"
						style={{ fontSize: "20px", fontFamily: "Heebo" }}>
						Account Setting
					</span>
					<FaGreaterThan className="float-end text-xl mt-3" />
				</li>
			</div>
			<button className="mt-7 relative w-full text-black px-16 rounded-md py-2" style={{border: '1px solid black'}}>
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

export default ShowMore;
