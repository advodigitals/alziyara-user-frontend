import React, { useState } from 'react'
import Layouts from '../Layouts/Layouts'
import hajjUmrahHeadingImage from '../Assets/images/hajj&umrah-heading-image.jpg'
import hajjUmrahExplainImage from "../Assets/images/umrah-hajj-image.jpg"
import umrahBackgroundImage from "../Assets/images/umrah-background-image.jpg"
import { Link } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

const HajjUmrah = () => {
   const [pillarUmrahIsOpen, setPillarUmrahIsOpen] = useState(null)
   const [umrahMainSpotsIsOpen, setUmrahMainSpotsIsOpen] = useState(null)

   const handleUmrahMainSpotsIsOpen = (index) => {
      if (index === umrahMainSpotsIsOpen) {
         setUmrahMainSpotsIsOpen(null)
      } else {

         setUmrahMainSpotsIsOpen(index)
      }

   }


   const handlePillarsOfUmrahIsOpen = (index) => {
      if (index === pillarUmrahIsOpen) {
         setPillarUmrahIsOpen(null)
      } else {

         setPillarUmrahIsOpen(index)
      }

   }

   const UmrahPillers = [
      {
         step: "Step 1",
         name: "Ihram (الإحرام)",
         explanation: "Starting from one of the Miqat or when aligning with them on the plane, Ihram for Umrah or Hajj commences. For individuals who wish to take Ihram in order to perform Umrah or Hajj, the Prophet, peace and blessings be upon him, designated certain locations as Miqat."
      },
      {
         step: "Step 2",
         name: "Tawaf (الطواف)",
         explanation: "Tawaf is the seven-circumambulation of the Kaaba. Beginning with the Black stone, which is located on the pilgrim's left side. The pilgrim should use this time for supplication and prayer."
      },
      {
         step: "Step 3",
         name: "Sa’i (السعي)",
         explanation: "Sa’ee begins with Safa and finishes at Marwa, two small hills close to the Kaaba. Every direction is counted as one as Muslims move back and forth between them seven times. It is suggested that the performer supplicate, pray, or read the Quran during this time."
      },
      {
         step: "Step 4",
         name: "Tahallul (التحلل أو الحلق/التقصير)",
         explanation: "Tahallul is shaving or trimming the hair, which marks the completion of Umrah."
      },
   ]
   const serviceArray = [
      {
         title: "Visa Assistance",
         text: "Smooth and easy visa application for a stress-free journey."
      },
      {
         title: "Accommodation Arrangements",
         text: "Comfortable and convenient accommodations near holy sites."
      },
       {
         title: "Expert Guided Tours",
         text: "Culturally enriching and insightful spiritual guidance."
      },
       {
         title: "Transportation Services",
         text: "Reliable transportation services throughout your pilgrimage."
      },
       {
         title: "24/7 Support",
         text: "A dedicated support team is available anytime for assistance."
      },
       {
         title: "Group Packages",
         text: "Customized itineraries for groups of all sizes."
      },
   ]
   return (
      <>
         <Layouts>
            <div className="flex h-full w-full max-w-[2000px] mx-auto flex-col  items-center gap-8  pb-4" >
               <div id="heading-image-section" className="w-full h-fit  sm:h-[25rem] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${hajjUmrahHeadingImage})` }}>
                  <div className="w-full  h-full bg-black bg-opacity-70 flex flex-col items-center justify-center gap-7">
                     <div className="w-full max-w-[900px] mx-auto px-2 sm:py-2 py-5">
                        <h1 className="capitalize text-white font-semibold text-6xl text-center">journey to the holy cities with us</h1>
                     </div>
                     <div className=" w-full max-w-[650px] mx-auto px-2 sm:py-2 py-5">
                        <p className="text-white text-lg text-center">Your dream to visit the holy cities of Mecca and Madina is now our responsibility. We ensure that your journey to perform hajj and umrah is smooth and peaceful.</p>
                     </div>

                  </div>
               </div>
               
               <div className="flex lg:flex-row flex-col w-full h-fit max-w-[1200px] mx-auto px-4">
                  <div id="image-section" className="flex  flex-1 p-3 items-center justify-center lg:justify-normal">
                     <img className="  w-[80%] rounded-[10px]  " src={hajjUmrahExplainImage} alt="" />
                  </div>
                  <div id="text" className="flex h-full flex-1 justify-center  items-end pt-6">
                     <div className="flex flex-col w-full h-full gap-6 ">
                        <h1 className=" text-black font-semibold text-5xl lg:text-left text-center leading-[54px]">Your sacred pilgrimage with Alziyara Travels</h1>
                        <p className="text-third-color text-lg text-left">For decades, Safiya Travels has been a trusted guide for pilgrims embarking on the journeys of Hajj and Umrah. We understand
                           the profound importance of these sacred experiences and strive to provide exceptional service. Whether you seek a meticulously planned individual Hajj tour or a flexible
                           Umrah package, we are here to ensure a seamless and stress-free experience. We prioritize personalized attention, and itineraries to your specific needs and preferences.
                           Our Hajj and Umrah packages offer carefully curated accommodations close to the Holy Sites, ensuring easy access and minimizing travel time. Additionally, we offer year-
                           round Umrah packages designed to accommodate your schedules.</p>
                        <hr className='border-[8px_solid_#9d9d9d] mx-3 my-6' />
                     </div>
                  </div>
               </div>

               <div className="flex w-full h-[30rem] flex-col items-center bg-hash-color-bg pt-6 gap-7">
                  <h1 className="text-4xl font-bold text-black text-center">Available Packages<span className="text-primary-color">.</span></h1>
                  <div className=" w-full h-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center px-3">
                     <Link className='h-fit w-fit'>
                        <div className="flex w-[300px] h-[250px] rounded-[10px] bg-primary-color">

                        </div>
                     </Link>
                  </div>
               </div>

               <div className="flex h-fit w-full max-w-[1400px] mx-auto flex-col items-center gap-7 px-2">
                  <h1 className="text-4xl font-bold text-black">Services we Provide<span className="text-primary-color">.</span></h1>
                  <div className="flex h-full w-full lg:flex-row flex-col ">
                     <div className="flex  basis-1/4 items-center lg:justify-start justify-center">
                        <h1 className="text-5xl  font-medium text-primary-color leading-[68px] "><span className="text-5xl  font-bold text-black leading-[58px]">Explore </span>World with <span className="text-5xl  font-bold text-black leading-[58px]">Expertise</span>.</h1>
                     </div>
                     <div className="flex h-full basis-3/4 flex-wrap  justify-center gap-x-4 p-2 gap-y-5">
                        {
                           serviceArray.map((service) => (
                              <div className="flex w-[360px] shadow-lg shadow-slate-600/50 rounded-[10px] px-2 py-6  bg-white flex-row items-start justify-center gap-3">
                                 <Icon className='text-primary-color' icon="simple-icons:ticktick" width="29" height="29" />
                                 <div className="flex  h-full flex-col  gap-4">
                                    <h3 className="text-black text-xl font-semibold">{service.title}</h3>
                                    <p className="text-third-color ">{service.text}</p>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </div>

               <div className="w-full h-fit bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${umrahBackgroundImage})` }}>
                  <div className="w-full  h-full   bg-gradient-to-b from-white opacity-90 flex flex-col justify-start gap-5 px-2 py-4 pt-10">
                     <div className="flex flex-col max-w-[900px] w-full h-fit gap-9">
                        <h1 className="text-3xl text-black font-light">About <span className="text-black font-semibold text-3xl">Umrah</span></h1>
                        <p className="text-black text-xl font-normal">Experience the spiritual journey of Umrah with comfort and peace of mind. Umrah is a sacred pilgrimage to Makkah, performed by Muslims seeking blessings,
                           forgiveness, and closeness to Allah. Unlike Hajj, it can be performed at any time of the year, making it a beautiful opportunity for believers to renew their faith and find inner peace. We are here
                           to make your journey smooth and memorable, so you can focus on worship while we take care of the rest.</p>
                     </div>
                     <div className="flex flex-col md:flex-row h-full w-full px-4 gap-6">
                        <div className="flex h-full flex-1 flex-col gap-3">
                           <div className="p-3 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                              <h3 className="text-black text-2xl font-semibold capitalize">Pillars Of Umrah <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                           </div>
                           <div className="flex flex-col h-full w-full gap-5">
                              {
                                 UmrahPillers.map((step, index) => (
                                    <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-3  " onClick={() => handlePillarsOfUmrahIsOpen(index)}>
                                       <p className="capitalize text-black font-semibold text-lg justify-center  flex  min-w-[100px] ">{step.step}</p>
                                       <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                          <p className="capitalize text-black text-lg font-semibold ">{step.name}</p>
                                          <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${pillarUmrahIsOpen === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                             <p className="capitalize text-third-color text-base font-medium ">{step.explanation}</p>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                        <div className="flex h-full flex-1 flex-col gap-3">
                           <div className="p-3 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                              <h3 className="text-black text-2xl font-semibold capitalize">top attractions <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                           </div>
                           <div className="flex flex-col h-full w-full gap-5">
                              <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-3  " onClick={() => handleUmrahMainSpotsIsOpen(1)}>
                                 <p className=" min-w-[100px] "></p>
                                 <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                    <p className="capitalize text-black text-lg font-semibold ">Ihram</p>
                                    <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${umrahMainSpotsIsOpen === 1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                       <p className="capitalize text-third-color text-base font-medium ">
                                          Starting from one of the Miqat or when aligning with them on the plane, Ihram for Umrah or Hajj commences. For individuals who wish to take Ihram in order to perform Umrah or Hajj, the
                                          Prophet, peace and blessings be upon him, designated certain locations as Miqat.
                                       </p>
                                    </div>
                                 </div>
                              </div>
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

export default HajjUmrah
// shadow-white/50