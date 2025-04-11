import React from "react";
import GoogleLogo from "/assets/images/google1.jpeg";
import { useNavigate } from "react-router-dom";
import { signInButton } from "../../GoogleSignIn";
import { useSetUser, signedUser } from "../../Zustand";

const SignIn = () => {
	const navigate = useNavigate();
	const toHome = () => navigate("/");
	const { setUser } = useSetUser();

	const {email, password, setEmail, setPassword} = signedUser()

	const signIn = async () => {
		const signedUser = await signInButton();
		setUser(signedUser);
	};


	// for post request. check if the user's password and email matches

	return (
		<div className="login flex flex-col justify-center items-center">
			<div
				className="h-auto bg-white rounded-2xl py-5 px-7 border-slate-50"
				style={{ width: "350px", borderWidth: "1px" }}>
				<form action="" className="mt-6">
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

				<li
					className="list-none mt-5 flex justify-end font-semibold text-[#275df5] hover:underline"
					style={{ fontFamily: "Inter", fontSize: "14px" }}>
					Forgot password?
				</li>
				<button
					onClick={toHome}
					className="mt-4 w-full bg-blue-700 text-white h-12 rounded-3xl text-base"
					style={{ fontFamily: "Rubik" }}>
					Login
				</button>

				<p className="or text-center mt-4 text-lg">or</p>

				<button onClick={signIn}
					className="mt-4 w-full text-black h-12 rounded-3xl text-sm border-gray-400 flex flex-row justify-center items-center gap-2"
					style={{ fontFamily: "Rubik", borderWidth: "1px" }}>
					<img src={GoogleLogo} alt="" className="h-6 bg-white" />
					Continue with Google
				</button>
			</div>
		</div>
	);
};

export default SignIn;
