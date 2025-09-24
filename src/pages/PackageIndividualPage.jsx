import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { useParams } from 'react-router'
import {  handleSinglePackage } from '../api/package/package'
import { Icon } from '@iconify/react/dist/iconify.js'
// import image from '../Assets/test.jpg'

const PackageIndividualPage = () => {
    const [packageData, setPackageData] = useState([])
    const [isOpen, setIsOpen] = useState(null)
    const { name } = useParams()

    useEffect(() => {
        const allPackageData = async () => {
        const allPackageDataArray = await handleSinglePackage(name)
        setPackageData(allPackageDataArray?.data)
    }
        allPackageData()
    },[name])

    // const allPackageData = async () => {
    //     const allPackageDataArray = await handleSinglePackage(name)
    //     setPackageData(allPackageDataArray?.data)
    // }

    const handleIsOpen = (index) => {
        if (index === isOpen) {
            setIsOpen(null)
        } else {

            setIsOpen(index)
        }
    }
    return (
        <>
            <Layouts>
                <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col pb-10 gap-8">
                    <div id="heading-section" className="flex h-fit w-full  flex-col lg:flex-row max-w-[1200px] mx-auto  gap-y-6">
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
                    <div id="image-section" className="flex w-full  h-[30rem] ">
                        <img src={packageData.coverImg} alt="" className='h-full w-full object-cover ' />
                    </div>
                    <div id="remaining-details-section" className="flex h-fit w-full max-w-[1200px] mx-auto md:flex-row flex-col pt-10 p-2">
                        <div className="flex h-full basis-1/2 flex-col gap-5 ">
                            <div className="flex flex-row  w-full ">
                                <div id="details" className="flex w-full flex-row gap-8  p-2">
                                    <div className="min-w-[100px] flex flex-col items-center text-third-color font-medium  ">
                                        <div className="flex flex-col text-left gap-4">
                                            <p className="text-base font-medium">Price</p>
                                            <p className="text-base font-medium">Quota</p>
                                            <p className="text-base font-medium">Schedule</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col text-black font-medium gap-4  px-4">
                                        <div className="flex flex-col text-left gap-4">
                                            <p className="text-base font-medium">{packageData.amountPerPerson}</p>
                                            <p className="text-base font-medium capitalize">{packageData.availableQuota}</p>
                                            <p className="text-base font-medium">{packageData.dateOfTravel}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-[3px_solid_#9d9d9d] mx-6 my-8' />
                            <div className="text-third-color px-2 font-normal text-base">
                                <p className="">{packageData.longDescription}</p>
                            </div>
                            <div className="w-full flex flex-col p-2 gap-3">
                                <h1 className="text-black text-3xl font-semibold capitalize">includes <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                                {
                                    packageData.inclusion && packageData.inclusion.map((points) => (
                                        <div className=" flex flex-row justify-start items-center gap-3">
                                            <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                            <p className="text-base font-normal text-third-color">{points}</p>
                                        </div>
                                    ))
                                }

                            </div>

                            <div className=" w-full flex flex-col p-2 gap-3">
                                <h1 className="text-black text-3xl font-semibold capitalize">excludes <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                                {
                                    packageData.exclusion && packageData.exclusion.map((points) => (
                                        <div className=" flex flex-row justify-start items-center gap-3">
                                            <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                            <p className="text-base font-normal text-third-color">{points}</p>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                        <div id="itinerary" className="flex h-full w-full basis-1/2 p-2 flex-col gap-3">
                            <h1 className="text-black text-3xl font-semibold capitalize">travel schedule <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                            <div className="flex flex-col h-full w-full gap-5 ">
                                {
                                    packageData.itinerary && packageData.itinerary.map((details, index) => (
                                        <div className={`flex flex-row  h-fit bg-white  rounded-[10px] items-start shadow-lg shadow-slate-600/50  py-4 `} onClick={() => handleIsOpen(index)}>
                                            <p className={`capitalize text-black font-medium justify-center  flex  min-w-[100px] `}>{details.day}</p>
                                            <div className="flex flex-col flex-1 items-start gap-2">
                                                <p className="capitalize text-black font-medium  ">{details.subHeading}</p>


                                                <div className={`overflow-hidden transition-all duration-[0.5s] ${isOpen === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                    <ul className="pl-5 flex flex-col gap-2">
                                                        {details.activities && details.activities.map((points) => (
                                                                <li  className="capitalize text-primary-color font-light">
                                                                    {points}
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default PackageIndividualPage
