import React from 'react'
import BackgroundImage from '../component/BackgroundImage'
import Cards from '../component/HomePage/Cards'
import TopCompanies from '../component/HomePage/TopCompanies'
import Steps from '../component/HomePage/Steps'
import JobsCategory from '../component/HomePage/JobsCategory'
import FeaturedJobs from '../component/FeaturedJobs'

const HomePage = () => {
  return (
		<div>
			<BackgroundImage />
			<TopCompanies />
			<Steps />
			<JobsCategory />
			<FeaturedJobs />
		</div>
	);
}

export default HomePage
