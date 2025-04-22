import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16"></div>
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
