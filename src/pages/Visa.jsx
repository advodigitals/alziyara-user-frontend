import React, { useState, Suspense, useEffect } from 'react'
import Layouts from '../Layouts/Layouts'
import SubPageBGImage from '../Components/SubPageBGImage'
import GlobalVisaText from '../Components/GlobalVisaText'
import GccVisaText from '../Components/GccVisaText'
import { useParams } from 'react-router'
import { handleVisaCountry, handleVisaSearchCountry } from '../api/visa/visa'
import { ThreeDot } from "react-loading-indicators";
// import { glblVisaCountryDetails } from '../constants/GlobalVisaData'
// import VisaCountryMap from '../Components/VisaCountryMap'
const VisaCountryMap = React.lazy(() => import("../Components/VisaCountryMap"))

const Visa = () => {
    const [search, setSearch] = useState('')
    const [visaCountryData, setVisaCountryData] = useState([])
    const { type } = useParams()
    useEffect(() => {
        visaCountriesDataFunction()
        // eslint-disable-next-line 
    },[type])

    useEffect(() => {
        if (search.trim()) {
            visaCountriesDataSearch()
        } else {
            visaCountriesDataFunction()
        
        }
        // eslint-disable-next-line 
    },[search])

    const visaCountriesDataFunction = async () => {
        const visaCountryDataArray = await handleVisaCountry(type)
        setVisaCountryData(visaCountryDataArray?.visaCountries)
    }
    const visaCountriesDataSearch = async () => {
        const visaSearchCountryDataArray = await handleVisaSearchCountry({ type, search })
        setVisaCountryData(visaSearchCountryDataArray?.data)
    }

    


    return (
        <>
            <Layouts page={"Visa"}>
                <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center pb-4 gap-6">
                    <SubPageBGImage heading={type === "global" ? "GLOBAL VISA" : "GCC VISA"} setSearch={setSearch}  inputSubHeading={"search the country"} inputPlaceholder={"Country Name"}/>
                    <div className='w-full h-full  flex flex-col gap-4 md:gap-8 bg-white' >
                        <div id="text" className="px-4 justify-center text-center sm:mt-5 text-base w-full container mx-auto">
                            {type === "global" ? <GlobalVisaText /> : <GccVisaText />}
                        </div>
                        <Suspense fallback={<div className="flex w-full h-[100vh] justify-center items-center capitalize gap-5 "  ><ThreeDot variant="bounce" color="#00b372" size="medium" text="Loading" textColor="#000000" /></div>}>
                            <div className="h-full w-full container mx-auto sm:px-5 px-2 grid ">
                                <div  id="visa-section" className={` h-full w-full ${visaCountryData.length === 0 ? "" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" }   sm:gap-6 gap-4 justify-center`}>
                                    <VisaCountryMap visaCountryDataArray={visaCountryData}  />
                                </div>
                            </div>
                        </Suspense>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default Visa
