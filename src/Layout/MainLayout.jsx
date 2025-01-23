import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../component/MobileNavbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
     <MobileNavbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
