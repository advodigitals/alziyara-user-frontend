import React from 'react'
import Layouts from '../Layouts/Layouts'
import contactTopIMage from "../Assets/images/hajj&umrah-heading-image.jpg"
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'
import { branchDetails } from '../constants/FooterBranchDetails'


const ContactUs = () => {
  return (
    <>
      <Layouts>
        <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col items-center gap-5 pb-24 lg:pb-4">
          <div id="top-image" className="w-full h-[30rem]  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${contactTopIMage})` }}>
            <div className="w-full h-full bg-black bg-opacity-60 flex  justify-center items-center">
              <div className="w-full max-w-[900px] mx-auto flex flex-col items-center justify-start px-2 sm:py-2 py-5 gap-2">
                <p className="text-white text-4xl font-extralight text-center uppercase ">let's keep in touch</p>
                <h1 className="uppercase text-white font-semibold text-6xl text-center">contact us</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-fit max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="h-fit flex flex-1  flex-col items-center px-4">
              <div className="w-full h-[25rem] md:h-[30rem]  flex  items-center justify-center ">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8361146929947!2d76.070724!3d11.050911099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a91d42e766b%3A0x4f644a940026bddb!2sAl%20ZIYARA%20TRAVELS%20%26%20HAJJ%20UMRAH%20SERVICE!5e0!3m2!1sen!2sin!4v1758020193339!5m2!1sen!2sin" className='w-full h-full border-none rounded-[10px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className=" w-full flex-1 flex-col flex items-start justify-center  py-2 rounded-[10px]">

                <a href="/">
                  <p className="text-black text-lg sm:text-2xl font-medium">www.alziyaratravels.com</p>
                </a>

                <a href="mailto:support@alziyaratravels.com" className="">
                  <p className="text-black text-lg sm:text-2xl font-medium">support@alziyaratravels.com</p>
                </a>
              </div>
            </div>
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

          </div>
          <div className="w-full h-fit max-w-[1400px] mx-auto flex flex-col items-center gap-8 bg-hash-color-bg p-3">
            <h1 className="text-4xl font-bold text-black text-center">Available Packages<span className="text-primary-color">.</span></h1>
            {
              branchDetails.map((details) => (
                <div className="w-fit h-fit flex flex-col md:flex-row justify-center items-center  bg-white shadow-lg shadow-slate-600/50 rounded-[10px] gap-10 py-6 md:py-3 px-1 md:px-8">
                  <div className="h-fit  flex-1 flex flex-col w-full max-w-[300px] justify-center items-center gap-3">
                    <div className="flex flex-row justify-center items-center gap-2 ">
                      <Icon icon="ion:location-sharp" className="text-primary-color font-semibold text-xl" />
                      <h5 className="text-black text-lg font-medium uppercase">{details.name}</h5>
                    </div>
                    <p className="text-third-color text-lg font-normal capitalize text-center">{details.address}</p>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <Icon icon="si:phone-fill" className="text-primary-color font-semibold text-xl" />
                      <a href={details.href}><p className="font-medium text-lg text-third-color hover:text-black ">{details.number}</p></a>
                    </div>
                  </div>
                  <div className="h-fit w-fit ">
                    <iframe title='map' src={details.map} className='w-[270px] sm:w-[300px] h-[200px] border-none rounded-[10px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>

                </div>
              ))
            }

          </div>

        </div>
      </Layouts>
    </>
  )
}

export default ContactUs
// href={details.href}
