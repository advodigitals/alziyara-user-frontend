import React from 'react'
import { Link } from 'react-router'

const VisaCountryMap = (props) => {
    const visaCountryDataArray = props.visaCountryDataArray
    const search = props.search

    console.log(visaCountryDataArray)
    return (
        <>
            {
               visaCountryDataArray.length > 0 && visaCountryDataArray.filter((details) => {
                    return search === '' ? details : details.title.toLowerCase().startsWith(search)
                }).map((details) => (
                    <Link to={"/globla-visa/visa-page"} className='  h-[12rem] bg-white rounded-[10px]'>
                        <div className="w-full h-full  flex  flex-col items-center  rounded-[10px] gap-x-6 gap-y-6 md:gap-y-9 border border-primary-color  ">
                            <div className='w-full h-[6rem] flex-1 flex shadow-lg'>
                                <img src={details.imgae} alt="" className='rounded-t-[10px]' />
                            </div>
                            <div className='flex  justify-center w-full h-fit '>
                                <p className='font-semibold text-xl text-center uppercase'>{details.title}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default VisaCountryMap
