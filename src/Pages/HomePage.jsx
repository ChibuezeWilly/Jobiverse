import React from 'react'
import BackgroundImage from '../component/BackgroundImage'
import TopCompanies from '../component/HomePage/TopCompanies'
import Steps from '../component/HomePage/Steps'
import JobsCategory from '../component/HomePage/JobsCategory'
// import FeaturedJobs from '../component/FeaturedJobs'
import Ourblogs from '../component/HomePage/Ourblogs'
import Testimonial from '../component/Testimonial'
import Email from '../component/Email'
const HomePage = () => {
  return (
		<div>
			<BackgroundImage />
			<TopCompanies />
			<Steps />
			<JobsCategory />
			{/* <FeaturedJobs /> */}
			<Testimonial />
			<Ourblogs />
			<Email />
		</div>
	);
}

export default HomePage
