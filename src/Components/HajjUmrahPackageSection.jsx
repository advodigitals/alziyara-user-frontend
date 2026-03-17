import React from 'react'
import { Link } from 'react-router'


const HajjUmrahPackageSection = ({ packageData }) => {
  console.log("package data on the page",packageData,packageData.length)


  return (
    <>
      <div className="flex w-full h-fit max-w-[2000px] mx-auto flex-col items-center bg-hash-color-bg py-6 gap-8">
        <h1 className="text-4xl font-bold text-black text-center capitalize">available packages<span className="text-primary-color text-4xl font-bold">.</span></h1>
        <div className="flex w-full h-fit flex-col container mx-auto items-start gap-4">
          <h3 className="text-2xl font-medium text-black text-left capitalize">umrah packages<span className="text-primary-color text-2xl font-medium ">:</span></h3>
          <div className=" w-full h-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5  mx-auto  ">
            {
             packageData && packageData.length > 0 ? packageData.map((details) => (
                details.type === "umrah-packages" ?
                  <Link to={`/hajj-umrah/umrah/${details.slug}`} data-aos="fade-up" className='h-fit w-full max-w-[300px]'>
                    <div className="flex w-full h-[230px] rounded-[10px]  object-cover transition delay-50 duration-200 ease-in-out hover:-translate-y-[3px] hover:scale-105 shadow-lg shadow-slate-600/50  hover:shadow-slate-700/90">
                        <img src={details.coverImg} alt="" className="rounded-[10px] w-full " />
                    </div>
                  </Link>
                  :
                  ""
              ))
                :
                <div data-aos="fade-up" className='h-fit w-full max-w-[300px]'>
                  <div className="flex w-full h-[230px] justify-center items-center rounded-[10px]  text-white bg-primary-color  overflow-hidden transition-all duration-[.5s] shadow-lg shadow-slate-600/50 border border-primary-color">
                    <h3 className="  text-2xl font-semibold  capitalize text-center ">currently unavailable</h3>
                  </div>
                </div>
            }

          </div>
        </div>

        <div className="flex w-full h-fit flex-col container mx-auto items-start gap-4">
          <h3 className="text-2xl font-medium text-black text-left capitalize">hajj packages<span className="text-primary-color text-2xl font-medium ">:</span></h3>
          <div className=" w-full h-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
            {
             packageData && packageData.length > 0 ? packageData.map((details) => (
                details.type === "hajj-packages" ?
                  <Link to={`/hajj-umrah/hajj/${details.slug}`} data-aos="fade-up" className='h-fit w-full max-w-[300px] rounded-[10px]   '>
                    <div className="flex w-full h-[230px] rounded-[10px]  object-cover transition delay-50 duration-200 ease-in-out hover:-translate-y-[3px] hover:scale-105 shadow-lg shadow-slate-600/50  hover:shadow-slate-700/90">
                      <img src={details.coverImg} alt="" className="rounded-[10px] w-full " />

                    </div>
                  </Link>
                  :
                  ""
              ))
                :
                <div data-aos="fade-up" className='h-fit w-full max-w-[300px]'>
                  <div className="flex w-full h-[230px] justify-center items-center rounded-[10px]  text-white bg-primary-color  overflow-hidden transition-all duration-[.5s] shadow-lg shadow-slate-600/50 border border-primary-color">
                    <h3 className="  text-2xl font-semibold  capitalize text-center ">currently unavailable</h3>
                  </div>
                </div>
            }


          </div>
        </div>

      </div>
    </>
  )
}

export default HajjUmrahPackageSection
