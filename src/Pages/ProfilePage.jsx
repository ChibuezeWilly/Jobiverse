import React from 'react'
import ProfileResume from '../component/Profile/ProfileResume';

const ProfilePage = () => {
  return (
		<div className="profileHeader pt-28 px-2 md:px-16 bg-gray-300">
			<h1
				className="font-semibold text-xl md:text-2xl ml-5"
				style={{ fontFamily: "Poppins" }}>
				Profile Settings
			</h1>
            <ProfileResume />
		</div>
	);
}

export default ProfilePage
