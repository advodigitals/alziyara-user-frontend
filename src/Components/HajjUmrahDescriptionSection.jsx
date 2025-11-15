import React, { useState } from 'react'
import umrahBackgroundImage from "../Assets/images/umrah-background-image.jpg"
import { Icon } from '@iconify/react/dist/iconify.js'
import { HajjPillers } from '../constants/HajjPillers'
import { UmrahPillers } from '../constants/UmrahPillers'

const HajjUmrahDescriptionSection = () => {
    const [pillarUmrahIsOpen, setPillarUmrahIsOpen] = useState(null)
    const [umrahMainSpotsIsOpen, setUmrahMainSpotsIsOpen] = useState(null)
    const [pillarHajjIsOpen, setPillarHajjIsOpen] = useState(null)
    const [hajjMainSpotsIsOpen, setHajjMainSpotsIsOpen] = useState(null)


    const handleUmrahMainSpotsIsOpen = (index) => {

        if (index === umrahMainSpotsIsOpen) {
            setUmrahMainSpotsIsOpen(null)
        } else {

            setUmrahMainSpotsIsOpen(index)
        }

    }

    const handleHajjMainSpotsIsOpen = (index) => {
        if (index === hajjMainSpotsIsOpen) {
            setHajjMainSpotsIsOpen(null)
        } else {

            setHajjMainSpotsIsOpen(index)
        }

    }


    const handlePillarsOfUmrahIsOpen = (index) => {
        if (index === pillarUmrahIsOpen) {
            setPillarUmrahIsOpen(null)
        } else {

            setPillarUmrahIsOpen(index)
        }

    }

    const handlePillarsOfHajjIsOpen = (index) => {
        if (index === pillarHajjIsOpen) {
            setPillarHajjIsOpen(null)
        } else {
            setPillarHajjIsOpen(index)
        }
    }

    return (
        <>
            <div className="w-full h-fit bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${umrahBackgroundImage})` }}>
                <div className="w-full  h-full bg-black bg-opacity-70 flex flex-col  justify-start gap-9 px-2 py-4 pt-10">
                    <div className="flex flex-col mx-auto container  w-full h-fit gap-9">
                        <h1 className="text-3xl text-white font-light max-w-[900px]">About <span className="text-white font-semibold text-3xl">Umrah</span></h1>
                        <p className="text-white text-xl font-normal max-w-[900px]">Umrah is a sacred journey of faith and devotion, giving every Muslim a chance to stand before the holy Kaaba, remember Allah sincerely, and seek forgiveness. Though smaller than Hajj, it brings great spiritual reward,
                            cleansing the soul, bringing peace to the heart, and renewing the believer’s connection with their Creator.</p>
                    </div>
                    <div className="container mx-auto flex flex-col md:flex-row h-full w-full px-4 gap-6">
                        <div className="flex h-full flex-1 flex-col gap-3">
                            <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                                <h3 className="text-black text-2xl font-semibold ">Pillars of Umrah <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                            </div>
                            <div className="flex flex-col h-full w-full gap-5">
                                {
                                    UmrahPillers.map((step, index) => (
                                        <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handlePillarsOfUmrahIsOpen(index)}>
                                            <p className="capitalize text-black font-semibold text-lg justify-center  flex  min-w-[100px] ">{step.step}</p>
                                            <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                                <p className="capitalize text-black text-lg font-semibold ">{step.name}</p>
                                                <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${pillarUmrahIsOpen === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                    <p className=" text-primary-color font-light text-base">{step.explanation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex h-full flex-1 flex-col gap-3">
                            <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                                <h3 className="text-black text-2xl font-semibold capitalize">top attractions <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                            </div>
                            <div className="flex flex-col h-full w-full gap-5">
                                <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handleUmrahMainSpotsIsOpen(1)}>
                                    <p className=" min-w-[100px] "></p>
                                    <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                        <p className="capitalize text-black text-lg font-semibold ">Ihram</p>
                                        <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${umrahMainSpotsIsOpen === 1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                            <p className="text-primary-color font-light text-base">
                                                Starting from one of the Miqat or when aligning with them on the plane, Ihram for Umrah or Hajj commences. For individuals who wish to take Ihram in order to perform Umrah or Hajj, the
                                                Prophet, peace and blessings be upon him, designated certain locations as Miqat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mx-auto container  w-full h-fit gap-9">
                        <h1 className="text-3xl text-white font-light max-w-[900px] capitalize">about <span className="text-white font-semibold text-3xl">hajj</span></h1>
                        <p className="text-white text-xl font-normal max-w-[900px]">
                            Hajj is a sacred journey of faith where Muslims come together in Makkah, standing equal before Allah. It is a time of prayer, humility, and reflection, cleansing
                            the heart from sins and drawing closer to Allah with peace and devotion.
                        </p>
                    </div>
                    <div className="container mx-auto flex flex-col md:flex-row h-full w-full px-4 gap-6">
                        <div className="flex h-full flex-1 flex-col gap-3">
                            <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                                <h3 className="text-black text-2xl font-semibold ">Pillars Of Hajj <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                            </div>
                            <div className="flex flex-col h-full w-full gap-5">
                                {
                                    HajjPillers.map((day, index) => (
                                        <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handlePillarsOfHajjIsOpen(index)}>
                                            <p className="capitalize text-black font-semibold text-lg justify-center  flex  min-w-[100px] ">{day.step}</p>
                                            <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                                <p className="capitalize text-black text-lg font-semibold ">{day.dateName}</p>
                                                <div className={`overflow-hidden transition-all duration-[.5s] px-3 ${pillarHajjIsOpen === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                                                    {/* <p className="capitalize text-third-color text-base font-medium ">{step.explanation}</p> */}
                                                    <ul className="pl- flex flex-col gap-2">
                                                        {day.activities && day.activities.map((points) => (
                                                            <div className="flex flex-row items-start">
                                                                <Icon icon="lucide:dot" className='text-primary-color font-light  ' width="25" height="25" />
                                                                <li className=" text-primary-color font-light text-base">
                                                                    {points}
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex h-full flex-1 flex-col gap-3">
                            <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                                <h3 className="text-black text-2xl font-semibold capitalize">top attractions <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                            </div>
                            <div className="flex flex-col h-full w-full gap-5">
                                <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handleHajjMainSpotsIsOpen(1)}>
                                    <p className=" min-w-[100px] "></p>
                                    <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                        <p className="capitalize text-black text-lg font-semibold ">Ihram</p>
                                        <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${hajjMainSpotsIsOpen === 1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                            <p className="text-primary-color font-light text-base">
                                                Starting from one of the Miqat or when aligning with them on the plane, Ihram for Umrah or Hajj commences. For individuals who wish to take Ihram in order to perform Umrah or Hajj, the
                                                Prophet, peace and blessings be upon him, designated certain locations as Miqat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HajjUmrahDescriptionSection
