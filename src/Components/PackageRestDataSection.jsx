import React from 'react'

const PackageRestDataSection = ({ packageData }) => {
    return (
        <>
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
            </div >
        </>
    )
}

export default PackageRestDataSection
