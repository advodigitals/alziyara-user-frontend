import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router'


const Services = () => {

  const ServiceCardDetails = [
    {
      icon: <Icon icon="mdi:flight" width="41" height="41" />,
      title: "Ticketing",
      content: "All International and Domestic ticketing service with fast and customer friendly staff supports.",
      path: "/flights"
    },
    {
      icon: <Icon icon="la:kaaba" width="45" height="45" />,
      title: "Hajj & umrah",
      content: "Hajj and Umrah Serivice providers with a big year of experience on the best value to money.",
      path: "/hajj-umrah"
    },
    {
      icon: <Icon icon="fontisto:holiday-village" width="41" height="41" />,
      title: "Tour packages",
      content: "International and Domestic budget tour packeges with best budget and proper guidence.",
      
    },
    {
      icon: <Icon icon="guidance:passports" width="41" height="41" />,
      title: "Visa Services",
      content: "Complete visa assistance with fast and customer-friendly support for all your travel needs.",
      
    },
    {
      icon: <Icon icon="healthicons:i-certificate-paper-outline" width="43" height="43" />,
      title: "Certificate ATT",
      content: "Trusted certificate attestation services handled quickly with care and reliable guidance.",
      path: "/certificate-attestation"
    },
    {
      icon: <Icon icon="fluent-mdl2:join-online-meeting" width="40" height="40" />,
      title: "Online Services",
      content: "All-in-one online services for visa processing, GCC medicals, and comprehensive travel insurance.",
      path: "/online-services"
    },
  ]


  return (
    <>
      <div className=" bg-hash-color-bg w-full h-full flex flex-col">
         <div className=" flex justify-center items-center py-6">
             <h1 className="text-4xl font-bold text-black">Services We Offer<span className="text-primary-color">.</span></h1>
          </div>
        <div className="w-full max-w-[1400px] mx-auto h-fit  flex flex-row flex-wrap gap-y-6 gap-x-9 py-4 px-6 justify-center pb-14">
          {
            ServiceCardDetails.map((details) => (
              <Link to={details.path} className={`${ details.path ? "cursor-pointer" : "cursor-default"}`}>
                <div id="Services-cards" className="flex  w-[20rem] h-[15rem] rounded-[10px] bg-white flex-col shadow-lg shadow-slate-600/50 ">
                  <div id="heading" className="flex flex-row gap-8 justify-start pt-4 pl-2">
                    <span className='text-black h-fit'>{details.icon}</span>
                    <h2 className='text-black text-[24px] font-medium h-fit'>{details.title}<span className='text-primary-color text-[24px] font-medium'>.</span></h2>
                  </div>
                  <hr className='border-t-[1px_solid_#9d9d9d] mx-8 my-4' />
                  <div className='pl-4 pr-4  '>
                    <p className='text-lg leading-[26px] font-light text-third-color capitalize'>{details.content}</p>
                  </div>
                </div>
              </Link>

            ))
          }
        </div>
      </div>
    </>
  )
}

export default Services


