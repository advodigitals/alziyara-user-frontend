import React from 'react'
import Layouts from '../Layouts/Layouts'
import BranchSection from '../Components/BranchSection'
import AboutUsSection from '../Components/AboutUsSection'

// import { Icon } from '@iconify/react/dist/iconify.js'
// import founderImg from '../Assets/images/find.jpg'


const AboutUs = () => {
  return (
    <>
      <Layouts>
        <div className="w-full h-full container mx-auto  gap-8 flex flex-col px-0">
         <AboutUsSection />
          {/* <div id="founder" className="flex flex-col items-center container mx-auto gap-[3rem] p-5  ">
              <h1 className="text-4xl font-bold text-third-color">Founder<span className="text-primary-color">.</span></h1>
              <div className="flex md:flex-row gap-4 flex-col items-center justify-center">
                <div id="text" className="py-4 text-third-color xl:flex-wrap flex-1 ">
                  <h4 className="text-xl leading-[32px]"><Icon icon="ri:double-quotes-l" width="24" height="24" className="text-primary-color"/>From reviews of our customers, Alziyara has proved the best service in the both travel and hajj umrah field for more than the past 15 years. full commitment
                     to our customers helps them to fulfill their dream Destinations. the affordable prizes Alziyara provides attracts customers very huge each and everyone could get into their dream Places.<Icon icon="ri:double-quotes-r" width="24" height="24" className="text-primary-color"/></h4>
                     <div className="text-right">
                     <span className="text-primary-color text-xl font-bold ">- JAHFAR AVULAN</span>
                     </div>
                </div>
                <div id="photo" className="flex-1">
                  <img src={founderImg} alt="" className="rounded-[10px] h-[315px]  w-full"/>
                </div>
              </div>
          </div> */}
          <BranchSection />
          
        
        </div>
      </Layouts>
    </>
  )
}

export default AboutUs
