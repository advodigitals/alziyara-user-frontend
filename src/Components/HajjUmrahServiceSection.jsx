import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { serviceArray } from '../constants/HajjUmrahServiceArray'



const HajjUmrahServiceSection = () => {
    return (
        <>
            <div className="flex h-fit w-full container mx-auto flex-col items-center gap-7 px-2">
                <h1 className="text-4xl font-bold text-black text-center">Services we Provide<span className="text-primary-color">.</span></h1>
                <div className="flex h-full w-full lg:flex-row flex-col ">
                    <div data-aos="fade-left" className="hidden md:flex  basis-1/4 items-center lg:justify-start justify-center">
                        <h1 className="text-5xl  font-medium text-primary-color leading-[68px] md:text-left text-center"><span className="text-5xl  font-bold text-black leading-[58px]">Explore </span>World with <span className="text-5xl  font-bold text-black leading-[58px]">Expertise</span>.</h1>
                    </div>

                    {/* <div data-aos="fade-up" className="flex md:hidden  basis-1/4 items-center lg:justify-start justify-center">
                        <h1 className="text-5xl  font-medium text-primary-color leading-[68px] md:text-left text-center"><span className="text-5xl  font-bold text-black leading-[58px]">Explore </span>World with <span className="text-5xl  font-bold text-black leading-[58px]">Expertise</span>.</h1>
                    </div> */}


                    <div  className="flex h-full basis-3/4 flex-wrap  justify-center gap-x-4 p-2 gap-y-5">
                        {
                            serviceArray.map((service) => (
                                <div data-aos="fade-up" className="flex w-[360px] shadow-lg shadow-slate-600/50 rounded-[10px] px-2 py-6  bg-white flex-row items-start justify-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="29" height="29" />
                                    <div className="flex  h-full flex-col  gap-4">
                                        <h3 className="text-black text-xl font-semibold">{service.title}</h3>
                                        <p className="text-third-color ">{service.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HajjUmrahServiceSection
