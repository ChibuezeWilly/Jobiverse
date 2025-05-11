import React from "react";
import GoogleLogo from "/assets/images/google1.jpeg";
import { useNavigate } from "react-router-dom";
import { useAuthenticatedStore } from "../../Zustand";
import { signInButton } from "../../GoogleSignIn";
import { useSetUser, useJobSeeker } from "../../Zustand";

const JobSeeker = () => {
	const { setUser } = useSetUser();
	const navigate = useNavigate();
	const toJobSeeker = () => navigate("/jobseeker");
	const { setAuthenticated } = useAuthenticatedStore();
	const {
		email,
		password,
		setEmail,
		setPassword,
		name,
		setName,
		setCandidate,
		resetValue
	} = useJobSeeker();
	

	const signIn = async () => {
		const signedUser = await signInButton();
		setUser(signedUser);
		setAuthenticated(true);
		setCandidate(true)
		resetValue()
	};
	// set it to true in the POST function

	return (
		<div className="flex flex-col mt-5 z-0">
			<div
				className="h-auto bg-white rounded-2xl py-5 px-7 border-slate-50"
				style={{ width: "350px", borderWidth: "1px" }}>
				<h2
					className="font-semibold text-2xl text-gray-800"
					style={{ fontFamily: "Inter" }}>
					Jobseeker
				</h2>
				<p className="text-gray-700 mt-1">
					Stay updated on your professional world
				</p>
				<form action="" className="mt-6">
					<input
						type="text"
						name=""
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="h-12 md:h-10 w-full mt-1 block bg-slate-200 outline-blue-700 text-black pl-3 rounded-md font-normal placeholder-gray-600"
						placeholder="Name"
					/>
					<input
						type="text"
						name=""
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="h-12 md:h-10 w-full mt-4 block bg-slate-200 outline-blue-700 text-black pl-3 rounded-md font-normal placeholder-gray-600"
						placeholder="E-mail address"
					/>
					<input
						type="password"
						name=""
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="h-12 md:h-10 w-full mt-4 block bg-slate-200 outline-blue-700 text-black pl-3 rounded-md font-normal placeholder-gray-600"
						placeholder="Password"
					/>
				</form>

				<form action="" className="mt-5">
					<input type="checkbox" name="" id="" className="-mt-5" />
					<label
						htmlFor="remember"
						className="ml-3 font-semibold text-base relative"
						style={{ fontFamily: "Rubik" }}>
						Remember me
					</label>
				</form>

				<button
					onClick={toJobSeeker}
					className="mt-4 w-full bg-blue-700 text-white h-12 rounded-3xl text-base"
					style={{ fontFamily: "Rubik" }}>
					Sign up
				</button>

				<p className="or text-center mt-4 text-lg">or</p>

				<button
					onClick={signIn}
					className="mt-4 w-full text-black h-12 rounded-3xl text-sm border-gray-400 flex flex-row justify-center items-center gap-2"
					style={{ fontFamily: "Rubik", borderWidth: "1px" }}>
					<img src={GoogleLogo} alt="" className="h-6 bg-white" />
					Continue with Google
				</button>
			</div>
		</div>
	);
};

export default JobSeeker;
