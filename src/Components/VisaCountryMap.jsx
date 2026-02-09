import React from 'react'
import { Link } from 'react-router'

const VisaCountryMap = ({ visaCountryDataArray }) => {

    setTimeout(function(){
        document.getElementById("no-data").classList.remove("hide");
    }, 5000)

    return (
        <>
            {
                visaCountryDataArray.length > 0
                    ?
                    visaCountryDataArray.map((details) => (
                        <Link data-aos="fade-down" to={`/visa/${details.title}`} className='  h-full bg-white rounded-[10px]'>
                            <div className="w-full h-full  flex  flex-col items-center  rounded-[10px] gap-x-6 gap-y-6 md:gap-y-9 border border-primary-color  ">
                                <div className='w-full h-[6rem] flex-1 flex shadow-lg'>
                                    <img src={details.imgae} alt="" className='rounded-t-[10px] w-full' />
                                </div>
                                <div className='flex  justify-center w-full h-fit '>
                                    <p className='font-semibold text-xl text-center uppercase'>{details.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                    :
                    
                    <div id='no-data' className="hide w-full h-full flex justify-center items-center  ">
                        <p className="text-third-color text-lg font-medium capitalize ">Not available</p>
                    </div>

            }
        </>
    )
}

export default VisaCountryMap

