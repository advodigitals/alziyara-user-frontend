import React from 'react'
import { branchDetails } from '../constants/FooterBranchDetails'

const FooterBranchSection = () => {
    return (
        <>
            <div id="Branches-section" className=" flex flex-col w-full h-fit lg:pb-0 lg:pl-0 pl-2">
                <div className="w-full h-fit py-2 flex sm:justify-center justify-start pl-2 sm:pl-0">
                    <h1 className="text-2xl font-semibold text-white">OUR OFFICES</h1>
                </div>
                <div className=" w-full flex-1 flex md:flex-row flex-col  gap-1 sm:gap-2 lg:gap-8">
                    {
                        branchDetails.map((details) => (
                            <div className="  h-full flex-1 flex-col flex  py-3 ">
                                <div >
                                    <span className='flex sm:justify-center justify-start gap-1 flex-1'>{details.icon}<p className="font-medium text-white">{details.name}</p></span>
                                    <p className="font-extralight text-white capitalize sm:text-center text-left ">{details.address}</p>
                                    <a href={details.href}><p className="font-medium text-white hover:text-black sm:text-center text-left">{details.number}</p></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FooterBranchSection
