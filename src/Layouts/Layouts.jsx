import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import IMPNavbar from '../Components/Navbar/IMPNavbar'

const Layouts = ({children}) => {
  return (
    <>
    <Navbar/>
    <IMPNavbar/>
    {children}
    </>
  )
}

export default Layouts
