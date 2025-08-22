import React, { useEffect, useState } from 'react'
import Layouts from '../Layouts/Layouts'
import { useParams } from 'react-router'
import { handleAllPackageDisplay } from '../api/package/package'
import { Icon } from '@iconify/react/dist/iconify.js'
import image from '../Assets/test.jpg'

const PackageIndividualPage = () => {
    const [packageData, setPackageData] = useState([])
    const [ isOpen , setIsOpen ] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        allPackageData()
    }, [])

    const allPackageData = async () => {
        const allPackageDataArray = await handleAllPackageDisplay(slug)
        setPackageData(allPackageDataArray?.data)
    }
    return (
        <>
            <Layouts>
                <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col pb-10">
                    <div id="heading-section" className="flex h-fit w-full  flex-col lg:flex-row max-w-[1200px] mx-auto  gap-y-6">
                        <div id="main-heading" className="flex lg:basis-1/2 items-center justify-center mx-auto p-3 ">
                            <h1 className="capitalize text-5xl text-black font-normal text-center lg:text-left ">Kerala Back water Bliss</h1>
                        </div>
                        <div id="main-details" className="flex lg:basis-1/2  justify-center items-center ">
                            <div className="w-full h-full flex flex-col max-w-[450px] items-start justify-center gap-6 px-2 py-4">
                                <div className="flex flex-col gap-y-2">
                                    <div className="flex flex-row gap-x-3">
                                        <Icon className='text-primary-color' icon="famicons:location-outline" width="22" height="22" />
                                        <p className="capitalize text-black font-normal text-base">bali,indonasia </p>
                                    </div>
                                    <div className="flex flex-row gap-x-3">
                                        <Icon className='text-primary-color' icon="basil:clock-outline" width="22" height="22" />
                                        <p className="capitalize text-black font-normal text-base">7 days / 6 nights </p>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <p className="capitalize text-third-color font-nromal text-base text-left"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="image-section" className="flex w-full  h-[30rem] ">
                        <img src={image} alt="" className='h-full w-full object-cover ' />
                    </div>
                    <div id="remaining-details-section" className="flex h-[55rem] w-full max-w-[1200px] mx-auto md:flex-row flex-col pt-10 p-2">
                        <div className="flex h-full basis-3/5 flex-col gap-5 bg-primary-color">
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
                                            <p className="text-base font-medium">$999</p>
                                            <p className="text-base font-medium">20 Available</p>
                                            <p className="text-base font-medium">10 - 17 November 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-[3px_solid_#9d9d9d] mx-6 my-8' />
                            <div className="text-third-color px-2 font-normal text-base">
                                <p className=""> going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                                    in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                    making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                    of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                            </div>
                            <div className="w-full flex flex-col p-2 gap-3">
                                <h1 className="text-black text-3xl font-semibold capitalize">includes<span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                                <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                                 <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                                 <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                                 <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                            </div>

                             <div className=" w-full flex flex-col p-2 gap-3">
                                <h1 className="text-black text-3xl font-semibold capitalize">excludes<span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                                <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                                 <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                                 <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                                 <div className="flex flex-row justify-start items-center gap-3">
                                    <Icon className='text-primary-color' icon="simple-icons:ticktick" width="16" height="16" />
                                    <p className="text-base font-normal text-third-color">Daily breakfast,lunch and dinner</p>
                                </div>
                            </div>

                        </div>
                        <div id="itinerary" className="flex h-full w-full basis-2/5 p-2 flex-col ">
                            <h1 className="text-black text-3xl font-semibold capitalize">travel schedule<span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                            <div className="flex flex-col h-full w-full">
                                <div className="flex flex-row w-full h-[60px] bg-red-600 rounded-[10px] items-center  hover:h-[100px] transition-all duration-[0.5s]">
                                    <p className="capitalize text-black font-medium  flex justify-center  min-w-[100px] ">day 01</p>
                                    <div className="flex flex-col flex-1 ">
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layouts>
        </>
    )
}

export default PackageIndividualPage
