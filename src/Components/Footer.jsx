import React from 'react'
import FooterSocialMeadiasSection from './FooterSocialMeadiasSection'
import FooterQuickLinksSection from './FooterQuickLinksSection'
import FooterServicesSection from './FooterServicesSection'

const Footer = () => {
  return (
    <>
      <div className="bg-primary-color w-full max-w-[1400px] mx-auto h-fit ">
        <FooterSocialMeadiasSection />
        <div id="Link-section" className=" w-full h-full flex sm:flex-row flex-col py-3 gap-3">
          <FooterQuickLinksSection />
          <FooterServicesSection />
        </div>
        <div id="Contact-section" className="bg-teal-500">

        </div>
        <div id="Branches-section" className="bg-amber-500">

        </div>
        <div id="Rights-section" className="bg-lime-500 ">

        </div>
      </div>
    </>
  )
}

export default Footer



