import React from 'react'
import { Link } from 'react-router'


const HajjUmrahPackageSection = () => {
  return (
    <>
      <div className="flex w-full h-fit max-w-[2000px] mx-auto flex-col items-center bg-hash-color-bg py-6 gap-8">
        <h1 className="text-4xl font-bold text-black text-center capitalize">available packages<span className="text-primary-color text-4xl font-bold">.</span></h1>
        <div className="flex w-full h-fit flex-col container mx-auto items-start gap-4">
          <h3 className="text-2xl font-medium text-black text-left capitalize">umrah packages<span className="text-primary-color text-2xl font-medium ">:</span></h3>
          <div data-aos="fade-up" className=" w-full h-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
          </div>
        </div>

        <div className="flex w-full h-fit flex-col container mx-auto items-start gap-4">
          <h3 className="text-2xl font-medium text-black text-left capitalize">hajj packages<span className="text-primary-color text-2xl font-medium ">:</span></h3>
          <div data-aos="fade-up" className=" w-full h-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
            <Link className='h-fit w-fit'>
              <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default HajjUmrahPackageSection
