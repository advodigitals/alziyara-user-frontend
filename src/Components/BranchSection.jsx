import React from 'react'
import { branchDetails } from '../constants/FooterBranchDetails'
import { Icon } from '@iconify/react/dist/iconify.js'

const BranchSection = () => {
    return (
        <div className="w-full h-fit container mx-auto flex flex-col  items-center gap-8 bg-hash-color-bg p-3 pb-10 mb-4">
            <h1 className="text-4xl font-bold text-black text-center capitalize">our locations<span className="text-primary-color">.</span></h1>
            <div className="w-full h-full flex flex-col lg:flex-row lg:justify-center items-center flex-wrap  xl:gap-8 gap-6 px-2">

                {
                    branchDetails.map((details, index) => (
                        <div className="w-fit h-fit">

                            <div key={index} className={`w-fit h-fit flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-between items-center  bg-white shadow-lg shadow-slate-600/50 rounded-[10px] gap-3 py-3 px-3`}>
                                <div className="h-fit  flex-1 flex flex-col w-fit justify-center items-center gap-3">
                                    <div className="flex flex-row justify-center items-center gap-2 max-w-[290px] w-full ">
                                        <Icon icon="ion:location-sharp" className="text-primary-color font-semibold text-xl" />
                                        <h5 className="text-black text-lg font-medium uppercase ">{details.name}</h5>
                                    </div>
                                    <p className="text-third-color text-lg font-normal capitalize text-center max-w-[290px] w-full ">{details.address}</p>
                                    <div className="flex flex-row justify-center items-center gap-2">
                                        <Icon icon="si:phone-fill" className="text-primary-color font-semibold text-xl" />
                                        <a href={details.href}><p className="font-medium text-lg text-third-color hover:text-black ">{details.number}</p></a>
                                    </div>
                                </div>
                                <div data-aos={(index % 2 === 0) ? "fade-left" : "fade-right"} className="h-fit w-fit hidden md:block ">
                                    <iframe title='map' src={details.map} className='w-[270px]  h-[200px] border-none rounded-[10px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <div  data-aos="fade-up" className="h-fit w-fit block md:hidden">
                                    <iframe title='map' src={details.map} className='w-[270px]  h-[200px] border-none rounded-[10px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                            </div>

                            
                        </div>



                    ))
                }

            </div>
        </div>
    )
}

export default BranchSection
