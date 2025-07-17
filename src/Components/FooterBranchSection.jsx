import React from 'react'
import { branchDetails } from '../constants/FooterBranchDetails'

const FooterBranchSection = () => {
    return (
        <>
            <div id="Branches-section" className=" flex flex-col w-full h-fit ">
                <div className="w-full h-fit py-2 flex sm:justify-center justify-start pl-2 sm:pl-0">
                    <h1 className="text-2xl font-semibold text-white">BRANCHES</h1>
                </div>
                <div className=" w-full flex-1 flex md:flex-row flex-col px-4 gap-4 lg:gap-8">
                    {
                        branchDetails.map((details) => (
                            <div className="  h-full flex-1 flex-col flex  py-3">
                                <div >
                                    <span className='flex sm:justify-center justify-start gap-1 '>{details.icon}<p className="font-medium text-white">{details.name}</p></span>
                                    <p className="font-light text-white capitalize sm:text-center text-left">{details.address}</p>
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
