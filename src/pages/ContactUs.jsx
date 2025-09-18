import React from 'react'
import Layouts from '../Layouts/Layouts'
import contactTopIMage from "../Assets/images/hajj&umrah-heading-image.jpg"
import { Link } from 'react-router'


const ContactUs = () => {
  return (
    <>
      <Layouts>
        <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col items-center gap-5 pb-4">
          <div id="top-image" className="w-full h-[30rem]  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${contactTopIMage})` }}>
            <div className="w-full h-full bg-black bg-opacity-60 flex  justify-center items-center">
              <div className="w-full max-w-[900px] mx-auto flex flex-col items-center justify-start px-2 sm:py-2 py-5 gap-2">
                <p className="text-white text-4xl font-extralight text-center uppercase ">let's keep in touch</p>
                <h1 className="uppercase text-white font-semibold text-6xl ">contact us</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[40rem] max-w-[1400px] mx-auto flex flex-row">
            <div className="h-full flex flex-1  flex-col items-center px-3">
              <div className="w-full h-[80%]  flex  items-center justify-center px-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8361146929947!2d76.070724!3d11.050911099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a91d42e766b%3A0x4f644a940026bddb!2sAl%20ZIYARA%20TRAVELS%20%26%20HAJJ%20UMRAH%20SERVICE!5e0!3m2!1sen!2sin!4v1758020193339!5m2!1sen!2sin" className='w-full h-full border-none rounded-[10px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="w-full flex-1 flex-col flex items-start justify-center  px-8 py-2 rounded-[10px]">
                
                <a href="/">
                  <p className="text-black text-2xl font-medium">www.alziyaratravels.com</p>
                </a>

                <a href="mailto:support@alziyaratravels.com" className="">
                  <p className="text-black text-2xl font-medium">support@alziyaratravels.com</p>
                </a>

              </div>
            </div>
            <div className="h-full flex flex-1 flex-col items-center justify-start px-3 py-2">
                <div className="w-full h-fit flex flex-col gap-3 p-2 ">
                    <h5 className="text-black text-3xl font-normal uppercase">have questions? ask away<span className="text-primary-color font-normal text-2xl">.</span></h5>
                    <p className="text-third-color text-xl font-normal uppercase">We’re here to answer all your travel queries<span className="text-primary-color font-normal text-xl">.</span></p>
                </div>
                <div className="w-full h-fit flex flex-col p-2 gap-2">
                  <label htmlFor="" className="capitalize text-base font-normal text-third-color ">name <span className="text-primary-color font-normal text-base">:</span></label>
                  <input type="text" className="border-none outline-none text-third-color font-normal text-base py-2" placeholder='Name' />
                  <hr className="border-primary-color border-solid " />
                </div>
                 <div className="w-full h-fit flex flex-col p-2 gap-2">
                  <label htmlFor="" className="capitalize text-base font-normal text-third-color ">phone <span className="text-primary-color font-normal text-base">:</span></label>
                  <input type="number" className="border-none outline-none text-third-color font-normal text-base py-2" placeholder='Phone Number' />
                  <hr className="border-primary-color border-solid " />
                </div>
                 <div className="w-full h-fit flex flex-col p-2 gap-2">
                  <label htmlFor="" className="capitalize text-base font-normal text-third-color ">drop us a line <span className="text-primary-color font-normal text-base">:</span></label>
                  <input type="text" className="border-none outline-none text-third-color font-normal text-base py-2" placeholder='Message' />
                  <hr className="border-primary-color border-solid " />
                </div>
                 <Link className='w-full h-full '>
                 <div className="w-full h-full ">
                  
                 </div>
                 </Link>
            </div>

          </div>

        </div>
      </Layouts>
    </>
  )
}

export default ContactUs
