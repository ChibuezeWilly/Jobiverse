import React from 'react'
import LogoSlider from './LogoSlider';

const TopCompanies = () => {
  return (
		<div>
			<h1 className='text-blue-600 text-xl text-center mt-14'>Top companies</h1>
			<h1 className='px-1 md:px-0 text-xl md:text-4xl font-bold text-center mt-5' style={{fontFamily: 'Poppins'}}>Get Hired at Top Companies</h1>
            <LogoSlider />
		</div>
	);
}

export default TopCompanies
