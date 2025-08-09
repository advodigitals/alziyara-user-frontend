import React, { useState, Suspense, useEffect } from 'react'
import Layouts from '../Layouts/Layouts'
import VisaBGImage from '../Components/VisaBGImage'
import axios from 'axios'
import { useLocation } from 'react-router'
import GlobalVisaText from '../Components/GlobalVisaText'
import GccVisaText from '../Components/GccVisaText'
// import { glblVisaCountryDetails } from '../constants/GlobalVisaData'
// import VisaCountryMap from '../Components/VisaCountryMap'
const VisaCountryMap = React.lazy(() => import("../Components/VisaCountryMap"))

const Visa = () => {
    const location = useLocation()
    const [search, setSearch] = useState('')
    const [visaCountryData ,setVisaCountryData] = useState([])
    const {type} = location.state
    console.log({type},"type")


    useEffect (() => {
        visaCountriesDataFunction ()
        // visaCountriesDataSearch ()
    },[])


    const visaCountriesDataFunction  = async () => {
        const visaCountryDataArray = await axios.get(`http://localhost:3007/api/v1/visa/get?type=${type}`)
        setVisaCountryData(visaCountryDataArray?.data?.visaCountries)
    }
    // const visaCountriesDataSearch = async () => {
    //    const visaSearchCountryDataArray = await axios.get(`http://localhost:3007/api/v1/visa/search/${search}`)
    //    setVisaCountryData(visaSearchCountryDataArray?.data?.visaCountries)

    // }
    

    return (
        <>
            <Layouts>
                <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center pb-4 ">
                    <VisaBGImage heading={type  == "global" ? "GLOBAL VISA" : "GCC VISA"} setSearch={setSearch} />
                    {console.log("search",search)}
                    <div className='w-full h-full  flex flex-col gap-4 md:gap-8 bg-white' >
                        <div id="text" className="px-4 justify-center text-center sm:mt-5 text-base">
                           {type == "global" ? <GlobalVisaText/> : <GccVisaText/>}
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="h-full w-full max-w-7xl mx-auto sm:px-5 px-2 grid ">
                                <div id="visa-section" className=" h-full w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 gap-4 ">
                                    <VisaCountryMap visaCountryDataArray={visaCountryData} search={search} />
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
