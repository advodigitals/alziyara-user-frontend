import React from 'react'
import logo from "../Assets/images/alziyara-logo-name.png"
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'
import { socialMediaDetails } from '../constants/SocialMediaDetails'
import { quickLinksTagsSection } from '../constants/FooterQuickLinksTags'
import { servicesTagSection } from '../constants/FooterServicesTags'
import { legalTags } from '../constants/LegalTags'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full max-w-[2000px] mx-auto h-fit lg:pb-0 pb-[80px] ">
        <div className="w-full max-w-[1100px] mx-auto h-full flex flex-col  md:flex-row px-3 py-16 gap-8 md:gap-4">
          <div className="  flex-1 flex flex-col  justify-center">
            <div id="logo-and-social-media" className="flex flex-row h-fit w-full  items-center justify-center md:justify-start">
              <img src={logo} alt="" className="w-[450px] h-auto" />
            </div>
            {/* <h1 className="text-xl text-third-color text-left font-normal ml-4">GET IN TOUCH WITH US</h1> */}
            <div className="h-fit  md:max-w-[350px] pl-4 flex justify-center">
              <h1 className="text-lg text-third-color text-center md:text-left font-normal ">Join us on social media for new trips and offers.</h1>
            </div>
            <div className="flex flex-row w-full h-fit justify-center md:justify-start py-2 gap-2" id="social-media pl-4">
              {
                socialMediaDetails.map((details) => (
                  <Link to={details.Link} className={`w-fit h-fit bg-transparent  rounded-[50%] transition ease-in duration-[.5s] ${details.hoverColor}`}>
                    <div className="w-fit h-fit p-1 flex justify-center items-center rounded-[50%] " >
                      <Icon icon={details.icon} className='w-10 h-10 text-third-color' />
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="h-full  flex-1 flex flex-row items-start ">
            <div className="flex h-full flex-1 flex-col gap-4" id="quick-links">
              <h6 className="text-third-color font-medium text-base text-left">Quick links</h6>
              <div className="flex flex-col gap-3">
                {
                  quickLinksTagsSection.map((details) => (
                    <Link to={details.path}>
                      <p className="text-black font-medium text-sm text-left">{details.title}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4" id='services'>
              <h6 className="text-third-color font-medium text-base text-left">Services</h6>
              <div className="flex flex-col gap-3">
                {
                  servicesTagSection.map((details) => (
                    <Link to={details.path} className={`${details.path ? "cursor-pointer" : "cursor-default"}`}>
                      <p className="text-black font-medium text-sm text-left">{details.title}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4" id='legal'>
              <h6 className="text-third-color font-medium text-base text-left">Services</h6>
              <div className="flex flex-col gap-3">
                {
                  legalTags.map((details) => (
                    <Link to={details.path}>
                      <p className="text-black font-medium text-sm text-left">{details.title}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

// <FooterSocialMeadiasSection />
//           <div id="Link-section" className=" w-full h-full flex sm:flex-row flex-col py-3 gap-3">
//             <FooterQuickLinksSection />
//             <FooterServicesSection />
//           </div>
//           <FooterContactSection />
//           <FooterBranchSection />
//           <div id="Rights-section" className="bg-lime-500 ">
//           </div>

