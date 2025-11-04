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
   const [pillarHajjIsOpen , setPillarHajjIsOpen] = useState(null)
   const [hajjMainSpotsIsOpen , setHajjMainSpotsIsOpen] = useState (null)

   const handleUmrahMainSpotsIsOpen = (index) => {
      if (index === umrahMainSpotsIsOpen) {
         setUmrahMainSpotsIsOpen(null)
      } else {

         setUmrahMainSpotsIsOpen(index)
      }

   }
   
      const handleHajjMainSpotsIsOpen = (index) => {
      if (index === hajjMainSpotsIsOpen) {
         setHajjMainSpotsIsOpen(null)
      } else {

         setHajjMainSpotsIsOpen(index)
      }

   }


   const handlePillarsOfUmrahIsOpen = (index) => {
      if (index === pillarUmrahIsOpen) {
         setPillarUmrahIsOpen(null)
      } else {

         setPillarUmrahIsOpen(index)
      }

   }

   const handlePillarsOfHajjIsOpen = (index) => {
      if (index === pillarHajjIsOpen) {
         setPillarHajjIsOpen(null)
      }else{
         setPillarHajjIsOpen(index)
      }
   }

   const HajjPillers = [
      {
         step: "Ihram",
         dateName: " 8th Dhul-Hijjah (ذو الحجة)",
         activities: [
            "Ihram (إحرام) – Make the intention for Hajj, enter the sacred state of Ihram, and begin with Talbiyah: “لبيك اللهم لبيك…”",
         ]
      },
      {
         step: "Day 1",
         dateName: "8th Dhul-Hijjah - Mina (مِنى)",
         activities: [
            "Travel to Mina (مِنى)",
            "Spend the day and night in prayer and remembrance of Allah."
         ]
      },
      {
         step: "Day 2",
         dateName: " 9th Dhul-Hijjah - Arafah (عرفة)",
         activities: [
            "Move to Arafah (عرفة).",
            "Stand in Wuquf (وقوف) – the most important pillar of Hajj.",
            "After sunset, proceed to Muzdalifah (مزدلفة).",
            "Pray, rest under the open sky, and collect pebbles (ḥaṣā حصى)."
         ]
      },
      {
         step: "Day 3",
         dateName: "10th Dhul-Hijjah - Eid al-Adha (عيد الأضحى)",
         activities: [
            "Return to Mina (مِنى).",
            "Ramy (رمي الجمرات) → Throw 7 pebbles at the largest Jamarah (جمرة العقبة الكبرى).",
            "Qurbani (قرباني / نحر) → Offer the sacrifice of an animal.",
            "Halq (حلق) or Taqsir (تقصير) → Shave or shorten hair (women cut a small portion).Ihram restrictions are now lifted.",
            "Travel to Makkah (مكة المكرمة) → Perform Tawaf al-Ifadah (طواف الإفاضة) and Sa’i (سعي) between Safa (الصفا) and Marwah (المروة)."
         ]
      },
      {
         step: "Day 4",
         dateName: "11th–13th Dhul-Hijjah (أيام التشريق )",
         activities: [
            "Stay in Mina (مِنى).",
            "Each day, perform Ramy (رمي الجمرات) → Throw 7 pebbles at each of the three Jamarat (الجمرات الثلاث) → total 21 pebbles per day.",
            "Pilgrims may leave Mina after the 12th or remain until the 13th.",
         ]
      },
      {
         step: "Farewell",
         dateName: "Tawaf al-Wada (طواف الوداع)",
         activities: [
            "Tawaf al-Wada (طواف الوداع) – Perform the farewell circumambulation of the Kaaba, bidding goodbye to the Sacred House with love and gratitude.",

         ]
      },
   ]
   

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
            <div className="flex h-full w-full  flex-col  items-center gap-8  " >
               <div id="heading-image-section" className="w-full h-fit max-w-[2000px] mx-auto sm:h-[25rem] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${hajjUmrahHeadingImage})` }}>
                  <div className="w-full  h-full  bg-black bg-opacity-70 flex flex-col items-center justify-center gap-7">
                     <div className="w-full max-w-[900px] mx-auto px-2 sm:py-2 py-5">
                        <h1 className="capitalize text-white font-semibold text-6xl text-center">journey to the holy cities with us</h1>
                     </div>
                     <div className=" w-full max-w-[650px] mx-auto px-2 sm:py-2 py-5">
                        <p className="text-white text-lg text-center">Your dream to visit the holy cities of Mecca and Madina is now our responsibility. We ensure that your journey to perform hajj and umrah is smooth and peaceful.</p>
                     </div>

                  </div>
               </div>

               <div className="flex lg:flex-row flex-col w-full h-fit container mx-auto px-4">
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

               <div className="flex w-full h-fit max-w-[2000px] mx-auto flex-col items-center bg-hash-color-bg py-6 gap-8">
                  <h1 className="text-4xl font-bold text-black text-center capitalize">available packages<span className="text-primary-color text-4xl font-bold">.</span></h1>
                  <div className="flex w-full h-fit flex-col container mx-auto items-start gap-4">
                     <h3 className="text-2xl font-medium text-black text-left capitalize">umrah packages<span className="text-primary-color text-2xl font-medium ">:</span></h3>
                     <div className=" w-full h-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
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
                     <div className=" w-full h-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
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

               <div className="flex h-fit w-full container mx-auto flex-col items-center gap-7 px-2">
                  <h1 className="text-4xl font-bold text-black text-center">Services we Provide<span className="text-primary-color">.</span></h1>
                  <div className="flex h-full w-full lg:flex-row flex-col ">
                     <div className="flex  basis-1/4 items-center lg:justify-start justify-center">
                        <h1 className="text-5xl  font-medium text-primary-color leading-[68px] md:text-left text-center"><span className="text-5xl  font-bold text-black leading-[58px]">Explore </span>World with <span className="text-5xl  font-bold text-black leading-[58px]">Expertise</span>.</h1>
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
                  <div className="w-full  h-full bg-black bg-opacity-70 flex flex-col  justify-start gap-9 px-2 py-4 pt-10">
                     <div className="flex flex-col mx-auto container  w-full h-fit gap-9">
                        <h1 className="text-3xl text-white font-light max-w-[900px]">About <span className="text-white font-semibold text-3xl">Umrah</span></h1>
                        <p className="text-white text-xl font-normal max-w-[900px]">Umrah is a sacred journey of faith and devotion, giving every Muslim a chance to stand before the holy Kaaba, remember Allah sincerely, and seek forgiveness. Though smaller than Hajj, it brings great spiritual reward,
                           cleansing the soul, bringing peace to the heart, and renewing the believer’s connection with their Creator.</p>
                     </div>
                     <div className="container mx-auto flex flex-col md:flex-row h-full w-full px-4 gap-6">
                        <div className="flex h-full flex-1 flex-col gap-3">
                           <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                              <h3 className="text-black text-2xl font-semibold ">Pillars of Umrah <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                           </div>
                           <div className="flex flex-col h-full w-full gap-5">
                              {
                                 UmrahPillers.map((step, index) => (
                                    <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handlePillarsOfUmrahIsOpen(index)}>
                                       <p className="capitalize text-black font-semibold text-lg justify-center  flex  min-w-[100px] ">{step.step}</p>
                                       <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                          <p className="capitalize text-black text-lg font-semibold ">{step.name}</p>
                                          <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${pillarUmrahIsOpen === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                             <p className=" text-primary-color font-light text-base">{step.explanation}</p>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                        <div className="flex h-full flex-1 flex-col gap-3">
                           <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                              <h3 className="text-black text-2xl font-semibold capitalize">top attractions <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                           </div>
                           <div className="flex flex-col h-full w-full gap-5">
                              <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handleUmrahMainSpotsIsOpen(1)}>
                                 <p className=" min-w-[100px] "></p>
                                 <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                    <p className="capitalize text-black text-lg font-semibold ">Ihram</p>
                                    <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${umrahMainSpotsIsOpen === 1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                       <p className="text-primary-color font-light text-base">
                                          Starting from one of the Miqat or when aligning with them on the plane, Ihram for Umrah or Hajj commences. For individuals who wish to take Ihram in order to perform Umrah or Hajj, the
                                          Prophet, peace and blessings be upon him, designated certain locations as Miqat.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col mx-auto container  w-full h-fit gap-9">
                        <h1 className="text-3xl text-white font-light max-w-[900px] capitalize">about <span className="text-white font-semibold text-3xl">hajj</span></h1>
                        <p className="text-white text-xl font-normal max-w-[900px]">
                           Hajj is a sacred journey of faith where Muslims come together in Makkah, standing equal before Allah. It is a time of prayer, humility, and reflection, cleansing
                           the heart from sins and drawing closer to Allah with peace and devotion.
                        </p>
                     </div>
                     <div className="container mx-auto flex flex-col md:flex-row h-full w-full px-4 gap-6">
                        <div className="flex h-full flex-1 flex-col gap-3">
                           <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                              <h3 className="text-black text-2xl font-semibold ">Pillars Of Hajj <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                           </div>
                           <div className="flex flex-col h-full w-full gap-5">
                              {
                                 HajjPillers.map((day, index) => (
                                    <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handlePillarsOfHajjIsOpen(index)}>
                                       <p className="capitalize text-black font-semibold text-lg justify-center  flex  min-w-[100px] ">{day.step}</p>
                                       <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                          <p className="capitalize text-black text-lg font-semibold ">{day.dateName}</p>
                                          <div className={`overflow-hidden transition-all duration-[.5s] px-3 ${pillarHajjIsOpen === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                                             {/* <p className="capitalize text-third-color text-base font-medium ">{step.explanation}</p> */}
                                             <ul className="pl- flex flex-col gap-2">
                                                {day.activities && day.activities.map((points) => (
                                                   <div className="flex flex-row items-start">
                                                      <Icon icon="lucide:dot" className='text-primary-color font-light  ' width="25" height="25" />
                                                      <li className=" text-primary-color font-light text-base">
                                                         {points}
                                                      </li>
                                                   </div>
                                                ))}
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                        <div className="flex h-full flex-1 flex-col gap-3">
                           <div className="px-3 py-2 h-fit w-fit bg-white rounded-[10px] shadow-lg shadow-slate-800/100">
                              <h3 className="text-black text-2xl font-semibold capitalize">top attractions <span className='text-primary-color text-2xl font-semibold'>:</span></h3>
                           </div>
                           <div className="flex flex-col h-full w-full gap-5">
                              <div className="flex flex-row  h-fit bg-white  rounded-[10px] cursor-pointer shadow-lg shadow-slate-800/100  py-2  " onClick={() => handleHajjMainSpotsIsOpen(1)}>
                                 <p className=" min-w-[100px] "></p>
                                 <div className="flex flex-col  flex-1 items-start  gap-2 ">
                                    <p className="capitalize text-black text-lg font-semibold ">Ihram</p>
                                    <div className={`overflow-hidden transition-all duration-[0.5s] px-3 ${hajjMainSpotsIsOpen === 1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                                       <p className="text-primary-color font-light text-base">
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
//  text-third-color text-base font-medium