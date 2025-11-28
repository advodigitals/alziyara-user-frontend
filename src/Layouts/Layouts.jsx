import React from 'react'
// import Navbar from '../Components/Navbar/Navbar'
// import IMPNavbar from '../Components/Navbar/IMPNavbar'
// import GoBack from '../Components/GoBack'
// import Footer from '../Components/Footer'
const Footer = React.lazy(() => import("../Components/Footer"))
const Navbar = React.lazy(() => import("../Components/Navbar/Navbar"))
const IMPNavbar = React.lazy(() => import("../Components/Navbar/IMPNavbar"))


const Layouts = ({ children, page }) => {

  return (
    <>
      <div className=" min-h-[100vh]  ">
        <Navbar page={page} />
        <IMPNavbar />
        {/* <GoBack /> */}
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layouts
