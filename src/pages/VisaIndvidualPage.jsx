import React from 'react'
import Layouts from '../Layouts/Layouts'
import VisaBg from '../Assets/images/visabg.jpg'

const VisaIndvidualPage = () => {
    return (
        <>
            <Layouts>
                <div className="h-full w-full  max-w-[2000px] mx-auto flex flex-col gap-5">
                    <div id="img" className="w-full  h-[20rem] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${VisaBg})` }}>
                        <div className='h-full w-full flex '>
                            <div className='container mx-auto flex flex-col justify-center md:items-start items-center'>
                                <h1 className="text-4xl font-bold text-black text-left">AUSTRIA VISA</h1>
                                <p className="w-fit text-lg font-medium text-white text-left bg-primary-color p-2 rounded-[10px]">Price Starting at <span className='capitalize text-2xl font-medium text-white text-center'>INR 14515*</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-full  flex-col gap-3 container mx-auto items-center md:items-start pb-10">
                        <h1 className='text-2xl font-semibold'>Types of AUSTRIA Visa</h1>
                        <div className="  w-full h-full grid justify-center ">
                            <div className="w-full h-full grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-5">
                                <div id='card' className="flex flex-col h-fit w-fit border">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default VisaIndvidualPage
