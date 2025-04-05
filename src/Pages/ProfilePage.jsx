import React from 'react'
import ProfileForm from '../component/Profile/ProfileForm';

const ProfilePage = () => {
  return (
		<div className="profileHeader pt-28 px-2 md:px-10 lg:px-16 bg-gray-200">
			<h1
				className="font-semibold text-xl md:text-3xl ml-5"
				style={{ fontFamily: "Poppins" }}>
				Profile Settings
			</h1>
            <ProfileForm />
		</div>
	);
}

export default ProfilePage
