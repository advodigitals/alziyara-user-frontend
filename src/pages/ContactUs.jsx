import React from 'react'
import Layouts from '../Layouts/Layouts'
const BranchSection = React.lazy (() => import("../Components/BranchSection"))
const ContactUsMapSection = React.lazy (() => import ("../Components/ContactUsMapSection"))
const AllPageHeroSection = React.lazy (() => import("../Components/AllPageHeroSection"))
const ContactUsFormSection = React.lazy (() => import ("../Components/ContactUsFormSection"))
// import contactTopIMage from "../Assets/images/hajj&umrah-heading-image.jpg"


const ContactUs = () => {
  return (
    <>
      <Layouts>
        <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col items-center gap-5 pb-24 lg:pb-4">
          <AllPageHeroSection title={"contact us"} titleDes={"let's keep in touch"}/>
          <div className="w-full h-fit container mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
            <ContactUsMapSection />
            <ContactUsFormSection />
          </div>
          <BranchSection />
        </div>
      </Layouts>
    </>
  )
}

export default ContactUs
