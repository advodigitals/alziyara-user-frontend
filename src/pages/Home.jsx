
// import ContactButton from '../constants/ContactButton'
import LateestFromUs from '../Components/LateestFromUs'
import Layouts from '../Layouts/Layouts'
import AboutUs from './AboutUs'

import SwiperCode from './Swiper/SwiperCode'
import SwiperYoutube from './Swiper/SwiperYoutube'
// import { useRef } from "react"
// import { Swiper as SwiperType } from "swiper";
const Home = () => {

  return (
    <Layouts>
      <div className="w-full max-w-[1400px]  bg-white flex items-center flex-col mx-auto ">
        {/* h-[calc(100vh-95px)] */}
        <div id='Heading-section' className=" pb-[20px] mt-2 mb-2 px-4">
          <h1 className="sm:text-[2.5rem]  text-[2rem] sm:leading-[3.3rem] leading-[1.8rem] tracking-wide  font-medium text-third-color max-w-[800px] text-center" >
            Complete Travel Solutions with <br />
            <span className="text-primary-color font-medium sm:text-[3rem] text-[1.8rem] typed-[Care.;Comfort.;Commitment.] typed-caret"> </span>
            {/* <span className="text-primary-color font-bold"> </span> */}
          </h1>
        </div>
        <div className='w-full relative flex justify-between pb-[20px]  '>
          <div className="flex max-w-[1400px] w-screen flex-1 max-h-[600px]">
            <div id="leftgradient" className="absolute  top-0 bottom-[20px] left-0 w-[10vw] z-40  bg-gradient-to-r from-white  ">
              {/* <PrevButton swiperRef={swiperRef} /> */}
            </div>
            <div id="rightgradient" className="absolute  top-0 bottom-[20px] right-0 w-[10vw] z-40 bg-gradient-to-l from-white ">
              {/* <NextButton swiperRef={swiperRef} /> */}
            </div>
            <SwiperCode />
          </div>
        </div>
      </div>
      <div id="aboutUs" className="   flex items-center gap-5 justify-center py-5 flex-wrap container px-4 mx-auto">
        <div className="flex h-[35vh] text-left w-[18rem]  flex-col items-center justify-center rounded-[10px] pl-[6px] ">

          <div>
            <h1 className="text-5xl font-bold  text-left text-primary-color">100k+</h1>
            <h1 className="text-lg  text-left text-third-color">Happy Customers</h1>
          </div>

        </div>
        <div className="flex h-[35vh] w-[18rem] flex-col items-center  justify-center rounded-[10px] pl-[6px] ">

          <div>
            <h1 className="text-5xl font-bold text-left text-primary-color">6+</h1>
            <h1 className="text-lg text-left text-third-color">Branches</h1>
          </div>

        </div>
        <div className="flex h-[35vh] w-[18rem]  flex-col  items-center justify-center rounded-[10px] pl-[6px] ">

          <div>
            <h1 className="text-5xl text-left font-bold text-primary-color">9000+</h1>
            <h1 className="text-lg  text-left text-third-color">Tickets Sold</h1>
          </div>

        </div>

          <AboutUs/>
          <LateestFromUs/>
          <SwiperYoutube/>
      </div>
    </Layouts>
  )
}
export default Home 
