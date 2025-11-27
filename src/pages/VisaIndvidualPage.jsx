import React, { useState } from 'react'
// import { Link } from 'react-router'
import Layouts from '../Layouts/Layouts'
import { useParams } from 'react-router'
import VisaBg from '../Assets/images/visabg.jpg'
import { Icon } from '@iconify/react/dist/iconify.js'
import { VisaDetails } from '../constants/VisaDetails'



const VisaIndvidualPage = () => {
    const { name } = useParams()
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
            <Layouts>
                <div className="h-full w-full  max-w-[2000px] mx-auto flex flex-col gap-5 ">

                    <div id="img" className="w-full  h-fit bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${VisaBg})` }} >
                        <div className="bg-black  bg-opacity-50 w-full h-full ">
                            <div className='h-full w-full flex items-center mx-auto py-8'>
                                <div className='container mx-auto flex flex-col justify-center md:items-start items-center'>
                                    <h1 className="text-4xl font-bold text-white text-left">{name} VISA</h1>
                                    {/* <div className="w-fit bg-white  p-2 rounded-[10px] shadow-lg shadow-slate-800/100">
                                        <p className="w-fit text-lg font-medium text-black text-left ">Price Starting at <span className='capitalize text-2xl font-medium text-primary-color text-center'>INR 14515*</span></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-full w-full flex-col gap-3 container  mx-auto items-center md:items-start  ">
                        {/* <h1 className='text-2xl font-semibold '>available visas </h1> */}
                        <h3 className="text-2xl font-medium text-third-color text-left capitalize">available visa options <span className="text-primary-color text-2xl font-medium ">:</span></h3>
                        <div className="  w-full h-full grid  md:justify-normal justify-center  mx-auto">
                            <div className="w-full h-full grid justify-center  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">


                                {/* <div id='card' className="flex flex-col h-fit w-fit border">
                                    <div className="flex bg-blue-500 pl-4">
                                        <p className='text-white text-xl py-3 font-bold'>TOURIST</p>
                                    </div>
                                    <div className="flex flex-col px-4 py-5 gap-3">
                                        <div className="flex flex-row justify-between gap-10">
                                            <span className="text-left font-normal text-base">Processing time:</span>
                                            <span className="text-right font-normal text-base">Upto 15 days</span>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <span className="text-left font-normal text-base">Stay period:</span>
                                            <span className="text-right font-normal text-base">90 DAYS </span>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <span className="text-left font-normal text-base">Validity:</span>
                                            <span className="text-right font-normal text-base">  6 MONTHS</span>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <span className="text-left font-normal text-base">Entry:</span>
                                            <span className="text-right font-normal text-base">SINGLE</span>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <span className="text-left font-normal text-base">Fees:</span>
                                            <span className="text-right font-normal text-base">INR 12770/-</span>
                                        </div>
                                    </div>
                                    <div className="flex w-full bg-red-500 justify-center">
                                        <p className='text-white text-base py-3 font-normal '>Required Documents</p>
                                    </div>
                                </div> */}

                                {/* <Link className='h-fit w-fit'>
                                    <div className="flex w-[300px] h-[250px] rounded-[10px] ">
                                    <img src={notAvailableImage} alt="" />
                                    </div>
                                </Link> */}
                                {
                                    VisaDetails.map((visa, index) => (
                                        <div className='h-fit w-fit flex flex-row rounded-[10px] cursor-pointer  ' onClick={() => handleIsOpen(index)}>
                                            <div className={`flex  rounded-[10px] justify-center items-center   text-white hover:text-primary-color bg-primary-color hover:bg-white overflow-hidden transition-all duration-[.5s] shadow-lg shadow-slate-600/50 border border-primary-color  ${isOpen === index ?  `w-0 h-0 opacity-0` : `h-[150px] w-[280px] opacity-100 px-2`  }`}>
                                                <p className=" text-3xl font-medium capitalize text-center ">{visa.name}</p>
                                            </div>
                                            <div className={`overflow-hidden transition-all duration-[0.5s] rounded-[10px]   text-primary-color bg-white shadow-lg shadow-slate-600/50 border border-primary-color ${isOpen === index ? "min-h-[150px] w-[280px] opacity-100 px-2  " : "h-0 w-0 opacity-0"}`}>
                                                <ul className=" flex flex-col ">
                                                    {visa.documets && visa.documets.map((points) => (
                                                        <li className="flex flex-row items-center  capitalize text-black font-medium ">
                                                            <span className=""><Icon className='' icon="bi:dot" width="40" height="40" /></span>
                                                            <span className='text-lg '>{points}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                                 
                            

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center md:justify-end">
                        <div className="h-[12rem] w-[23rem] flex bg-gray-800 backdrop-blur bg-clip-padding bg-opacity-30 md:fixed md:right-5 md:bottom-5 md:z-30 rounded-[10px] shadow-lg border flex-col p-4 gap-2">
                            <h1 className="text-xl font-boblack">Need Help?</h1>
                            <p className='text-base text-black'>Our visa team is ready to assist you with all your questions.</p>
                            <a href="https://api.whatsapp.com/send?phone=+918289830339&text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20visa%20options%20and%20requirements%20for%20Australia">
                                <div className='flex flex-row gap-5 items-center'>
                                    <span ><Icon icon="logos:whatsapp-icon" width="20" height="20" /></span>
                                    <p className='text-black'>+91 8289 830 339</p>
                                </div>
                            </a>
                            <div className="flex flex-row gap-5 items-center">
                                <span><Icon icon="streamline-stickies-color:mail-duo" width="20" height="20" /></span>
                                <p className='text-black'>support@alziyaratravels.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default VisaIndvidualPage
