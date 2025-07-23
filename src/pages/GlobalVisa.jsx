import React from 'react'
import Layouts from '../Layouts/Layouts'
import VisaBg from '../Assets/images/visabg.jpg'
import { Link } from 'react-router'
import { glblVisaCountryDetails } from '../constants/GlobalVisaData'

const GlobalVisa = () => {


    return (
        <>
            <Layouts>
                <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center pb-4 ">
                    <div id="img" className="w-full h-[28rem] flex justify-center items-center flex-col gap-10   bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${VisaBg})` }}>
                        <h1 className="text-7xl font-bold text-black text-center">GLOBAL VISA</h1>
                        <p className="capitalize text-3xl font-medium text-black text-center">search the country</p>
                        <div id="search-input" className="px-2 w-full flex justify-center items-center ">
                            <input type="text" placeholder='Country Name' className='min-w-[20rem] h-[3rem] pl-4 rounded-[10px] border-none outline-none' />
                        </div>
                    </div>
                    <div className='w-full h-full  flex flex-col gap-4 md:gap-8 bg-white' >

                        <div id="text" className="px-4 justify-center text-center sm:mt-5 text-base">
                            <p className="">
                                We provide fast and reliable global visa services to help you travel anywhere with ease. Our team guides you through every step, from preparing your
                                documents to getting your visa approved. Whether it’s for tourism, business, or study, we make the process simple and stress‑free.
                            </p>
                        </div>
                        <div className="h-full w-full max-w-7xl mx-auto sm:px-5 px-2 grid ">
                            <div id="visa-section" className=" h-full w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 gap-4 ">
                                {
                                    glblVisaCountryDetails.map((details) => (
                                        <Link className='  h-[12rem] bg-white rounded-[10px]'>
                                            <div className="w-full h-full  flex  flex-col items-center  rounded-[10px] gap-x-6 gap-y-6 md:gap-y-9 border border-primary-color  ">
                                                <div className='w-full h-[6rem] flex-1 flex shadow-lg'>
                                                    <img src={details.imgae} alt="" className='rounded-t-[10px]' />
                                                </div>
                                                <div className='flex  justify-center w-full h-fit '>
                                                    <p className='font-semibold text-xl text-center'>{details.title}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default GlobalVisa
// style={{ backgroundImage: `url(${VisaBg})`}}