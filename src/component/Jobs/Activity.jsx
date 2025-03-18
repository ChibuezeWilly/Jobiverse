import React from 'react'
import ActivityNavbar from "./ActivityNavbar";
import { Outlet } from "react-router-dom";

const Activity = () => {
  return (
		<>
			<ActivityNavbar />
			<Outlet />
		</>
	);
}

export default Activity
