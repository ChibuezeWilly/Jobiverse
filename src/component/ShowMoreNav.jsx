import React from "react";
import { FaPlus, FaRightToBracket } from "react-icons/fa6";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { logOutButton } from "../GoogleSignIn";

const ShowMoreNav = ({ closeMore }) => {
	const logOut = async () => {
		await logOutButton();
	};
	return (
		<div className="openMore absolute top-16 bg-gray-200 h-56 w-64 right-2 px-5 py-5 space-y-5 ">
			<div className="flex flex-row-justify-start center-items gap-5">
				<img
					src={uploadedprofilePicture || ProfileImage}
					alt=""
					className="h-10 rounded-full w-10"
				/>
				<p
					className="text-base font-semibold relative"
					style={{ fontFamily: "Inter" }}>
					mmze Williams{" "}
					<span className="text-gray-600 text-xs absolute top-5 left-0 right-0">
						Freelancer
					</span>
				</p>
			</div>
			{/* account setting */}
			<div className="flex flex-row-justify-start center-items gap-5">
				<span className="h-7 w-7 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						aria-hidden="true"
						viewBox="0 0 24 24"
						role="img"
						className="h-full w-full">
						<path
							vectorEffect="non-scaling-stroke"
							stroke="var(--icon-color, #001e00)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="1.5"
							d="M12 21a9 9 0 100-18 9 9 0 000 18z"
						/>
						<path
							vectorEffect="non-scaling-stroke"
							stroke="var(--icon-color, #001e00)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="1.5"
							d="M12 11.73a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm0 1.89c-2.88 0-5.31 2.34-5.31 5.31v.36C8.22 20.37 10.02 21 12 21c1.98 0 3.78-.63 5.31-1.71v-.36c0-2.88-2.43-5.31-5.31-5.31z"
						/>
					</svg>
				</span>

				<p
					className="text-base relative cursor-pointer"
					onClick={toProfile}
					style={{ fontFamily: "Inter" }}>
					Your Profile
				</p>
			</div>

			{/* account setting */}
			<div className="flex flex-row-justify-start center-items gap-5">
				<span className="h-7 w-7 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						viewBox="0 0 24 24"
						role="img"
						className="h-full w-full">
						<circle
							cx="12"
							cy="12"
							r="3.5"
							fill="none"
							vectorEffect="non-scaling-stroke"
							stroke="var(--icon-color, #001e00)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
						/>
						<path
							fill="none"
							vectorEffect="non-scaling-stroke"
							stroke="var(--icon-color, #001e00)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M18.25 12.62v-1.24h0l2.36-2a9 9 0 00-2.18-3.67l-2.89 1.1h0a6.89 6.89 0 00-.88-.5h0l-.52-3a8.62 8.62 0 00-4.28 0l-.52 3h0a6.89 6.89 0 00-.88.5l-2.89-1.1a9 9 0 00-2.18 3.67l2.36 2a6.22 6.22 0 000 1.22l-2.36 2a9 9 0 002.18 3.67l2.89-1.1a6.89 6.89 0 00.88.5h0l.52 3a8.62 8.62 0 004.28 0l.52-3h0a6.89 6.89 0 00.88-.5h0l2.89 1.1a9 9 0 002.18-3.67l-2.36-2z"
						/>
					</svg>
				</span>
			</div>

			{/* log put */}
			<div
				className="flex flex-row-justify-start center-items gap-5"
				onClick={logOutButton}>
				<span className="h-7 w-7 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						aria-hidden="true"
						viewBox="0 0 24 24"
						role="img"
						className="h-full w-full">
						<path
							vectorEffect="non-scaling-stroke"
							stroke="var(--icon-color, #001e00)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="1.5"
							d="M5.8 5.8c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3m8-6h-10"
						/>
						<path
							vectorEffect="non-scaling-stroke"
							stroke="var(--icon-color, #001e00)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="1.5"
							d="M7.8 7.8l-4 4 4 4"
						/>
					</svg>
				</span>

				<p className="text-base relative" style={{ fontFamily: "Inter" }}>
					Log out of Jobiverse
				</p>
			</div>
			
		</div>
	);
};

export default ShowMoreNav;
