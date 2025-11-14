import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import IMPNavbar from '../Components/Navbar/IMPNavbar'
// import GoBack from '../Components/GoBack'
import Footer from '../Components/Footer'


const Layouts = ({ children , page }) => {

  return (
    <>
      <Navbar page={page }/>

      <IMPNavbar />
      {/* <GoBack /> */}
      {children}

      <Footer />

    </>
  )
}

export default Layouts
