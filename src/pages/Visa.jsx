import React, { useState, Suspense, useEffect } from 'react'
import Layouts from '../Layouts/Layouts'
import SubPageBGImage from '../Components/SubPageBGImage'
import GlobalVisaText from '../Components/GlobalVisaText'
import GccVisaText from '../Components/GccVisaText'
import { useParams } from 'react-router'
import { handleVisaCountry, handleVisaSearchCountry } from '../api/visa/visa'
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
            <Layouts>
                <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center pb-4 gap-6">
                    <SubPageBGImage heading={type === "global" ? "GLOBAL VISA" : "GCC VISA"} setSearch={setSearch}  inputSubHeading={"search the country"} inputPlaceholder={"Country Name"}/>
                    <div className='w-full h-full  flex flex-col gap-4 md:gap-8 bg-white' >
                        <div id="text" className="px-4 justify-center text-center sm:mt-5 text-base w-full max-w-[1100px] mx-auto">
                            {type === "global" ? <GlobalVisaText /> : <GccVisaText />}
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="h-full w-full max-w-[1100px] mx-auto sm:px-5 px-2 grid ">
                                <div id="visa-section" className=" h-full w-full max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  sm:gap-6 gap-4 justify-center">
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
