import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../component/MobileNavbar";
import Footer from "../component/Footer";

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<MobileNavbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
