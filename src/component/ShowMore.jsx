import React from "react";
import { FaBell, FaCog, FaGreaterThan } from "react-icons/fa";
import { logOutButton } from "../GoogleSignIn";

const ShowMore = ({ closeMore }) => {
	const logOut = async () => {
		await logOutButton();
	};
	return (
		<div
			className="fixed w-full rounded-t-3xl bg-white bottom-0 lg:flex px-4 z-50"
			style={{
				height: "48vh",
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
					<FaBell className="text-base absolute mt-1" />
					<span
						className="ml-7"
						style={{ fontSize: "20px", fontFamily: "Heebo" }}>
						Notification
					</span>
					<FaGreaterThan className="float-end fs-5 text-xl" />
				</li>
				<li className="list-none w-full list-unstyled mt-5">
					<FaCog className="text-base absolute mt-2" />
					<span
						className="ml-7 mt-1"
						style={{ fontSize: "20px", fontFamily: "Heebo" }}>
						Account Setting
					</span>
					<FaGreaterThan className="float-end text-xl " />
				</li>
			</div>
			<div className="flex flex-col">
				<button
					className="mt-7 relative text-black px-16 mx-auto rounded-md py-2"
					style={{ border: "1px solid black" }}
					onClick={logOut}>
					LOG OUT
				</button>
				<button
					className="text-center mt-3 fw-bold fs-6 px-20 mx-auto py-2 rounded-md"
					style={{ cursor: "pointer", border: "1px solid black" }}
					onClick={closeMore}>
					Close
				</button>
			</div>
		</div>
	);
};

export default ShowMore;
