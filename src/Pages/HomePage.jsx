import React from 'react'
import BackgroundImage from '../component/BackgroundImage'
import Cards from '../component/HomePage/Cards'
import LogoSlider from '../component/HomePage/LogoSlider'

const HomePage = () => {
  return (
		<div>
			<BackgroundImage />
			<LogoSlider />
			<Cards />
		</div>
	);
}

export default HomePage
