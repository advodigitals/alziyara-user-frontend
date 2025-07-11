import React from 'react'
import Layouts from '../Layouts/Layouts'
import { Icon } from '@iconify/react/dist/iconify.js'
import founderImg from '../Assets/images/find.jpg'


const AboutUs = () => {
  return (
    <>
      <Layouts>
        <div className="w-full h-full  gap-8 flex flex-col">
          <div id="aboutUs" className="flex flex-col items-center container mx-auto gap-[3rem] p-5 ">
            <h1 className="text-4xl font-bold text-third-color">About Us<span className="text-primary-color">.</span></h1>
            <div className="flex gap-4 md:flex-row flex-col items-center justify-center ">
              <div id="video" className="flex-1">
                <iframe className="rounded-[10px] h-[315px]  w-full" src="https://www.youtube.com/embed/nIPmt1ye6HU?si=owXw7is7PyNd7qUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div id="text" className=" text-third-color py-4 xl:flex-wrap flex-1">
                <h4 className="text-xl leading-[32px]"><span className="text-gray-600">Al-Ziyara</span> Travels is a prominent name and best destination for Hajj & Umrah services apart from domestic and international travel assistance. Located in Kizhakkethala ,
                  Malappuram in Kerla.It has been a leading tour and travel provider with a successful stint of national and international experience of providing the customers with satisfactory services.
                  Alziyara have now successfully completed more than 27 years and by dealing with more than 2 lakh of our happy customers.We can assure you the best services with this year of experience.</h4>
              </div>
            </div>
          </div>
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
          
        </div>
      </Layouts>
    </>
  )
}

export default AboutUs
