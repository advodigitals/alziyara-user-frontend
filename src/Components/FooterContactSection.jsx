import React from 'react'
import { customerSupportArray } from '../constants/FooterContactDetails'

const FooterContactSection = () => {
    return (
        <>
            <div id="Contact-section" className=" flex flex-col w-full h-fit">
                <div className="w-full h-fit py-2 flex sm:justify-center justify-start pl-2 sm:pl-0">
                    <h1 className="text-2xl font-semibold text-white">CUSTOMER SUPPORT</h1>
                </div>
                <div className=" w-full flex-1 flex md:flex-row flex-col">
                    {
                        customerSupportArray.map((details) => (
                            <div className="  h-full flex-1 flex-col flex sm:items-center items-start md:pl-0 pl-2 md:py-3 py-2">
                                <div className="flex md:flex-col flex-row sm:items-center items-start gap-2">
                                    <p className="font-light text-white">{details.name}</p>
                                    <p className="font-light text-white">{details.section}</p>
                                </div>
                                <a href={details.href}><p className="font-medium text-white hover:text-black">{details.number}</p></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FooterContactSection
