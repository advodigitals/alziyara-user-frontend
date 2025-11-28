import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router'
import { ServiceCardDetails } from '../constants/ServiceSectionOptions'


const Services = () => {

  


  return (
    <>
      <div className=" bg-hash-color-bg max-w-[2000px] mx-atuo w-full h-full flex flex-col gap-8 pt-6 pb-5 md:pb-10 px-3">
        <div className=" flex justify-center items-center ">
          <h1 className="text-4xl font-bold text-black text-center">Services We Offer<span className="text-primary-color">.</span></h1>
        </div>
        <div className="w-full container mx-auto h-fit  flex flex-row flex-wrap gap-y-9 gap-x-3  justify-evenly ">
          {
            ServiceCardDetails.map((details) => (
              <Link to={details.path} className={`${details.path ? "cursor-pointer" : "cursor-default"}`}>
                <div id="Services-cards" className="flex w-[17rem] sm:w-[20rem] h-[15rem] rounded-[10px] bg-white flex-col shadow-lg shadow-slate-600/50 ">
                  <div id="heading" className="flex flex-row gap-8 justify-start items-center pt-4 pl-2">
                    <span className='text-black h-fit'><Icon icon={details.icon} width="40" height="40" /></span>
                    <h2 className='text-black text-2xl font-medium h-fit'>{details.title}<span className='text-primary-color text-2xl font-medium'>.</span></h2>
                  </div>
                  <hr className='border-t-[1px_solid_#9d9d9d] mx-8 my-4' />
                  <div className=' px-4  flex items-center justify-center'>
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


