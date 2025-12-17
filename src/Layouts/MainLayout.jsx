import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import ScrollToTop from '../Components/ScrollToTop'

function MainLayout() {
  return (
    <>
    <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout