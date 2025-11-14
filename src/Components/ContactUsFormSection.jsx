import React from 'react'
import { Link } from 'react-router'


const ConstctUsFormSection = () => {
    return (
        <>
            <div className="h-full flex flex-1 flex-col items-center justify-start px-4 py-2 gap-6">
                <div className="w-full h-fit flex flex-col gap-3  ">
                    <h5 className="text-black text-3xl font-normal uppercase text-center md:text-left">have questions? ask away<span className="text-primary-color font-normal text-2xl">.</span></h5>
                    <p className="text-third-color text-xl font-normal uppercase text-center md:text-left">We’re here to answer all your travel queries<span className="text-primary-color font-normal text-xl">.</span></p>
                </div>
                <div className="w-full h-fit flex flex-col  gap-2">
                    <label htmlFor="" className="capitalize text-base font-normal text-third-color ">name <span className="text-primary-color font-normal text-base">:</span></label>
                    <input type="text" className="w-full border-none outline-none text-third-color font-normal text-base py-2" placeholder='Full Name' />
                    <hr className="border-primary-color border-solid " />
                </div>
                <div className="w-full h-fit flex flex-col  gap-2">
                    <label htmlFor="" className="capitalize text-base font-normal text-third-color ">phone <span className="text-primary-color font-normal text-base">:</span></label>
                    <input type="number" className="w-full border-none outline-none text-third-color font-normal text-base py-2 [&::-webkit-inner-spin-button]:appearance-none" placeholder='Phone Number' />
                    <hr className="border-primary-color border-solid " />
                </div>
                <div className="w-full h-fit flex flex-col  gap-2">
                    <label htmlFor="" className="capitalize text-base font-normal text-third-color ">message<span className="text-primary-color font-normal text-base">:</span></label>
                    <input type="text" className="w-full border-none outline-none text-third-color font-normal text-base py-2" placeholder='Drop Us a Line' />
                    <hr className="border-primary-color border-solid " />
                </div>
                <Link className='w-full h-full flex md:justify-start justify-center'>
                    <div className="w-fit  h-fit text-white py-3 px-5 rounded-[10px] hover:text-primary-color bg-primary-color hover:bg-white transition-all duration-[0.5s]  shadow-lg shadow-slate-600/50 border border-primary-color">
                        <p className=" font-semibold text-xl  tracking-wide uppercase ">submit</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ConstctUsFormSection
