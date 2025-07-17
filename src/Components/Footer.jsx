import React from 'react'
import FooterSocialMeadiasSection from './FooterSocialMeadiasSection'
import FooterQuickLinksSection from './FooterQuickLinksSection'
import FooterServicesSection from './FooterServicesSection'
import FooterContactSection from './FooterContactSection'
import FooterBranchSection from './FooterBranchSection'

const Footer = () => {
  return (
    <>
      
        <div className="bg-primary-color w-full max-w-[2600px] mx-auto h-fit lg:pb-0 pb-[80px]">
          <FooterSocialMeadiasSection />
          <div id="Link-section" className=" w-full h-full flex sm:flex-row flex-col py-3 gap-3">
            <FooterQuickLinksSection />
            <FooterServicesSection />
          </div>
          <FooterContactSection />
          <FooterBranchSection />
          <div id="Rights-section" className="bg-lime-500 ">
          </div>
        </div>
      
    </>
  )
}

export default Footer



