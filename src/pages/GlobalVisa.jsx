import React, { useState, Suspense } from 'react'
import Layouts from '../Layouts/Layouts'
import { glblVisaCountryDetails } from '../constants/GlobalVisaData'
import VisaBGImage from '../Components/VisaBGImage'
// import VisaCountryMap from '../Components/VisaCountryMap'
const VisaCountryMap = React.lazy(() => import("../Components/VisaCountryMap"))

const GlobalVisa = () => {
    const [search, setSearch] = useState('')
    return (
        <>
            <Layouts>
                <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center pb-4 ">
                    <VisaBGImage heading={"GLOBAL VISA"} setSearch={setSearch} />
                    <div className='w-full h-full  flex flex-col gap-4 md:gap-8 bg-white' >
                        <div id="text" className="px-4 justify-center text-center sm:mt-5 text-base">
                            <p className="">
                                We provide fast and reliable global visa services to help you travel anywhere with ease. Our team guides you through every step, from preparing your
                                documents to getting your visa approved. Whether it’s for tourism, business, or study, we make the process simple and stress‑free.
                            </p>
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="h-full w-full max-w-7xl mx-auto sm:px-5 px-2 grid ">
                                <div id="visa-section" className=" h-full w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 gap-4 ">
                                    <VisaCountryMap visaCountryDataArray={glblVisaCountryDetails} search={search} />
                                </div>
                            </div>
                        </Suspense>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default GlobalVisa
