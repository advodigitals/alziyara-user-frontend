import React from 'react'
import { quickLinksTagsSectionOne } from '../constants/FooterQuickLinksTagsOne'
import { quickLinksTagSectionTwo } from '../constants/FooterQuickLinksTagTwo'
import { Link } from 'react-router'

const FooterQuickLinksSection = () => {
    return (
        <>
            <div className="flex flex-1 h-fit w-full  flex-col">
                <div className="w-full h-fit py-2 flex justify-center">
                    <h1 className="text-3xl font-bold text-white"> QUICK LINKS</h1>
                </div>
                <div className="flex w-full h-full flex-row">
                    <div className="flex flex-1   pt-3 flex-col items-center ">
                        <div className='flex flex-col gap-4'>
                            {
                                quickLinksTagsSectionOne.map((details) => (
                                    <Link to={details.path}>
                                        <p className="text-white text-lg font-normal text-left">{details.title}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-1  flex-col gap-2 items-center pt-3">
                        <div className='flex flex-col gap-4'>
                            {
                                quickLinksTagSectionTwo.map((details) => (
                                    <Link to={details.path}>
                                        <p className="text-white text-lg font-normal text-left">{details.title}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterQuickLinksSection
