import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const PackageHeroDataSection = ({ packageData }) => {
    return (
        <>
            <div id="heading-section" className="flex h-fit w-full  flex-col lg:flex-row container mx-auto  gap-y-6">
                <div id="main-heading" className="flex lg:basis-1/2 items-center justify-center mx-auto p-3 ">
                    <h1 className="capitalize text-5xl text-black font-normal text-center lg:text-left ">{packageData.name}</h1>
                </div>
                <div id="main-details" className="flex lg:basis-1/2  justify-center items-center ">
                    <div className="w-full h-full flex flex-col max-w-[450px] items-start justify-center gap-6 px-2 py-4">
                        <div className="flex flex-col gap-y-2">
                            <div className="flex flex-row gap-x-3">
                                <Icon className='text-primary-color' icon="famicons:location-outline" width="22" height="22" />
                                <p className="capitalize text-black font-normal text-base">{packageData.location}</p>
                            </div>
                            <div className="flex flex-row gap-x-3">
                                <Icon className='text-primary-color' icon="basil:clock-outline" width="22" height="22" />
                                <p className="capitalize text-black font-normal text-base">{packageData.duration}</p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <p className="capitalize text-third-color font-nromal text-base text-left">{packageData.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageHeroDataSection
