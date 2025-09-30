import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import IMPNavbar from '../Components/Navbar/IMPNavbar'
import GoBack from '../Components/GoBack'


const Layouts = ({children}) => {
  return (
    <>
    <Navbar/>
    <IMPNavbar/>
    <GoBack/>
    {children}
    
    </>
  )
}

export default Layouts
