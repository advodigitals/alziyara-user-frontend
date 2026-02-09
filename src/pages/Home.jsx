
import React from 'react'
// import { useRef } from "react"
import Layouts from '../Layouts/Layouts'
// import { Swiper as SwiperType } from "swiper";
// import SwiperYoutube from './Swiper/SwiperYoutube'


const FAQ = React.lazy (() => import("../Components/FAQ"))
const Services = React.lazy (() => import("../Components/Services"))
const AboutCards = React.lazy(() => import("../Components/AboutCards"))
const SwiperSection = React.lazy (() => import("../Components/SwiperSection"))
const HeadingSection = React.lazy(() => import("../Components/HeadingSection"))
const AboutUsSection = React.lazy (() => import("../Components/AboutUsSection"))
const TestimonialsSection =  React.lazy (() => import("../Components/TestimonialsSection")) 
// const YoutubeSlider = React.lazy (() => import("../Components/YoutubeSlider"))





const Home = () => {


  return (
    <>
      <Layouts page={"Home"}>
        <div className="w-full max-w-[1400px]  bg-white flex items-center flex-col mx-auto ">
          <HeadingSection />
          <SwiperSection />
        </div>
        <div id="aboutUs" className="flex w-full max-w-[1400px] items-center gap-5 justify-center py-5 flex-wrap  mx-auto">
          <AboutCards />
          <Services />
          <AboutUsSection />
          {/* <YoutubeSlider /> */}
          {/* <InstagramSlider/> */}
          <FAQ />
          <TestimonialsSection />
        </div>
        
      </Layouts>
    </>
  )
}
export default Home 
