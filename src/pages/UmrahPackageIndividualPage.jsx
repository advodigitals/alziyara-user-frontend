import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useParams } from 'react-router'
import { handleAllUmrahHajjPackageDisplay } from '../api/umrah-and-hajj/umrahHajjPackage'


const UmrahPackageIndividualPage = () => {
    const [packageData , setPackageData ] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        const PackageData = async () =>{
            const PackageDataArray = await handleAllUmrahHajjPackageDisplay(slug)
            console.log(PackageDataArray.data.packageData,"datkkkkkkkkkkkkkka")
            setPackageData(PackageDataArray?.data?.packageData)
        }
        PackageData()
        
    },[slug])
    return (
        <>
            <Layouts>
                <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col pb-10 gap-8">
                    <div id="heading-section" className="flex h-fit w-full  flex-col lg:flex-row container mx-auto  gap-y-6">
                        <div id="main-heading" className="flex lg:basis-1/2 items-center justify-center mx-auto p-3 ">
                            <h1 className="capitalize text-5xl text-black font-normal text-center lg:text-left ">{packageData.name}</h1>
                        </div>
                        <div id="main-details" className="flex lg:basis-1/2  justify-center items-center ">
                            <div className="w-full h-full flex flex-col max-w-[450px] items-start justify-center gap-6 px-2 py-4">
                                <div className="flex flex-col gap-y-2">
                                    
                                    <div className="flex flex-row gap-x-3">
                                        <Icon className='text-primary-color' icon="basil:clock-outline" width="22" height="22" />
                                        <p className="capitalize text-black font-normal text-base">{packageData.duration}</p>
                                    </div>
                                    <div className="flex flex-row gap-x-3">
                                        <Icon className='text-primary-color' icon="mdi:flight" width="22" height="22" />
                                        <p className="capitalize text-black font-normal text-base">{packageData.flight}</p>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <p className="capitalize text-third-color font-nromal text-base text-left">{packageData.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="remaining-details-section" className="flex h-fit w-full container mx-auto md:flex-row flex-col pt-10 p-2">
                        <div className="flex h-full basis-1/2 flex-col gap-5 ">
                            <div className="flex flex-row  w-full ">
                                <div id="details" className="flex w-full flex-row gap-8  p-2">
                                    <div className="min-w-[100px] flex flex-col items-center text-third-color font-medium  ">
                                        <div className="flex flex-col text-left gap-4">
                                            <p className="text-base font-medium">Price</p>
                                            <p className="text-base font-medium">Seats</p>
                                            <p className="text-base font-medium">Ameer</p>
                                            <p className="text-base font-medium">Schedule</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col text-black font-medium gap-4  px-4">
                                        <div className="flex flex-col text-left gap-4">
                                            <p className="text-base font-medium">{packageData.amountPerPerson}</p>
                                            <p className="text-base font-medium capitalize">{packageData.availableSeats}</p>
                                            <p className="text-base font-medium capitalize">Not decided </p>
                                            <p className="text-base font-medium flex flex-wrap gap-2">5/march <Icon className='text-primary-color' icon="solar:arrow-right-bold" width="22" height="22" /> 24/march</p>
                                        </div>
                                    </div>
                                </div>
                            </div >
                            <hr className='border-[3px_solid_#9d9d9d] mx-6 my-8' />
                            <div className="text-third-color px-2 font-normal text-base">
                                <p className="">This Umrah in Ramadan package is designed for pilgrims seeking a peaceful and spiritually uplifting
                                    journey. Experience the serenity of Makkah and Madinah during the blessed month, with time for prayer, reflection,
                                    and worship near the holy mosques. Perform Umrah, break fast in a sacred atmosphere, and feel the unity of believers
                                    from around the world. Ideal for individuals, families, and groups who wish to deepen their faith and return with a
                                    calm and renewed heart.</p>
                            </div>
                            <div className="w-full flex flex-col p-2 gap-3">
                                <h1 className="text-black text-3xl font-semibold capitalize">includes <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                                {/* {
                                    packageDataDetails && packageDataDetails.map((points) => (
                                        <div className=" flex flex-row justify-start items-center gap-3">
                                            <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                            <p className="text-base font-normal text-third-color">{points}</p>
                                        </div>
                                    ))
                                } */}

                            </div>
                            <div className="w-full flex flex-col p-2 gap-3">
                                <h1 className="text-black text-3xl font-semibold capitalize">excludes <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                                {/* {
                                    packageDataDetails && packageDataDetails.map((points) => (
                                        <div className=" flex flex-row justify-start items-center gap-3">
                                            <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                            <p className="text-base font-normal text-third-color">{points}</p>
                                        </div>
                                    ))
                                } */}

                            </div>
                        </div>
                        <div id="itinerary" className="flex h-full w-full basis-1/2 p-2 flex-col gap-3">
                            <h1 className="text-black text-3xl font-semibold capitalize">travel schedule <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                            <div className="flex flex-col h-full w-full gap-5 ">
                                {/* {
                                    packageData.itinerary && packageData.itinerary.map((details, index) => (
                                        <div className={`flex flex-row  h-fit bg-white  rounded-[10px] items-start shadow-lg shadow-slate-600/50  py-4  cursor-pointer`} onClick={() => handleIsOpen(index)}>
                                            <p className={`capitalize text-black font-medium justify-center  flex  min-w-[100px] `}>{details.day}</p>
                                            <div className="flex flex-col flex-1 items-start gap-2">
                                                <p className="capitalize text-black font-medium  ">{details.subHeading}</p>


                                                <div className={`overflow-hidden transition-all duration-[0.5s] ${isOpen === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                    <ul className="pl-5 flex flex-col gap-2">
                                                        {details.activities && details.activities.map((points) => (
                                                            <li className="capitalize text-primary-color font-light flex flex-row items-center gap-2">
                                                                <Icon icon="icon-park-outline:dot" />
                                                                {points}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>
                                    ))
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default UmrahPackageIndividualPage
