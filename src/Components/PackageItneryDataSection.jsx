import React, { useState } from 'react'

const PackageItneryDataSection = ({ packageData }) => {
    
    const [isOpen, setIsOpen] = useState(null)
    const handleIsOpen = (index) => {
        if (index === isOpen) {
            setIsOpen(null)
        } else {

            setIsOpen(index)
        }
    }
    return (
        <>
            <div id="itinerary" className="flex h-full w-full basis-1/2 p-2 flex-col gap-3">
                <h1 className="text-black text-3xl font-semibold capitalize">travel schedule <span className='text-primary-color text-3xl font-semibold'>:</span></h1>
                <div className="flex flex-col h-full w-full gap-5 ">
                    {
                        packageData.itinerary && packageData.itinerary.map((details, index) => (
                            <div className={`flex flex-row  h-fit bg-white  rounded-[10px] items-start shadow-lg shadow-slate-600/50  py-4  cursor-pointer`} onClick={() => handleIsOpen(index)}>
                                <p className={`capitalize text-black font-medium justify-center  flex  min-w-[100px] `}>{details.day}</p>
                                <div className="flex flex-col flex-1 items-start gap-2">
                                    <p className="capitalize text-black font-medium  ">{details.subHeading}</p>


                                    <div className={`overflow-hidden transition-all duration-[0.5s] ${isOpen === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <ul className="pl-5 flex flex-col gap-2">
                                            {details.activities && details.activities.map((points) => (
                                                <li className="capitalize text-primary-color font-light">
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
        </>
    )
}

export default PackageItneryDataSection
