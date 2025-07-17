import React from 'react'
import { servicesTagSectionOne } from '../constants/FooterServicesTagOne'
import { servicesTagSectionTwo } from '../constants/FooterServicesTagTwo'
import { Link } from 'react-router'

const FooterServicesSection = () => {
    return (
        <>
            <div className="flex flex-1 h-fit w-full  ">
                <div className="flex flex-1 h-full w-full  flex-col">
                    <div className="w-full h-fit py-2 flex  sm:justify-center justify-start">
                        <h1 className="text-3xl font-bold text-white">SERVICES</h1>
                    </div>
                    <div className="flex w-full h-full flex-row px-2">
                        <div className="flex flex-1   pt-3 flex-col items-center ">
                            <div className='flex flex-col gap-4'>
                                {
                                    servicesTagSectionOne.map((details) => (
                                        <Link to={details.path}>
                                            <p className="text-white text-lg font-normal text-left hover:text-black">{details.title}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-1  flex-col gap-2 items-center pt-3">
                            <div className='flex flex-col gap-4'>
                                {
                                    servicesTagSectionTwo.map((details) => (
                                        <Link to={details.path}>
                                            <p className="text-white text-lg font-normal text-left hover:text-black">{details.title}</p>
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

export default FooterServicesSection
