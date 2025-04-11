import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

const ProfileForm = () => {
  return (
		<div className="h-auto rounded-sm mt-5 overflow-hidden px-3 md:px-40">
			<ProfilePhoto />
			<About />
			<Experience />
			<Education />
			<Skills />
		</div>
	);
}

export default ProfileForm
