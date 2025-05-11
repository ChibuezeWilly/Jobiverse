import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../component/MobileNavbar";
import Footer from "../component/Footer";
import { useJobSeeker, useEmployer } from "../Zustand";
import SecondNavbar from "../component/SecondNavbar";
import MobileNavbarJobseeker from "../component/MobileNavbarJobseeker";

const MainLayout = () => {
	const { candidate } = useJobSeeker();
	const { employer } = useEmployer();
	return (
		<div>
			{employer && (
				<>
					<Navbar />
					<MobileNavbar />
				</>
			)}

			{candidate && (
				<>
					<SecondNavbar />
					<MobileNavbarJobseeker />
				</>
			)}

			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
